import axios from "axios"


const REST_API_BASE_URL = 'http://localhost:8080/graphql';

const employeesAddQuery = {
    "query": "mutation { addEmployees(employees:[${}]) { id name department } }"   
}

const addEmployeeQuery = `
  mutation AddEmployees($employees: [EmployeeInput!]!) {
    addEmployees(employees: $employees) {
      id
      name
      department
    }
  }
`;

const employeesQuery = {
    "query": "query { employees { id name department } }"
}
// write arrow function to get all employees using axios and graphql with headers
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}
// use config function in axios post method
export const listEmployees = () => axios.post(REST_API_BASE_URL, employeesQuery, config);
//export const listEmployees = () => axios.post(REST_API_BASE_URL, employeesQuery);

// export const listEmployees = () => employeeDetails;

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, {
    query: addEmployeeQuery,
    variables: {
        employees: [employee]
    }
}, config);

// export const createEmployee = (employee) => {employeeDetails.push(employee)
//     return employeeDetails;
// };
