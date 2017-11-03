import React, { Component } from 'react';
import MyAux from '../hoc/myaux';
import Burger from '../components/Burger/Burger';

class BurgerBuilder extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <MyAux>
        <Burger />
        <div>Build Controls</div>
      </MyAux>
    )
  }
};

export default BurgerBuilder;
