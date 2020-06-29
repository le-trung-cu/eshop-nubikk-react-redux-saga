import { createSelector } from 'reselect'

const selectFilterSorter = state => state.filterSorter;

export const selectFilterSorterHidden = createSelector(
    [selectFilterSorter],
    cart => cart.hidden
)
