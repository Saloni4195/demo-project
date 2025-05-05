import axios from "axios"
import {
    REST_API_BASE_URL,
    config,
    employeesQuery,
    addEmployeeQuery,
    deleteEmployeeQuery,
    updateEmployeeQuery
} from "../api/graphqlConstants";



// Common function to handle GraphQL API requests
const callGraphQLApi = (queryOrPayload, variables) => {
    // If queryOrPayload already contains 'query' key, assume it's the full payload
    const isFullPayload = typeof queryOrPayload === 'object' && queryOrPayload.query;
    const payload = isFullPayload
        ? queryOrPayload
        : { query: queryOrPayload, variables };
    return axios.post(REST_API_BASE_URL, payload, config);
};



export const fetchEmployeesApi = () => {
    return callGraphQLApi(employeesQuery);
};


export const createEmployeeApi = (employee) => {
    return callGraphQLApi({
        query: addEmployeeQuery,
        variables: { employees: [employee] }
    });
};


export const deleteEmployeeApi = (id) => {
    return callGraphQLApi({
        query: deleteEmployeeQuery,
        variables: { id }
    });
};

export const updateEmployeeApi = (employeeId, employee) => {
    return callGraphQLApi({
        query: updateEmployeeQuery,
        variables: {
            id: employeeId,
            employee
        }
    });
};

