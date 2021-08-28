import { createSelector } from '@reduxjs/toolkit'
const getContacts = (state) => state.contacts
const getFilter = (state) => state.contacts.filter
const getAllContacts = (state) => getContacts(state).items

const getVisibleContacts = createSelector(
	[getAllContacts, getFilter],
	(allContacts, filter) => {
		const normalizedFilter = filter.toLowerCase()
		return allContacts.filter((items) =>
			items.name.toLowerCase().includes(normalizedFilter)
		)
	}
)

export default { getFilter, getVisibleContacts, getContacts }
