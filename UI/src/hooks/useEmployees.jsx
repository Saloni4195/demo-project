import { useState, useEffect } from "react";
import { listEmployees } from "../services/EmployeeService";

export function useEmployees() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            console.log("useEmployees: fetchEmployees started");
            try {
                setLoading(true);
                console.log("useEmployees: setLoading(true)");
                const response = await listEmployees();
                console.log("useEmployees: Response received from listEmployees:", response);
                const employeeData = response.data.data.employees; // Access the 'employees' array inside 'response.data.data'
                console.log("useEmployees: Employee data:", employeeData);
                setEmployees(employeeData);
                setLoading(false);
                console.log("useEmployees: setLoading(false)");
            } catch (err) {
                console.error("useEmployees: Error fetching employees:", err);
                setError(err);
                setLoading(false);
                console.log("useEmployees: setLoading(false) due to error");
            }
            setRefresh(false);
        };

        fetchEmployees();
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(true);
    };

    console.log("useEmployees: Returning:", { employees, loading, error, setEmployees });
    return { employees, loading, error, setEmployees, handleRefresh };
}

export default useEmployees;