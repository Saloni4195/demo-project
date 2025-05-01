import { useState } from "react";
import { createEmployee } from "./EmployeeService";
import { useNavigate } from "react-router-dom";

export default function Employee() {
    const navigator = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    function saveEmployee(e) {
        e.preventDefault();
        console.log("method call");
        const employee = { 
            id: 5,
            name: firstName + " " + lastName,
            department: "IT"
         }
        console.log(employee);
        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/')
        }).catch(error => {
            console.error(error);
        })

        // navigator('/employees')
        // createEmployee(employee);
        // navigator('/');
    }


    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name: </label>
                                <input type='text'
                                    placeholder='Enter First Name'
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name: </label>
                                <input type='text'
                                    placeholder='Enter Last Name'
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input type='text'
                                    placeholder='Enter Email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}