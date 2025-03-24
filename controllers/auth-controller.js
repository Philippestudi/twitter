const passport = require('passport');

exports.signinForm = (req, res, next) => {
  console.log('-----signinform req.isAuthenticated():', req.isAuthenticated());
  res.render('auth/auth-form', {
     errors: null,
    isAuthenticated: req.isAuthenticated(),
     currentUser: req.user,
   });
};

exports.signin = (req, res, next) => {
  console.log('--------->authen signin:', req.body);
  passport.authenticate('local', (err, user, info) => {
    console.log('<-------APRES authenticateuser:', user);
 
    if (err) {
      next(err);
    } else if (!user) {
      console.log('user inconnu:', info.message);
      res.render('auth/auth-form', {
        errors: [info.message],
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user,
      });
    } else {
      console.log('------->Avant login user :');
      req.login(user, (err) => {
        console.log('<-----Apres login user:');
        if (err) {
          next(err);
        } else {
          res.redirect('/tweets');
        }
      });
    }
  })(req, res, next);
};

exports.signout = (req, res, next) => {
  console.log('------->Avant logout user :');
  req.logout((err) => {
  console.log('<-----Apres logout user:');
    if (err) {
      return next(err);
    }
    res.redirect('/auth/signin/form');
  });
};