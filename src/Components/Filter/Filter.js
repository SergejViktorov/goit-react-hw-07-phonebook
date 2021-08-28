import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { contactsSelectors, filter } from '../../redux'

const Filter = () => {
	const value = useSelector((state) => contactsSelectors.getFilter(state))
	const dispatch = useDispatch()
	return (
		<input
			type="text"
			name="filter"
			value={value}
			onChange={(e) => dispatch(filter(e.currentTarget.value))}
			placeholder="Enter name for Search"
		/>
	)
}

export default Filter
