import FilterSorterActionTypes from './filer-sorter.types';

const INITIAL_STATE = {
    hidden: true,
    params: { categories: [], models: [], priceRange: [], colorIds: [], size: '' }
};

const filterSorterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterSorterActionTypes.TOGGLE_FILTER_SORTER_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case FilterSorterActionTypes.CLEAR_FILTER_SORTER:
            return {
                ...state,
                params: {}
            };
        case FilterSorterActionTypes.CHANGE_FILTER_SORTER:
            return {
                ...state,
                params: action.payload
            };
        default:
            return state;
    }
};

export default filterSorterReducer;