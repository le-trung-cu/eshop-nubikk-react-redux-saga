import { combineReducers } from 'redux'
import directoryReducer from './directory/directory.reducer'
import cartReducer from './cart/cart.reducer'
import filterSorterReducer from './filter-sorter/filter-sort.reducer';
import shopCollectionReducer from './shop-collection/shop.collection.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
    cart: cartReducer,
    filterSorter: filterSorterReducer,
    shopCollection: shopCollectionReducer
});

export default rootReducer;