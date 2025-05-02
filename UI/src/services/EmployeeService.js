import axios from "axios"
import { fetchEmployeesApi, deleteEmployeeApi, createEmployeeApi, updateEmployeeApi } from '../api/axiosApi';


export const listEmployees = () => {
    return fetchEmployeesApi();
};

export const createEmployee = (employee) => {
  return createEmployeeApi(employee);
}

export const deleteEmployee = (id) => {
  return deleteEmployeeApi(id);
  }


export const updateEmployee = (employeeId, employee) => {
  return updateEmployeeApi(employeeId, employee);
}