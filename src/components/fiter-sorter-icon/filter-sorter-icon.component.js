import React from 'react'
import { toggleFilterSorterHidden } from '../../redux/filter-sorter/filter-sorter.actions';
import { connect } from 'react-redux';

const FilterSorterIcon = ({ toggleHidden }) => {
    return (
        <span className="filter-sorter-icon" onClick={toggleHidden}>
            <span>Filter & Sortering</span>
        </span>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleFilterSorterHidden())
})

export default connect(null, mapDispatchToProps)(FilterSorterIcon)
