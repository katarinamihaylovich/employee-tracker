class Employee {
    constructor(id, firstName, lastName, roleId, managerId){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }

    printEmployees() {
        return this.Employee;
    }
};

module.exports = Employee;