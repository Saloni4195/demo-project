package com.centric.employee.dummy;

import com.centric.employee.dto.EmployeeRecord;
import com.centric.employee.service.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DummyData {
    private List<EmployeeRecord> employeeRecords = getEmployeeDummyData();
    Logger logger
            = LoggerFactory.getLogger(EmployeeService.class);

    private List<EmployeeRecord> getEmployeeDummyData(){
        List<EmployeeRecord> employees = new ArrayList<>();
        employees.add(new EmployeeRecord(1,"asheesh", "IT"));
        employees.add(new EmployeeRecord(2,"Saloni", "IT"));
        employees.add(new EmployeeRecord(3,"Vishal", "IT"));
        return employees;
    }

    public List<EmployeeRecord> data(){
        return employeeRecords;
    }

    public List<EmployeeRecord> addEmployees(List<EmployeeRecord> employees){
        logger.info(employees.toString());
        logger.info(employeeRecords.toString());
        employeeRecords.add(employees.get(0));
        return  employeeRecords;
    }

    public List<EmployeeRecord> removeEmployee(Integer id) {
        EmployeeRecord employee = employeeRecords.stream().filter(employeeRecord -> employeeRecord.id() == id).findFirst().get();
        employeeRecords.remove(employee);
        return employeeRecords;
    }
}
