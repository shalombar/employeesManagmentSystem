const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, max: 100 },
    age: { type: Number },
    employeeType: { type: String, required: true },
    seniority: { type: Number, required: true },
    wage: { type: Number, required: true },
});

// Export the model
module.exports = employeeSchema;