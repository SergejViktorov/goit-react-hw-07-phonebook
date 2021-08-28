import axios from 'axios'
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
} from './actions'

axios.defaults.baseURL = 'http://localhost:7777/'

const fetchContacts = () => async (dispatch) => {
	dispatch(fetchPhoneBookRequest())
	try {
		const { data } = await axios.get('contacts')
		dispatch(fetchPhoneBookSuccess(data))
	} catch (error) {
		dispatch(fetchPhoneBookError())
	}
}

const addContacts = (item) => async (dispatch) => {
	dispatch(addContactsRequest)
	try {
		const { data } = await axios.post('contacts/', item)
		dispatch(addContactsSuccess(data))
	} catch (error) {
		dispatch(addContactsError())
	}
}

const deleteContacts = (contactsId) => async (dispatch) => {
	deleteContactsRequest()
	try {
		await axios.delete(`contacts/${contactsId}`)
		dispatch(deleteContactsSuccess(contactsId))
	} catch (error) {
		dispatch(deleteContactsError(error))
	}
}

export default { fetchContacts, addContacts, deleteContacts }
