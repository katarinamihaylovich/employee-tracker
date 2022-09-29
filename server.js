const inquirer = require('inquirer');
const mysql = require('mysql2');

const Employee = require('./lib/Employee');
const Department = require('./lib/Department.js');

const department = new Department();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Organix123!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);


// let employee = new Employee(id, firstName, lastName, roleId, managerId)

function manageAll() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'allOptions',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
            },
        ]).then(function(answers){
            console.log(answers);

            switch(answers.allOptions){
                // case 'View All Employees':
                //     employee.printEmployees();
                //     break;
                case 'Add Department':
                    addDepartment();
                    break;
            }
        })
};

manageAll();

function addDepartment() {
    inquirer
        .prompt(
            {
                type: 'input',
                name: 'department',
                message: 'What department would you like to add?',
            }
        ).then((data) => {
                department.insertDepartment(data.department);
                manageAll();
                // db.query('INSERT INTO department (dept_name) VALUES (?)', answer, function (err,result) {
                //     if (err) throw err;
                // });
                // console.table(department);

            // department.push(new Department(id, name));
            // department.
            // console.table(department);
        })

}