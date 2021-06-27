const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const passport = require('passport');
require('./config/passport')(passport);


const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Database connected successfully.')
}).catch(err => {
    console.log('Unable to connect to the database.')
});

app.use('/api/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(5000, () => {
    console.log('Server started on port 5000')
});