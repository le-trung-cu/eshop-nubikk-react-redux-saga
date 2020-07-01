import React from 'react'
import { connect } from 'react-redux'
import { toggleDirectoryHidden } from './redux/directory/directory.actions'

import './App.css'
import MenuAside from './components/menu-aside/menu-aside.component'
import Header from './components/header/header.component'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
import MenHomePage from './pages/men-home-page/men-home-page.component'
import ShoesPage from './pages/shoes-page/shoes-page.component'
import { selectCartHidden } from './redux/cart/cart.selectors'
import { selectFilterSorterHidden } from './redux/filter-sorter/filter-sorter.selector';
import CartFilterSortAside from './components/cart-filer-sorter-aside/cart-filter-sort-aside.component';



function App({ directoryHidden, toggleMenuHidden, cartHidden, filterSorterHidden }) {

  return (
    <div className="App">
      <div className="wrap">
        <MenuAside hidden={directoryHidden} rightAsideHidden={cartHidden && filterSorterHidden} />
        <div className="container">
          <Header toggleMenuHidden={toggleMenuHidden} />
          <main className="main">
            <Switch>
              <Route exact path='/' component={() => <HomePage />} />
              <Route exact path='/men-home' component={() => <MenHomePage />} />
              <Route exact path='/men/:category' component={() => <ShoesPage />} />
            </Switch>
          </main>
        </div>
        <CartFilterSortAside />
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  directoryHidden: state.directory.hidden,
  cartHidden: selectCartHidden(state),
  filterSorterHidden: selectFilterSorterHidden(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleMenuHidden: () => dispatch(toggleDirectoryHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

