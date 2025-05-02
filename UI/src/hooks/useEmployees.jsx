import { useState, useEffect } from "react";
import { listEmployees } from "../services/EmployeeService";

export function useEmployees() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEmployees() {
            try {
                const response = await listEmployees();
                setEmployees(response.data?.data?.employees);
            } catch (error) {
                setError(error);
                console.error(error);
            }
        }

        fetchEmployees();
    }, []);

    return { employees, error };
}
