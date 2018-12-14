const express = require('express');
const router = express.Router();
var fs = require("fs");
const controllerFile = require('../controller/controller');

let controller = new controllerFile();

router.get('/', function (req, res) {
    controller.getAllEmployees(req, res);
})

// This responds a POST request for the homepage
router.post('/', function (req, res) {
    controller.addNewEmployee(req, res)
})

router.get('/:id', function (req, res) {

})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
router.put('/:id', function (req, res) {

})

router.delete('/:id', function (req, res) {
    controller.deleteEmployee(req, res)
})

module.exports = router;