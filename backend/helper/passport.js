const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const pool = require('../db');

passport.use(new LocalStrategy(
  { usernameField: 'email' ,
    passReqToCallback: true 
  }, // 👈 tell Passport to use email instead of username
  async (req,email,password, done) => {

    try {
      const result = await pool.query('SELECT * FROM user_login_get_user_data($1)', [email]);
      if (result.rows.length === 0) {
        return done(null, false, { message: 'User not found' });
      }

      const user = result.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return done(null, false, { message: 'Invalid password' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

/**
 * Serialize & Deserialize user (store user in session)
 */
passport.serializeUser((user, done) => {
  done(null, user); // store only user id
});

passport.deserializeUser(async (user, done) => {
  try {
    const result = await pool.query('SELECT * FROM user_login_get_user_data($1)', [user.useremail]);
      if (result.rows.length === 0) {
        return done(null, false, { message: 'User not found' });
      }

    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {

        return next();
    }
    var retVal = {
        success: false,
        message: "Sorry,You are not Authorized.!"
    };
    res.status(401).send(retVal);
};



module.exports = passport;