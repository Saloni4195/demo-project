package com.centric.employee.service;

import com.centric.employee.dto.EmployeeRecord;
import com.centric.employee.dummy.DummyData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private DummyData dummyData;
    public List<EmployeeRecord> getEmployeeById(Integer id){
        List<EmployeeRecord> employeeRecords = dummyData.data();
        return employeeRecords.stream().filter(employeeRecord -> employeeRecord.id() == id).collect(Collectors.toList());
    }

    public List<EmployeeRecord> getEmployees(){
        return dummyData.data();
    }

    public List<EmployeeRecord> saveEmployee(List<EmployeeRecord> employees) {
        return dummyData.addEmployees(employees);
    }

    public List<EmployeeRecord> deleteEmployee(Integer id) {
        return dummyData.removeEmployee(id);
    }

    public List<EmployeeRecord> updateEmployee(Integer id, EmployeeRecord employee) {
        return dummyData.updateEmployee(id, employee);
    }
}
