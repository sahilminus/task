const dotenv = require('dotenv');
dotenv.config({
    path: '.env'
})
const express = require('express');
const path = require('path');
require('./utils/database');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const teamRouter = require('./routes/team');
const userTeamRouter = require('./routes/user-team');
const app = express();

app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/teams', teamRouter);
app.use('/user_team', userTeamRouter);


const port = process.env.PORT || 3000;


app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        error: 'Page not found'
    })
})
app.listen(port, () => {
    console.log('Server is set up on port 3000');
})