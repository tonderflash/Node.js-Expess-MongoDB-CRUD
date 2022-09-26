const express = require('express');
const app = express();
const mongoose = require('mongoose');
const project = require('./models/project');
require('dotenv').config();

const project_routes = require('./routes/api.routes');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true }).then(() => {
    console.log('Connected to database!');
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(`Servidor corriendo correctamente en la url: localhost:${process.env.PORT}`);
    });
}).catch((e) => {
    console.log('Error connecting to database!');
    console.log(e);
})

app.use(express.urlencoded({ extended: true, limit : '50mb' }));
app.use(express.json({ limit : '50mb' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//routes

app.use('/api', project_routes);


module.exports = app;
