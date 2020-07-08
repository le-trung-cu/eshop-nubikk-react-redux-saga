import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleDirectoryHidden } from './redux/directory/directory.actions'

import './App.css'
import MenuAside from './components/menu-aside/menu-aside.component'
import Header from './components/header/header.component'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
import MenHomePage from './pages/men-home-page/men-home-page.component'
import ShoesPage from './pages/shoes-page/shoes-page.component'
import CartFilterSortAside from './components/cart-filer-sorter-aside/cart-filter-sort-aside.component';
import CheckoutPage from './pages/checkout-page/checkout-page'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userServices from './services/user.services'
import { setCurrentUser } from './redux/user/user.actions'
import OrderPage from './pages/oder-page/order-page.component'
import SignInPage from './pages/sign-in-page/sign-in-page.component'


function App({ directoryHidden, toggleMenuHidden, user, setCurrentUser }) {
  useEffect(() => {
    const id = userServices.onUserChange((user) => {
      if (user) {
        toast.info('sign in success');
      }
      setCurrentUser(user);
    })
    return () => {
      userServices.removeObserver(id);
    }
  }, [])

  return (
    <div className="App">
      <div className="wrap">
        <MenuAside hidden={directoryHidden} />
        <div className="container">
          <Header toggleMenuHidden={toggleMenuHidden} />
          <main className="main">
            <Switch>
              <Route exact path='/' component={() => <HomePage />} />
              <Route exact path='/men-home' component={() => <MenHomePage />} />
              <Route exact path='/men/:category' component={() => <ShoesPage />} />
              <Route exact path='/checkout' component={() => <CheckoutPage />} />
              <Route exact path='/orders' component={() => <OrderPage />} />
              <Route exact path='/sign-in' component={() => <SignInPage />} />
            </Switch>
          </main>
        </div>
        <CartFilterSortAside />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  directoryHidden: state.directory.hidden,
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
  toggleMenuHidden: () => dispatch(toggleDirectoryHidden()),
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

