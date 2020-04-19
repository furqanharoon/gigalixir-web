import React from 'react'
import { MenuItemLink } from 'react-admin'


const SidebarStyle = {
  width: '250px',
  padding: '20px 20px 20px 40px'
} as React.CSSProperties

const SidebarLinkStyle = {
  borderRadius: '7px',
  padding: '15px',
  margin: '0 0 10px'
} as React.CSSProperties


const AppSideBar = () => {
  return (
    <div className="custom-sidebar" style={SidebarStyle}>
      {['Apps', 'Profile', 'Setting', 'Gallery'].map(item => (
        <MenuItemLink
          to={`/${item}`}
          style={SidebarLinkStyle}
          primaryText={item}
        />
      ))}
    </div>
  )
}

export default AppSideBar
