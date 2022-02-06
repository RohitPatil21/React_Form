import React, { Component } from 'react';
import './App.css'
import Navbar from './Components/Navbar.js'
import Form from './Components/Form.js';

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<Form />
			</div>
			
		)
	}
}

export default App;