class Department {
    constructor(connection, id, name) {
        this.connection = connection;
        this.id = id;
        this.name = name;
    }

    getId() {
        return this.id;
    };

    getName() {
        return this.name;
    };

    insertDepartment(departmentName = this.name){
        this.connection.query('INSERT INTO department (dept_name) VALUES (?)', [departmentName], function (err, res) {
            if (err) console.log(err);
        })
    };
};

module.exports = Department;