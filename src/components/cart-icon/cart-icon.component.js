import React from 'react'
import { BsBag } from 'react-icons/bs'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { connect } from 'react-redux'

import './cart-icon.styles.scss'

const CartIcon = ({ itemCount, toggleCartHidden }) => {
    return (
        <span className="cart-icon" onClick={toggleCartHidden}>
            <BsBag />
            <div className="cart-icon__count">{itemCount}</div>
        </span>
    )
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispath => ({
    toggleCartHidden: () => dispath(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
