// require('dotenv').config();
const mongoose = require('mongoose');
const dotenv_sub = require('dotenv'); 
dotenv_sub.config();
const urlDb = process.env.MONGO_URI|| 'mongodb://123456:root@localhost:27017/?authSource=admin' ;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lengocthanh2802:75gNGg57wcNIGAaW@cluster0.krauo9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// const dbState = [{
//   value: 0,
//   label: "disconnected"
// },
// {
//   value: 1,
//   label: "connected"
// },
// {
//   value: 2,
//   label: "connecting"
// },
// {
//   value: 3,
//   label: "disconnecting"
// }];

const connection = async() => {
 
// try {
//   const options = {
//     user : '123456',
//     pass : 'root',
//     dbName: 'admin'
//   }
//   await mongoose.connect('mongodb://localhost:27017', options);
//   console.log('Database connected');
//   const state = Number(mongoose.connection.readyState);
//   console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
// } catch (error) {
//   console.log('error connecting to database',urlDb || 'không xác định được URL' );
// }
try {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch {
  // Ensures that the client will close when you finish/error
  await client.close();
}
} 
  module.exports = connection;