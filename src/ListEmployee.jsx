import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees } from "./EmployeeService";

export default function ListEmployee() {

    const navigator = useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        // listEmployees().then((response) => {
        //     console.log(response.data);
        //     setEmployees(response.data)
        // }
        // ).catch(error => {
        //     console.error(error);
        // })

        setEmployees(listEmployees());
    }


    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>

    )
}