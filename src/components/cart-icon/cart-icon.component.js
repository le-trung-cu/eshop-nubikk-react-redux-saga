import React from 'react'
import { BsBag } from 'react-icons/bs'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { toggleCartHidden, addItem } from '../../redux/cart/cart.actions'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import './cart-icon.styles.scss'
import { fetchBasketService } from '../../services/basket.services'

const CartIcon = ({ itemCount, toggleCartHidden, addItem }) => {

    useEffect(() => {
        fetchBasketService().then(({ items }) => {
            console.log(items)
            items.forEach(item => {
                addItem(item)
            })
        })
    }, [])

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
    toggleCartHidden: () => dispath(toggleCartHidden()),
    addItem: (item) => dispath(addItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
