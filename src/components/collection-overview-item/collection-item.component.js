import React from 'react'
import './collection-item.styles.scss'
import CollectionSize from '../collection-size/collection-size.component';

const CollectionItem = ({ item }) => {
    const { picture, price, imgHoverUrl, label, name, sizes } = item
    return (
        <div className="collection wrap">
            <div className="collection__box">
                <div className="card">
                    <div className="cart__photo-box">
                        <img src={picture} alt="" />
                        {label ? <div className="label">{label}</div> : null}
                    </div>
                    <div className="detail">
                        <h4 className="name">{name}</h4>
                        <span className="price">€{price}</span>
                    </div>
                    <CollectionSize sizeObj={sizes} item={item} />
                </div>
            </div>
        </div>

    )
}

export default CollectionItem
