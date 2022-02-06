import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React, { Component } from 'react';
import './Form.css';


class Form extends Component {

    render() {
        return (
            <div className="form-container">
                <div id='heading-div'>
                    <h3 id='heading'>Registration Form</h3>
                </div>

                <form>
                    <div className='form-left'>
                        <label >First Name : </label> <br />
                        <input placeholder='Enter Your First Name' type={"text"} id="first_name" name="first_name" required minLength={3} maxLength={20} pattern="[A-Za-z]{1,32}"  /> <br />

                        <label>Last Name : </label> <br />
                        <input placeholder='Enter Your Last Name' type={"text"} id="last_name" name="last_name" required minLength={3} maxLength={20} pattern="[A-Za-z]{1,32}" /> <br />

                        <label>Phone No : </label> <br />
                        <input placeholder='Enter Your Phone Number' type="tel" id="mobile_no" name="mobile_no" required minLength={10} maxLength={12} pattern="[6789][0-9]{9}"  /> <br />

                        <label>Email : </label> <br />
                        <input placeholder='Enter Your Email id' type="email" id="email" name="email" required minLength={5} maxLength={50}  /> <br />

                        <label>Date Of Birth : </label> <br />
                        <input placeholder='Enter Your Date of birth' type="date" id="dob" name="dob" />
                    </div>

                    {/* Right Form div  */}

                    <div className='form-right'>
                        <label>Adress : </label> <br />
                        <textarea placeholder='Enter Your Address' type="text" id="address" name="address" /> <br />

                        <label>Education : 
                        <select name='degree' id='degree'>
                                <option>B.C.A</option>
                                <option>B.A</option>
                                <option>B.Com</option>
                                <option>B.Sc</option>
                        </select>
                        </label>
                        <br /> <br />

                        <label>Addhar Card No : </label> <br />
                        <input placeholder='Enter addhar card number' required maxLength={12} minLength={12} />
                        
                        <div className='btn-container'>
                            <input type="submit" id='btn-submit' className='btn-submit' />
                        </div>
                        
                    </div>

                </form>

            </div>
        )
    }
}

export default Form;
