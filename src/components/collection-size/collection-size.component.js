import React from 'react'
import { connect } from 'react-redux'

import './collection-size.styles.scss'

import { addItem } from '../../redux/cart/cart.actions'

const CollectionSize = ({ sizeObj, item, addItem }) => {
    const sizes = Object.keys(sizeObj).map(size => ({
        size,
        status: sizeObj[size]
    }))
    return (
        <ul className="collection-size">
            {
                sizes.map(({ size, status }) =>
                    <li>
                        <button disabled={!status} className={status ? "in-of" : "out-of"}
                            onClick={() => { addItem({ ...item, size }) }}>
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