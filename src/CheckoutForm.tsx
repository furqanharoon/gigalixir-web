import React, {Component} from 'react';
import * as api from './api/api';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component<{stripe: any}> {
  constructor(props: any) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev: any) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    api.post("/frontend/api/upgrade", {
        stripe_token: token.id
    }).then((response) => {
        console.log("upgraded")
    })
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);