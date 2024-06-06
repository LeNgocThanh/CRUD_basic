// require('dotenv').config();
const mongoose = require('mongoose');
const dotenv_sub = require('dotenv'); 
dotenv_sub.config();
const urlDb = process.env.MONGO_URI|| 'mongodb://123456:root@localhost:27017/?authSource=admin' ;

const dbState = [{
  value: 0,
  label: "disconnected"
},
{
  value: 1,
  label: "connected"
},
{
  value: 2,
  label: "connecting"
},
{
  value: 3,
  label: "disconnecting"
}];

const connection = async() => {
 
try {
  const options = {
    user : '123456',
    pass : 'root',
    dbName: 'admin'
  }
  await mongoose.connect('mongodb://localhost:27017', options);
  console.log('Database connected');
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
} catch (error) {
  console.log('error connecting to database',urlDb || 'không xác định được URL' );
}
}
  module.exports = connection;