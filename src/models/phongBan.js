const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    phong: String,    
    ban: String        
  });
  const phongBan = mongoose.model('phongBan', userSchema);  
 module.exports = phongBan;