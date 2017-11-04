import React, { Component } from 'react';
import MyAux from '../../../hoc/myaux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('ordersummary will update');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map( key => {
        return (
          <li key={key}>
            <span style={ {textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
          </li>
        );
      });
    return (
      <MyAux>
        <h3>Your Order</h3>
        <p>A delicious burder with the following ingredients: </p>
        <ul>{ ingredientSummary }</ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
      </MyAux>
    )
  }
}



export default OrderSummary;
