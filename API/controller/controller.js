const mongoose=require('mongoose')
const employeeSchema=require('../db/mongoose')

const Employee = mongoose.model('Employee', employeeSchema);

function controller() {
    function addNewEmployee(req, res) {
        console.log('req.body',req.body)

        let newEmployee = new Employee(req.body);

        console.log('new employee',newEmployee)
        newEmployee.save((err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
    }

    function getAllEmployees(req, res) {
        Employee.find({}, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
    }


    function getEmployeeWithID(req, res) {
        Employee.findById(req.params.employeeId, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
    }

    function updateEmployee(req, res) {
        Employee.findOneAndUpdate({ _id: req.params.employeeId }, req.body, { new: true }, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json(employee);
        });
    }

    function deleteEmployee(req, res) {
        console.log('delete')
        Employee.remove({ _id: req.params._id }, (err, employee) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!' });
        });
    }

    return {
        addNewEmployee: addNewEmployee,
        getAllEmployees: getAllEmployees,
        getEmployeeWithID: getEmployeeWithID,
        updateEmployee: updateEmployee,
        deleteEmployee: deleteEmployee
    }

}
module.exports = controller;