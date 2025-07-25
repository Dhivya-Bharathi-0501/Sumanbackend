const express = require('express')
const cors = require('cors')
require('dotenv').config();
const bodyparser = require('body-parser')
const  connectDatabase  = require('./DB_connection/db_connection');
const PORT = process.env.PORT || 8000
const Approuter = require('./routers/router')
const path = require('path');

//Initialize the app
const app = express()
app.use(cors());
app.use(bodyparser.json());


app.get('/' , (req,res)=>{
    res.send("Welcome to Suman!")
})
// Change to EXACTLY this:
app.use('/images/Products', express.static(path.join(__dirname, 'Iyappaa/Products')));


app.use( Approuter);



async function startServer() {
    try {
      // Connect to MongoDB
      await connectDatabase();
    //   await sequelize.sync({force: false});
      console.log("Database Connected Successfully!")
  
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Unable to start server:', error);
    }
  }
  
  // Call the async function to start the server
  startServer();

