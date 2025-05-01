import axios from "axios"


const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

//export const listEmployees = () => axios.get(REST_API_BASE_URL);
let employeeDetails = [{
    firstName: 'Saloni',
    lastName: 'verma',
    email: 'test@gmail.com'
},
{
    firstName: 'ashish',
    lastName: 'saini',
    email: 'test1@gmail.com'
}]


export const listEmployees = () => employeeDetails;
//export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const createEmployee = (employee) => {employeeDetails.push(employee)
    return employeeDetails;
};
