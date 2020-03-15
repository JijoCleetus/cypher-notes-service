const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./middlewares/logger');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(logger.log);

// import routes
const messageRoute = require('./routes/messages');
const pingRoute = require('./routes/ping');

app.use('/message', messageRoute);
app.use('/ping', pingRoute);

// routes
app.get('/', (req, res) => {
    res.send("Try /ping to check");
});

//db connect
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to db")
    })

// app.listen(3000);

app.listen(3000, () => console.log(`Service running on port ${port}`));