import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './category-preview-item.styles.scss'

const CategoryPreviewItem = ({ link, imgUrl, name, onClick }) => {
    return (
        <div className="category-item">
            <Link to={link} onClick={onClick}>
                <figure>
                    <img className="photo" src={imgUrl} alt="" />
                    <figcaption className="name">{name}</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default CategoryPreviewItem
