
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../services/EmployeeService";
import { useEmployees } from "../../hooks/useEmployees";


export default function ListEmployee() {

    const navigator = useNavigate();
    const { employees, loading, error, setEmployees, handleRefresh } = useEmployees();

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            handleRefresh();
        }).catch(error => {
            console.error(error);
        })
    }

    if (loading) {
        return <p>Loading employees...</p>;
    }

    if (error) {
        return <p>Error loading employees: {error.message}</p>;
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