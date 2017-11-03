import React from 'react';
import MyAux from '../../hoc/myaux';
import classes from './Layout.css';

const layout = ( props ) => (
  <MyAux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </MyAux>

);

export default layout;
