let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let studentSchema = require('../models/Student');

router.route('/create').post((req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
        if (error) return next(error);
        else {
            console.log(data)
            res.json(data)
        }
    })
})

// Read Student
router.route("/").get((req, res, next) => {
    studentSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// get single student 
router.route("/edit/:id").get((req, res, next) => {
    studentSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Student
router.route("/edit/:id").put((req, res, next) => {
    studentSchema.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if (error) {
            console.log("error")
            return next(error)
        } else {
            res.json(data)
            console.log("Student Updated successfully")
        }
    })
})

//Delete Student
router.route("/delete/:id").delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({ "msg": "Student Deleted Successfully" })
        }
    })
})

module.exports = router;