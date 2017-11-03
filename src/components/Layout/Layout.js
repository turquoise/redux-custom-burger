import React from 'react';
import MyAux from '../../hoc/myaux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
  <MyAux>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </MyAux>

);

export default layout;
