const inquirer = require('inquirer');
// const dbHelp = require('./db/index');
const mysql = require('mysql2');
const table = console.table;

// const Employee = require('./lib/Employee');
// const Department = require('./lib/Department.js');
// const department = new Department();
// let employee = new Employee(id, firstName, lastName, roleId, managerId)

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Organix123!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

function manageAll() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'allOptions',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
            },
        ]).then(async (data) => {
            switch(data.allOptions){
                case 'View Employees':
                    await viewEmployees();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
            }
        })
};


const viewEmployees = async () => {
        const sql = 
        `
        SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id 
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager on manager.id = employee.manager_id
        `;
        try {
            const result = await db.promise().query(sql);
            console.table(result);
        } catch (error) {
            console.log(error);
        }
}

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
                let departmentName = {name: data.department};
                dbHelp.addDepartment(departmentName);

                // db.query('INSERT INTO department (dept_name) VALUES (?)', answer, function (err,result) {
                //     if (err) throw err;
                // });
                // console.table(department);

            // department.push(new Department(id, name));
            // department.
            // console.table(department);
        })

}