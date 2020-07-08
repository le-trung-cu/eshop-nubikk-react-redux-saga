import React from 'react'
import { connect } from 'react-redux'

import './collection-size.styles.scss'

import { addItem } from '../../redux/cart/cart.actions'
import { addItemToBasketService } from '../../services/basket.services'
import userServices from '../../services/user.services'

const CollectionSize = ({ sizeObj, item, addItem }) => {

    const sizes = Object.keys(sizeObj).map(size => ({
        size,
        status: sizeObj[size]
    }))

    const addToCart = (size) => {
        if (userServices.user) {
            addItemToBasketService({
                productId: item.id,
                color: item.colorName,
                size
            }).then(data => {
                addItem(data)
            })
        } else {
            addItem({ ...item, size, id: `${item.id}_size_${size}`, productId: item.id, color: item.colorName })
        }
    }

    return (
        <ul className="collection-size">
            {
                sizes.map(({ size, status }) =>
                    <li key={size}>
                        <button disabled={!status} className={status ? "in-of" : "out-of"}
                            onClick={() => { addToCart(size) }}>
                            {size}
                        </button>
                    </li>)
            }
        </ul>
    )
}

const mapDitchPathToProps = dispath => ({
    addItem: (item) => dispath(addItem(item)),
})

export default connect(null, mapDitchPathToProps)(CollectionSize)