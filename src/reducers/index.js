import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { rentalReducer, fetchedRentalReducer } from './rental-reducer';
import thunk from 'redux-thunk';

export const init = () => {


	const reducers = combineReducers({
		rentals: rentalReducer,
		rental: fetchedRentalReducer,
	})

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(reducers,composeEnhancers(
		applyMiddleware(thunk)
	));

	return store;

}