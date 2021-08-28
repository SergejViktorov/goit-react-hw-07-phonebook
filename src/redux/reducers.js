import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import {
	fetchPhoneBookRequest,
	fetchPhoneBookSuccess,
	fetchPhoneBookError,
	addContactsRequest,
	addContactsSuccess,
	addContactsError,
	deleteContactsRequest,
	deleteContactsSuccess,
	deleteContactsError,
	filter,
} from './actions'

const itemReducer = createReducer([], {
	[fetchPhoneBookSuccess]: (_, { payload }) => payload,
	[addContactsSuccess]: (state, { payload }) => [...state, { ...payload }],
	[deleteContactsSuccess]: (state, { payload }) =>
		state.filter(({ id }) => id !== payload),
})

const isLoading = createReducer(false, {
	[fetchPhoneBookRequest]: () => true,
	[fetchPhoneBookSuccess]: () => false,
	[fetchPhoneBookError]: () => false,
	[addContactsRequest]: () => true,
	[addContactsSuccess]: () => false,
	[addContactsError]: () => false,
	[deleteContactsRequest]: () => true,
	[deleteContactsSuccess]: () => false,
	[deleteContactsError]: () => false,
})

const error = createReducer(null, {})
// const error = createReducer(null, {
// 	[actions.fetchPhoneBookError]: (_, action) => action.payload,
// 	[actions.fetchPhoneBookRequest]: () => null,
// })

const filterReducer = createReducer('', {
	[filter]: (_, { payload }) => payload,
})

export default combineReducers({
	items: itemReducer,
	isLoading,
	error,
	filter: filterReducer,
})
