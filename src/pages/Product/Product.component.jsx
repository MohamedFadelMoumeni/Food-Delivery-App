import React from 'react';
import {Route} from "react-router-dom";
import ProductHome from '../ProductHome/ProductHome.component'; 
import ProductPerStore from "../ProductPerStore/ProductPerStore.component";


const Product = ({match: {path}}) => {
    return (
      <>
            <Route exact  path={path} component={ProductHome}/>
            <Route exact  path={`${path}/:store`} component={ProductPerStore}/>
      </>
    )
}
export default Product;

