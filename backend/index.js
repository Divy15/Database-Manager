const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running in this port ${port}`);
});