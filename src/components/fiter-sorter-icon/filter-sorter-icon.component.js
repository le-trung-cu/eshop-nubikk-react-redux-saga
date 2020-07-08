import React from 'react'
import { toggleFilterSorterHidden } from '../../redux/filter-sorter/filter-sorter.actions';
import { connect } from 'react-redux';

import { FaSlidersH } from 'react-icons/fa'

import './filter-sorter-icon.styles.scss'

const FilterSorterIcon = ({ toggleHidden }) => {
    return (
        <div style={{ textAlign: 'right' }}>
            <span className="filter-sorter-icon" onClick={toggleHidden}>
                <FaSlidersH />
                <span>Filter & Sortering</span>
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleFilterSorterHidden())
})

export default connect(null, mapDispatchToProps)(FilterSorterIcon)
