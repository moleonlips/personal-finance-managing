const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

const userRouter = require('./routes/user');

const staticConfig = require('./config/static.config');
staticConfig(app, express, path);

const port = process.env.PORT
const host = process.env.HOST

app.get('/', (req, res) => {
    res.send(`xin chao viet nam`);
})

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`press CTRL and click ${host+':'+port} to visit site!`);
})