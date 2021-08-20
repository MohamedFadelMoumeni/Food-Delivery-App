import React from 'react';
import {useHistory} from "react-router-dom";
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

import Homepage from './pages/Homepage/Homepage.component';
import Products from './pages/Product/Product.component';
import SignIn from './pages/Signin/Signin.component'
import SignUp from './pages/Signup/Signup.component';
import Forgotpassword from "./pages/ForgotPassword/ForgotPassword.component";
import Checkout from "./pages/Checkout/Checkout.component";

import {Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  const history = useHistory();
  return (
    
      <div className="app">
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/products" component={Products} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/forgot-password" component={Forgotpassword} />
      <Route exact path="/checkout" component={Checkout}/>
      
      
      </Switch>
      <Footer />
      </div>
      
    
  );
}

export default App;
