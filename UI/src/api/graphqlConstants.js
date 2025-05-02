const REST_API_BASE_URL = 'http://localhost:8080/graphql';

const employeesAddQuery = {
  "query": "mutation { addEmployees(employees:[${}]) { id name department } }"
}

const employeesQuery = {
  "query": "query { employees { id name department } }"
}


const deleteEmployeeQuery = `
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      id
      name
      department
    }
  }
`;

const updateEmployeeQuery = `
  mutation UpdateEmployee($id: ID!, $employee: EmployeeInput!) {
    updateEmployee(id: $id, employee: $employee) {
      id
      name
      department
    }
  }
`;

const addEmployeeQuery = `
  mutation AddEmployees($employees: [EmployeeInput!]!) {
    addEmployees(employees: $employees) {
      id
      name
      department
    }
  }
`;

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export { REST_API_BASE_URL, 
         config, 
         employeesAddQuery, 
         addEmployeeQuery, 
         employeesQuery, 
         deleteEmployeeQuery, 
         updateEmployeeQuery };

