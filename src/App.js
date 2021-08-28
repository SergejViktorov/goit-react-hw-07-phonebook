import ContactForm from './Components/ContactForm/ContactForm'
import ContactList from './Components/ContactList/ContactList'
import Filter from './Components/Filter/Filter'
import s from './App.module.css'

function App() {
	return (
		<div className={s.container}>
			<h2 className={s.title}>Phonebook</h2>
			<ContactForm />

			<h2 className={s.title}>Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	)
}

export default App
