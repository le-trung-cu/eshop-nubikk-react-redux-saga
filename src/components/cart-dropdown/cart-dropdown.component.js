import React from 'react'
import './cart-dropdown.styles.scss'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems, cartTotal }) => {
    return (
        <div className={`cart-dropdown`}>
            <div style={{ height: 1000 }}>
                {cartItems?.map(item => <CartItem item={item} />)}
                <div className="cart-dropdown__total">
                    <span>Total:</span>
                    <span>€ {cartTotal}</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
})


export default connect(mapStateToProps)(CartDropdown)
