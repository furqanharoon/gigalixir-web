import * as api from './api'

export interface App {
  id: string
  stack?: string // TODO: make this required
  size: number
  replicas: number
  region: string
  cloud: string
}
interface Response {
  unique_name: string
  stack?: string
  size: number
  replicas: number
  region: string
  cloud: string
}

type Cloud = 'gcp' | 'aws'
type GcpRegion = 'v2018-us-central1' | 'europe-west1'
type AwsRegion = 'us-east-1' | 'us-west-2'

interface CloudRegion {
  cloud: Cloud
}

interface Aws extends CloudRegion {
  cloud: 'aws'
  region: AwsRegion
}

interface Gcp extends CloudRegion {
  cloud: 'gcp'
  region: GcpRegion
}

/* eslint-disable @typescript-eslint/camelcase */
// using object spread operator to copy over all fields except unique_name field
const renameIds = (apps: Response[]): App[] => {
  return apps.map(
    ({ unique_name, ...others }): App => ({
      id: unique_name,
      ...others
    })
  )
}

export const list = () => {
  return Promise.resolve({
    data: {
      total: 2,
      data: [
        {
          unique_name: 'fake-app-1',
          stack: 'gigalixir-18',
          size: 1.0,
          replicas: 1,
          region: 'v2018-us-central1',
          cloud: 'gcp'
        },
        {
          unique_name: 'fake-app-2',
          stack: 'gigalixir-18',
          size: 1.0,
          replicas: 1,
          region: 'v2018-us-central1',
          cloud: 'gcp'
        }
      ]
    }
  }).then((response): {
    data: App[]
    total: number
  } => {
    const apps = response.data.data
    return {
      data: renameIds(apps),
      total: apps.length
    }
  })
}

export const get = (id: string): Promise<{ data: App }> => {
  return api
    .get<{ data: { data: Response } }>(`/frontend/api/apps/${id}`)
    .then((response): { data: App } => {
      const { unique_name, ...others } = response.data.data
      return {
        data: {
          id: unique_name,
          ...others
        }
      }
    })
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const readableError = (errors: { [k: string]: string[] }): string => {
  return Object.keys(errors)
    .map((key): string => {
      // hack to map unique_name to name
      let name = key
      if (name === 'unique_name') {
        name = 'name'
      }
      name = capitalizeFirstLetter(name)
      return `${name} ${errors[key][0]}`
    })
    .join('. ')
}

export const create = (
  name: string,
  cloud: string,
  region: string
): Promise<{ data: App }> => {
  return api
    .post<{
      data: { data: { unique_name: string; replicas: number; size: number } }
    }>('/frontend/api/apps', {
      unique_name: name,
      cloud,
      region
    })
    .then((response): { data: App } => {
      const app = response.data.data
      return {
        data: {
          id: app.unique_name,
          cloud,
          region,
          replicas: app.replicas,
          size: app.size
        }
      }
    })
    .catch(
      (error: {
        response: { data: { errors: { [k: string]: string[] } } }
      }): never => {
        const { errors } = error.response.data
        const result = readableError(errors)
        throw new Error(result)
      }
    )
}
/* eslint-enable @typescript-eslint/camelcase */

// TODO: all the other ones take an App and return an App, this one doesn't because we don't really know where to get
// cloud and region and all the other fields from, which aren't returned in the API response.
export const scale = (
  name: string,
  size: number,
  replicas: number
): Promise<{ data: { size: number; replicas: number } }> => {
  return api
    .post<{ data: { replicas: number; size: number } }>(
      `/frontend/api/apps/${name}/scale`,
      {
        size,
        replicas
      }
    )
    .then((response): {
      data: { size: number; replicas: number }
    } => {
      const newApp = response.data
      return { data: { replicas: newApp.replicas, size: newApp.size } }
    })
}
