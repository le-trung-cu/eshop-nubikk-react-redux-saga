import React, { useEffect, Component } from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import FilterSorterIcon from '../../components/fiter-sorter-icon/filter-sorter-icon.component'
import { fetchMenProduct } from '../../services/product.sevices'
import { connect } from 'react-redux'
import { setCollectionItems } from '../../redux/shop-collection/shop-collection.actions'
import { useHistory } from 'react-router-dom'

import './shoes-page.styles.scss'

const ShoesPage = ({ collectionItems, setCollectionItems }) => {
    const history = useHistory();

    useEffect(() => {
        fetchMenProduct(history.location.search).then(data => {
            setCollectionItems(data);
        })
    }, [])

    return (
        <section className="shoes-page">
            <FilterSorterIcon />
            <CollectionOverview
                title="collections.title" items={collectionItems}
            />
        </section>
    )

}

const mapStateToProps = state => ({
    collectionItems: state.shopCollection.collectionItems
})

const mapDispatchToProps = dispatch => ({
    setCollectionItems: (items) => dispatch(setCollectionItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoesPage)
