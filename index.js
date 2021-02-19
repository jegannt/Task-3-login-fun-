const express = require('express');
const app =express();
const port = 3000
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

mongoose.connect(process.env.DB_URL,
   {useNewUrlParser: true ,useUnifiedTopology: true},
     ()=>{
         console.log("DB connected....!");
    
    })

   app. use(cookieParser());
   app.use(express.json());

   //Routes
app.use("/api/user",authRoutes);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })