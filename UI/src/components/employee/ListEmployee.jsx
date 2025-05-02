import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listEmployees, deleteEmployee } from "../../services/EmployeeService";

export default function ListEmployee() {

    const navigator = useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            console.log(response.data?.data?.employees);
            setEmployees(response.data?.data?.employees);
        }
        ).catch(error => {
            console.error(error);
        })
    }


    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
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
                                <td>{employee.name}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <button className='btn btn-info me-2' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-info' onClick={() => removeEmployee(employee.id)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>

    )
}