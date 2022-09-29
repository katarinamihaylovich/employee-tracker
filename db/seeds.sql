DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS department;


INSERT INTO department (dept_name)
VALUES ("Legal"),
        ("Finance"),
        ("Sales"),
        ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("Lawyer", "200000", 1),
        ("Accountant", "100000", 2),
        ("Lead Salesman", "300000", 3),
        ("Engineer", "150000", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Adam', 'Smith', 1, 5),
        ('Jane', 'Doe', 2, 5),
        ('Mayya', 'Kats', 3, 5),
        ('Will', 'Hitch', 4, 5);