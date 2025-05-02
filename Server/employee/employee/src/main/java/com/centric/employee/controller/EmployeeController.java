package com.centric.employee.controller;

import com.centric.employee.dto.EmployeeRecord;
import com.centric.employee.service.EmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    Logger logger = LoggerFactory.getLogger(EmployeeController.class);
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //    @GetMapping("/employees/{id}")
//    @ResponseBody
//    public List<EmployeeRecord> employeeById(@PathVariable Integer id){
//        return employeeService.getEmployeeById(id);
//    }
    @QueryMapping
    public List<EmployeeRecord> employeeById(@Argument Integer id) {
        logger.info("employee by id graphql");
        List<EmployeeRecord> records = employeeService.getEmployeeById(id);
        logger.info(records.toString());
        return employeeService.getEmployeeById(id);
    }

    @QueryMapping
    public List<EmployeeRecord> employees() {
        return employeeService.getEmployees();
    }

//    @PostMapping("/addEmployees")
//    @ResponseBody
//    public List<EmployeeRecord> addEmployees(@RequestBody List<EmployeeRecord> employees) {
//
//        logger.info("save method");
//        logger.info(employees.toString());
//        return employeeService.saveEmployee(employees);
//    }

    @MutationMapping
    public List<EmployeeRecord> addEmployees(@Argument List<EmployeeRecord> employees) {

        logger.info("save method");
        logger.info(employees.toString());
        return employeeService.saveEmployee(employees);
    }

    //    @DeleteMapping("/remove/employee/{id}")
//    @ResponseBody
//    public List<EmployeeRecord> deleteEmployee(@PathVariable Integer id) {
//        logger.info("delete method");
//        return employeeService.deleteEmployee(id);
//    }
    @MutationMapping
    public List<EmployeeRecord> deleteEmployee(@Argument Integer id) {
        logger.info("delete method");
        return employeeService.deleteEmployee(id);
    }

    @MutationMapping
    public List<EmployeeRecord> updateEmployee(@Argument Integer id,
                                               @Argument EmployeeRecord employee) {
       logger.info("id is" + id);
       logger.info("emp is" +employee.toString());

        return employeeService.updateEmployee(id, employee);

    }
}
