import React from 'react';
import MyAux from '../../../hoc/myaux';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map( key => {
      return (
        <li key={key}>
          <span style={ {textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
        </li>
      );
    });

  return (
    <MyAux>
      <h3>Your Order</h3>
      <p>A delicious burder with the following ingredients: </p>
      <ul>{ ingredientSummary }</ul>
      <p>Continue to checkout?</p>
    </MyAux>
  );
};

export default orderSummary;
