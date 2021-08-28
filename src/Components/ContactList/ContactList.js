import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import contactsOperation from '../../redux/operation'

const getVisibleContacts = (allContacts, filter) => {
	const normalizedFilter = filter.toLowerCase()

	return allContacts.filter((items) =>
		items.name.toLowerCase().includes(normalizedFilter)
	)
}

const ContactList = () => {
	const { isLoading, error } = useSelector((state) => state.contacts)
	const contacts = useSelector((state) =>
		getVisibleContacts(
			state.contacts.items,
			state.contacts.filter,
			state.contacts.isLoading
		)
	)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(contactsOperation.fetchContacts())
	}, [dispatch])

	if (contacts === []) return null
	if (isLoading) return <h2>Загрузка</h2>
	if (error) return <h1>{error}</h1>
	return (
		<ul>
			{contacts.map(({ id, name, number }) => (
				<ContactListItem id={id} name={name} number={number} />
			))}
		</ul>
	)
}

const ContactListItem = ({ id, name, number }) => {
	const dispatch = useDispatch()
	console.log('id', id)

	return (
		<li>
			{name}:{number}
			<button onClick={() => dispatch(contactsOperation.deleteContacts(id))}>
				delete
			</button>
		</li>
	)
}

export default ContactList
