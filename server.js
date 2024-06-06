const express = require('express');
const path = require('path'); // Add this line
const routes = require('./src/routers/web');

require('dotenv').config();
const connection = require('./src/config/database');
const user = require('./src/models/user');
const mongoose = require('mongoose');
const routerAPI = require('./src/routers/api');


const configViewEngine = require('./src/config/viewEngine');

const app = express()
app.use(express.json( )); // Used to parse JSON bodies
app.use(express.urlencoded( )); //Parse URL-encoded bodies
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME || 'localhost'
/* app.set('views', __dirname + '/src/views/')
app.set('view engine', 'ejs') */

configViewEngine(app); // Add this line
app.use('/', routes)  ;
app.use('/v1/API', routerAPI)  ;

(async() => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    })
  }
  catch (error) {
    console.log('error connecting to database', error );
  }
  
}
)()


