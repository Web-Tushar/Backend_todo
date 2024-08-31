const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const { Schema } = mongoose;

// middlewere
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded());
// database connection 
mongoose
     .connect(
          'mongodb+srv://tusharimranvip895:XWTvbAY4NDsw3wNy@cluster0.zjgki.mongodb.net/blog')
     .then(() => {
          console.log("database connection succesfull");
     }).catch((err) => {
          console.log(`database connection faild ${err}`);
     })


// make a Schema
const blogSchema = new Schema({
     userName: {
          type: String,
          min: 4,
          max: 20,
          required: true,
          trim: true,

     },
     email: {
          type: String,
          required: true,
          trim: true,

     },
     blog: {
          type: String,
          required: true,
          trim: true,

     },


})
const blogModel = mongoose.model('user', blogSchema)

//  get route
app.post('/createBlog', async (req, res) => {
     const { userName, email, blog } = req.body;
     if (!userName) {
          return res.status(400).json({
               message: " username is missig!!"
          })
     }
     if (!email) {
          return res.status(400).json({
               message: "email is missig!!"
          })
     }
     if (!blog) {
          return res.status(400).json({
               message: "blog is missig!!"
          });
     }
     //    naw save the database  this info 
     const users = await blogModel.create({
          userName: userName,
          email: email,
          blog: blog,

     });
     users.save();
     res.status(200).json({
          sucess: true,
          data: users,
          message: "blog post success full"
     })
});

// get all users
app.get("/getAllblog", async (req, res) => {
     const alluser = await blogModel.find({});
     if (!alluser) {
          return res.status(400).json({
               message: "data is missig!!"

          });
     }
     res.status(200).json({
          sucess: true,
          data: alluser,
          message: "get all users sucessfull",
     })
})



//    creat server here
app.listen(3000, () => {
     console.log(`server runing on port ${3000}`);
})