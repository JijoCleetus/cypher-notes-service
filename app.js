const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./middlewares/logger');

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(logger.log);

// routes
app.get('/', (req, res) => {
    res.send("We are on home");
})
app.post('/post', (req, res) => {
    res.send("We are on post");
})

// app.listen(3000);

app.listen(3000, () => console.log(`Service running on port ${port}`));