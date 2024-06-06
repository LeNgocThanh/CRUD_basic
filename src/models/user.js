const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    user: String,
    pwd: String,
    phone: String,
    birthday: Date
  });
  const User = mongoose.model('user', userSchema);  
 module.exports = User;