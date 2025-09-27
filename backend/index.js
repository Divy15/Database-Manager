const express = require('express');
const cors = require('cors');
const apiRoute = require('./routes/index');
const session = require('express-session');
const passport = require('passport');
const redisClient = require('./redis');
const { RedisStore } = require("connect-redis");
const dotenv = require('dotenv');
dotenv.config();

const store = new RedisStore({
  client: redisClient,
  prefix: "sess:", // or any prefix *matching* your cookie format
});

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'Lionking9',
  cookie: {
    maxAge: 60 * 60 * 1 * 1000
  }, //1 Hours
  rolling: true,
  saveUninitialized: true,
  resave:false,
  store
}));

app.use(passport.initialize());
app.use(passport.session());

// API section
app.use('/api', apiRoute);


app.listen(port, () => {
    console.log(`Server is running in this port ${port}`);
});