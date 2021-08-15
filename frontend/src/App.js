import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route,
  Switch
} from "react-router-dom";
import ProtectedAdminRoute from './components/adminDashboard/ProtectedAdminRoute';
import PrivateRoute from './components/cart/PrivateRouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Landing from './pages/Landing';
import PaymentSuccess from './pages/PaymentSuccess';
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';
import UserDashboard from './pages/UserDashboard';
import store from './redux/store';
import './styles/main.css';
import CheckUser from './util/CheckUser';
import LoadProducts from './util/LoadProducts';
import UpdateCart from './util/UpdateCart';

const promise = loadStripe('pk_test_51I0KvrHe2te0vM9Dwxuf5AJSbQoqDBSEGa593a51mojfrJ9hq4aoz3AEFIMKEE7k5hjz5s0g3dgyZuREsVLPp7ba00WUIPW2yJ')

function App() {
  return (
      <Provider  store={store}>
        <Router>
        <LoadProducts />
        <CheckUser />
        <UpdateCart />
            <Switch>
                <Route exact path="/">
                  <Header />
                  <Landing />
                  <Footer />
                </Route>
                <Route exact path="/auth">
                  <Auth />
                </Route>
                <Route exact path="/courses/:courseId" >
                  <Header />
                  <Product />
                  <Footer />
                </Route>
                <Route exact path="/cart" >
                  <ShoppingCart />
                  <Footer />
                </Route>
                <PrivateRoute path="/checkout" exact >
                  <Header />
                  <Elements stripe={promise}>
                    <Checkout />
                  </Elements>
                </PrivateRoute>
                <PrivateRoute path = "/payment-success" exact >
                  <PaymentSuccess />
                </PrivateRoute>
                  <ProtectedAdminRoute path='/admin' >
                    <AdminDashboard />
                  </ProtectedAdminRoute>
                <Route path="/my-account">
                  <UserDashboard />
                </Route>
                
            </Switch>
        </Router>
      </Provider>
  );
}

export default App;
