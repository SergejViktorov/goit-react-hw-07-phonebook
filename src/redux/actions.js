import { createAction } from '@reduxjs/toolkit'

export const fetchPhoneBookRequest = createAction(
	'contact/fetchPhoneBookRequest'
)
export const fetchPhoneBookSuccess = createAction(
	'contact/fetchPhoneBookSuccess'
)
export const fetchPhoneBookError = createAction('contact/fetchPhoneBookError')

export const addContactsRequest = createAction('contact/addContactsRequest')
export const addContactsSuccess = createAction('contact/addContactsSuccess')
export const addContactsError = createAction('contact/addContactsError')

export const deleteContactsRequest = createAction(
	'contact/deleteContactsRequest'
)
export const deleteContactsSuccess = createAction(
	'contact/deleteContactsSuccess '
)
export const deleteContactsError = createAction('contact/deleteContactsError')

export const filter = createAction('contact/filter')
