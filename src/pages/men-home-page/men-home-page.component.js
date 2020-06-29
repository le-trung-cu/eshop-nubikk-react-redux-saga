import React from 'react'
import HeaderImage from '../../components/header-image/header-image.component'
import { Link } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';


const categories = {
    title: "shop by category",
    items: [
        {
            imgUrl: "https://cdn.dutchdrops.com/nubikk/media/image/17/12/20/sale_800x800.jpg",
            name: "Sale",
            nameUrl: "Sale",
        },
        {
            imgUrl: "https://cdn.dutchdrops.com/nubikk/media/image/48/cd/86/sneakers_heren_600_900_800x800.jpg",
            name: "Sale",
            nameUrl: "Sale",
        },
        {
            imgUrl: "https://cdn.dutchdrops.com/nubikk/media/image/17/12/20/sale_800x800.jpg",
            name: "Sale",
            nameUrl: "Sale",
        },
        {
            imgUrl: "https://cdn.dutchdrops.com/nubikk/media/image/48/cd/86/sneakers_heren_600_900_800x800.jpg",
            name: "Sale",
            nameUrl: "Sale",
        },
        {
            imgUrl: "https://cdn.dutchdrops.com/nubikk/media/image/17/12/20/sale_800x800.jpg",
            name: "Sale",
            nameUrl: "Sale",
        },
        {
            imgUrl: "https://cdn.dutchdrops.com/nubikk/media/image/48/cd/86/sneakers_heren_600_900_800x800.jpg",
            name: "Sale",
            nameUrl: "Sale",
        },
    ]
}

const MenHomePage = () => {
    return (
        <div className="men-home-page">
            <HeaderImage height="354px" imgUrl="/img/MEN-BANNER-1280x1280.jpg">
                <h2>MEN</h2>
                <Link to="/men">SHOP NEW</Link>
            </HeaderImage>
            <CategoryPreview title={categories.title} items={categories.items} />
            <CategoryPreview title="shop by treen" items={categories.items} />
        </div>
    )
}

export default MenHomePage
