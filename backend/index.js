let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require("./database/db"),
    createError = require('http-errors')

const studentRoute = require('../backend/routes/student.route')

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true }).then(()=>{
        console.log("database Successfully connected")
    },
    error=> console.log("Error while connecting to database" + error))

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/students', studentRoute)


//PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, ()=>{
    console.log("Server is running on port: " + port)
})

// 404 Error
app.use((req,res,next)=>{
    next(createError(404))
})
    
// Error handler
app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    res.json({
        error:{
            message: err.message
        }
    })
})