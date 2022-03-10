const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    roll: { type: String, required: true }
}, {collection: "students"}
)

module.exports = mongoose.model('Student', studentSchema);