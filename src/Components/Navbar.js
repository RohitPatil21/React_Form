import React, { Component } from 'react';
import './Navbar.css'; 


class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className='top-navbar'>
                    <h2>R.S.P Collage Of Management, Jalgaon</h2>
                </div>

                <div className='bottom-navbar'>
					<h3 id='rf-heading'>Registration Form</h3>
					<div className='tab-container'>
						<p id='form' className='tab'>Form</p>
						<p className='tab'>Preview</p>
						<p className='tab'>Edit</p>
						<p className='tab'>Sumited</p>
					</div>
                </div>
            </div>
        )
    }
}

export default Navbar;