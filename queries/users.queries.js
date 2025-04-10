const User = require('../database/models/user-model');

exports.createUser = async (user) => {
  try {
    console.log('createUser', user);
    const hashedPassword = await User.hashPassword(user.password);
    console.log('hashedPassword', hashedPassword);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword
      }
    })
    return newUser.save();
  } catch(e) {
    throw e;
  }
}

exports.findUserPerEmail = (email) => {
  return User.findOne({ 'local.email': email }).exec();
}

exports.findUserPerId = (id) => {
  return User.findById(id).exec();
}