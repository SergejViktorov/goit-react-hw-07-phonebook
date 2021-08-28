import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'

const Filter = () => {
	const value = useSelector((state) => state.contacts.filter)
	const dispatch = useDispatch()
	return (
		<input
			type="text"
			name="filter"
			value={value}
			onChange={(e) => dispatch(actions.filter(e.currentTarget.value))}
			placeholder="Enter name for Search"
		/>
	)
}

export default Filter
