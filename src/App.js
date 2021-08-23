import React , {lazy, Suspense} from 'react';
import {useHistory} from "react-router-dom";
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import {Switch, Route} from 'react-router-dom';
import {fetchStores} from "./services/stores/stores.service";
import Spinner from './components/Spinner/Spinner.component';

import './App.css';

const LazyHome = lazy(() => import ("./pages/Homepage/Homepage.component"));
const LazyProducts = lazy(() => import ("./pages/Product/Product.component"));
const LazySignIn = lazy(() => import ("./pages/Signin/Signin.component"));
const LazySignUp = lazy(() => import ("./pages/Signup/Signup.component"));
const LazyForgotpassword  = lazy(() => import ("./pages/ForgotPassword/ForgotPassword.component"));
const LazyCheckout = lazy(() => import ("./pages/Checkout/Checkout.component"));



function App() {
 

  return (
    
      <div className="app">
   <Suspense fallback={<Spinner />}>
   <Header />
      <Switch>
      <Route exact path="/" component={LazyHome}/>
      <Route  path="/products" component={LazyProducts} />
      <Route exact path="/sign-in" component={LazySignIn} />
      <Route exact path="/sign-up" component={LazySignUp}/>
      <Route exact path="/forgot-password" component={LazyForgotpassword} />
      <Route exact path="/checkout" component={LazyCheckout}/>
      
      
      </Switch>
      <Footer />
   </Suspense>
      </div>
      
    
  );
}

export default App;
