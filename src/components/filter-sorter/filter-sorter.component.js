import React, { useState } from 'react'
import FilterSortItemCollapse from '../filter-sort-item-collapse/filter-sort-item-collapse.component'
import { connect } from 'react-redux'
import { changeFilterSorter } from '../../redux/filter-sorter/filter-sorter.actions'
import { useHistory } from 'react-router-dom'

import qs from 'query-string'
import { useEffect } from 'react'

import { fetchMenProduct } from '../../services/product.sevices'
import { setCollectionItems } from '../../redux/shop-collection/shop-collection.actions'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

import './filter-sorter.styles.scss'

const filtersInit = [
    {
        name: 'categoryIds',
        title: 'categories',
        type: 'checkbox',
        values: [
            { name: 'Trainers', value: '1' },
            { name: 'Espadilles', value: '2' },
            { name: 'Boots', value: '3' }],
        explain: false
    },
    {
        name: 'ModelIds',
        title: 'Models',
        type: 'checkbox',
        values: [
            { name: 'Jagger', value: '1' },
            { name: 'Logan', value: '2' },
            { name: 'Elven', value: '3' },
            { name: 'Yucca M', value: '4' },
            { name: 'Yeye Mem', value: '5' },
            { name: 'Mr. Paco', value: '6' },
        ],
        explain: false
    },
    {
        name: 'colorIds',
        title: 'colors',
        type: 'checkbox',
        values: [
            { name: 'white', value: '1' },
            { name: 'green', value: '2' },
            { name: 'navy', value: '3' },
            { name: 'taupe', value: '4' },
            { name: 'desert', value: '5' },
            { name: 'black', value: '6' },
            { name: 'grey', value: '7' }
        ],
        explain: false
    },
    {
        name: 'size',
        title: 'size',
        type: 'radio',
        values: [{ name: '40', value: 40 }, { name: '41', value: 41 }, { name: '42', value: '42' }, { name: 'clear', value: undefined }],
        explain: false
    },
    {
        name: 'priceRange',
        title: 'price range',
        type: 'range',
        maxValue: 100,
        minValue: 0,
        explain: false
    }
]

const filtersInitTypeMap = filtersInit.reduce((value, current) => { value[current.name] = current.type; return value }, {})

const FilterSorter = ({ filterSorterParams, changeFilterSorter, setCollectionItems }) => {

    const [filters, setFilters] = useState(filtersInit)

    const history = useHistory()

    const getSearchString = (filterSorterParams) => {
        let search = '?';
        for (let filterItemName in filterSorterParams) {
            if (!!filterSorterParams[filterItemName].length) {
                if (search !== '?')
                    search += '&';
                search += filterItemName + '=';
                // let y = filters.find(f => f.name === filterItemName);
                console.log(filterItemName)
                switch (filtersInitTypeMap[filterItemName]) {
                    case 'range':
                        search += filterSorterParams[filterItemName]?.join(':') ?? '';
                        break;
                    case 'checkbox':
                        console.log(filterSorterParams)
                        search += filterSorterParams[filterItemName]?.join(',') ?? '';
                        break;
                    case 'radio':
                        search += filterSorterParams[filterItemName][0];
                        break;
                    default:
                        break;
                }
            }
        }
        return search
    }

    const getFilterSorterParams = () => {
        const filterSorterParams = qs.parse(history.location.search, { ignoreQueryPrefix: true })
        for (let filterItemName in filterSorterParams) {
            switch (filtersInitTypeMap[filterItemName]) {
                case 'range':
                    filterSorterParams[filterItemName] = filterSorterParams[filterItemName]?.split(':').map(s => s.trim());
                    break;
                case 'checkbox':
                    filterSorterParams[filterItemName] = filterSorterParams[filterItemName]?.split(',').map(s => s.trim())
                    break;
                case 'radio':
                    filterSorterParams[filterItemName] = [filterSorterParams[filterItemName]];
                    break;
                default:
                    break;
            }
        }
        return filterSorterParams
    }

    useEffect(() => {
        changeFilterSorter(getFilterSorterParams())
    }, [])

    const handleToogleCollapse = (filterItem) => {
        const filtersNew = filters.map(item => {
            if (item === filterItem) {
                return { ...item, explain: !filterItem.explain }
            }
            if (item.explain === true) {
                return { ...item, explain: false }
            }
            return item
        })
        setFilters(filtersNew)
    }

    const handleInputChange = (filterItem, inputValue) => {
        if (window.timeOutIdFilterSorter) {
            clearTimeout(window.timeOutIdFilterSorter);
        }
        const pra = { ...filterSorterParams }
        if (filterItem.type === 'checkbox') {
            let indexOf = pra[filterItem.name]?.indexOf(inputValue.value) ?? -1;
            if (indexOf !== -1) {
                pra[filterItem.name] = pra[filterItem.name].filter((v, index) => index !== indexOf);
            } else {
                pra[filterItem.name] = pra[filterItem.name] ? [...pra[filterItem.name]] : []
                pra[filterItem.name].push(inputValue.value);
            }
        }
        if (filterItem.type === 'radio') {
            if (inputValue.value === undefined) {
                pra[filterItem.name] = [];
            } else {
                pra[filterItem.name] = [inputValue.value];
            }
        }

        if (filterItem.type === 'range') {
            if (filterItem.minValue === inputValue.min && filterItem.maxValue === inputValue.max) {
                pra[filterItem.name] = [];
            } else {
                pra[filterItem.name] = [inputValue.min, inputValue.max];
            }
            const s = filters.map(f => {
                if (f === filterItem) {
                    return { ...filterItem, value: { ...inputValue } };
                }
                return f;
            })
            setFilters(s)
        }
        console.log(pra)
        const search = getSearchString(pra)

        history.replace(history.location.pathname + search)

        window.timeOutIdFilterSorter = setTimeout(() => {
            fetchMenProduct(search).then(data => {
                setCollectionItems(data)
            })
        }, 300);

        changeFilterSorter(pra);
    }

    return (
        <div className="filter-sorter">
            <form action="">
                {
                    filters.map((item, index) => (
                        <FilterSortItemCollapse
                            key={index}
                            explain={item.explain}
                            name={item.title}
                            onClick={() => handleToogleCollapse(item)}>
                            {
                                item.type === 'range' ?
                                    <InputRange
                                        maxValue={item.maxValue}
                                        minValue={item.minValue}
                                        formatLabel={value => `${value} $`}
                                        value={!!filterSorterParams[item.name]?.length ?
                                            { min: filterSorterParams[item.name][0], max: filterSorterParams[item.name][1] }
                                            : { min: item.minValue, max: item.maxValue }}
                                        onChange={value => handleInputChange(item, value)}
                                        onChangeComplete={value => console.log(value)} />
                                    : item.values.map((filterValue, index) => {
                                        const checked = filterSorterParams[item.name]?.includes(filterValue.value) ?? false;
                                        return (
                                            < label key={index}
                                                className={filterValue.value === undefined && item.type === 'radio' ? 'clear' : ''} >
                                                <input type={item.type} name={item.name} checked={checked}
                                                    value={String(filterValue.value)}
                                                    onChange={() => handleInputChange(item, filterValue)} />
                                                {filterValue.name}
                                            </label>
                                        )
                                    })
                            }
                        </FilterSortItemCollapse>
                    ))
                }
            </form>
        </div >
    )
}

const mapStateToProps = state => ({
    filterSorterParams: state.filterSorter.params
})

const mapDispatchToProps = dispatch => ({
    changeFilterSorter: (value) => dispatch(changeFilterSorter(value)),
    setCollectionItems: (items) => dispatch(setCollectionItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSorter)
// export default FilterSorter
