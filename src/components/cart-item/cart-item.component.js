import React from 'react'
import './cart-item.component.scss'
import { addItem, removeItem, clearCart, clearItemFromCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CartItem = ({ item, addItem, removeItem, clearItemFromCart }) => {
    const { picture, quantity, price, size, color, name } = item
    return (
        <div className="cart-item">
            <div className="cart-item__thumbnail-contain">
                <img className="cart-item__thumbnail-image" src={picture} alt="" />
            </div>
            <div className="cart-item__detail">
                <span className="cart-item__name">{name}</span>
                <span className="cart-item__cofiguration">
                    <i>color: </i><span className="cart-item__color">{color} red</span>
                    <i> size: </i><span className="cart-item__size">{size}</span>
                </span>
                <div className="cart-item__end">
                    <span className="cart-item__quantity">{quantity}X |</span>
                    <span className="cart-item__delete"
                        onClick={() => clearItemFromCart(item)}>delete
                    </span>
                    <span className="cart-item__price">€ {price}</span>
                </div>
                <div className="cart-item__end">
                    <span className="cart-item__add-remove"
                        onClick={() => removeItem(item)}>-</span>
                    <span className="cart-item__add-remove"
                        onClick={() => addItem(item)}>+</span>
                    <span className="cart-item__total-price">€ {quantity * price}</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem)
