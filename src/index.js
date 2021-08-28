import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import 'modern-normalize/modern-normalize.css'

console.log('store', store)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store.store}>
			
				<App />
			
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
