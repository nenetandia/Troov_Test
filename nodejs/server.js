const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

const app = express();


require('./config/config')
require('./config/connection/dbconnect')
require('./config/passport')




// midleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', require('./routes/userRouter'));
app.use('/api/item', require('./routes/itemRouter'));






//start server
app.listen(3001, () => {
    console.log('server is started at port 3001')
})