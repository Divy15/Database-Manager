const express = require('express');
const cors = require('cors');
const apiRoute = require('./routes/index');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

// API section
app.use('/api', apiRoute);


app.listen(port, () => {
    console.log(`Server is running in this port ${port}`);
});