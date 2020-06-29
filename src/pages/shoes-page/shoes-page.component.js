import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import FilterSorterIcon from '../../components/fiter-sorter-icon/filter-sorter-icon.component'

const collections = {
    title: "sneakers for men",
    items: [

        {
            "id": 1,
            "name": "Green Sneakers",
            "sizes": { "40": false, "41": false, "42": false, "43": false, "44": false, "45": false, "46": false },
            "price": 180,
            "picture": "https://cdn.dutchdrops.com/nubikk/media/image/4e/a4/de/nubikk-jagger-classic-LT-green_2C3hTJKP3VxGx1_480x480.jpg",
            "label": "Coming Soon",
            "categoryId": 1,
            "modelId": 1,
            "colorId": 1,
            "category": null,
            "model": null,
            "color": null,
            "sex": "men"
        },
        {
            "id": 2,
            "name": "Multi White Sneakers",
            "sizes": { "40": true, "41": true, "42": true, "43": true, "44": true, "45": true, "46": true, "47": false },
            "price": 180,
            "picture": "https://cdn.dutchdrops.com/nubikk/media/image/2a/61/3d/nubikk-jagger-classic-white-lea_2_480x480.jpg",
            "label": "New",
            "categoryId": 1,
            "modelId": 1,
            "colorId": 1,
            "category": null,
            "model": null,
            "color": null,
            "sex": "men"
        },
        {
            "id": 3,
            "name": "Multi White Sneakers",
            "sizes": { "40": false, "41": false, "42": false, "43": false, "44": false, "45": false, "46": false },
            "price": 170,
            "picture": "https://cdn.dutchdrops.com/nubikk/media/image/f8/13/8e/nubikk-jagger-naya-white-leather-multi-color_2_480x480.jpg",
            "label": null,
            "categoryId": 1,
            "modelId": 1,
            "colorId": 1,
            "category": null,
            "model": null,
            "color": null,
            "sex": "men"
        },
        {
            "id": 4,
            "name": "White Sneakers",
            "sizes": { "40": true, "41": true, "42": true, "43": true, "44": true, "45": true, "46": false },
            "price": 170,
            "picture": "https://cdn.dutchdrops.com/nubikk/media/image/57/07/02/90q7OE4uPgVqQM_480x480.jpg",
            "label": null,
            "categoryId": 1,
            "modelId": 1,
            "colorId": 1,
            "category": null,
            "model": null,
            "color": null,
            "sex": "men"
        },
        {
            "id": 5,
            "name": "White Sneakers",
            "sizes": { "40": false, "41": false, "42": false, "43": false, "44": false, "45": false, "46": false },
            "price": 180,
            "picture": "https://cdn.dutchdrops.com/nubikk/media/image/bb/28/eb/nubikk_16_1_480x480.jpg",
            "label": null,
            "categoryId": 1,
            "modelId": 1,
            "colorId": 1,
            "category": null,
            "model": null,
            "color": null,
            "sex": "men"
        }
    ]
}

const ShoesPage = () => {

    return (
        <section className="shoes-page">
            <FilterSorterIcon />
            <CollectionOverview
                title={collections.title} items={collections.items}
            />
        </section>
    )
}

export default ShoesPage
