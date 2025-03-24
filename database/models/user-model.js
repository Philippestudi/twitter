const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = schema({
  username: { type: String, required: true, unique: true },
  local: {
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true }
  },
   avatar: { type: String, default: '/images/default-profile.svg' }
});

userSchema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 12);
}

userSchema.methods.comparePassword = function (password) {
  console.log('comparepassword:',password, this.local.password);  
  return bcrypt.compare(password, this.local.password)
}

const User = mongoose.model('user', userSchema);
console.log('User model:', User);

module.exports = User;
