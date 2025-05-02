import axios from "axios"
import { REST_API_BASE_URL, 
         config, 
         employeesQuery, 
         addEmployeeQuery, 
         employeesAddQuery, 
         deleteEmployeeQuery, 
         updateEmployeeQuery } from "../api/graphqlConstants";



export const fetchEmployeesApi = () => {
    return axios.post(REST_API_BASE_URL, employeesQuery, config);
};


export const createEmployeeApi = (employee) => {
    return axios.post(REST_API_BASE_URL, {
        query: addEmployeeQuery,
        variables: {
            employees: [employee]
        }
    }, config);
}


export const deleteEmployeeApi = (id) => {
    return axios.post(REST_API_BASE_URL, {
        query: deleteEmployeeQuery,
        variables: {
            id: id
        }
    }, config);
}

export const updateEmployeeApi = (employeeId, employee) => {
    return axios.post(REST_API_BASE_URL, {
        query: updateEmployeeQuery,
        variables: {
            id: employeeId,
            employee: employee
        }
    }, config);
}
