// const cors = require("cors")
// const express = require("express")
// const {mongoose,Schema} = require('mongoose'); 




// // const mongoose = require('mongoose'); //importing mongoose so we can save data coming from frontend to backend to database

// main().catch(err => console.log(err))   //this is important! without it the mongodb wont connect 
// async function main() { // function used to connect node throough mongoose
//     await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');   
//   console.log("connected to the mongodb database")
  
//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//   }

//   const contactSchema = new Schema({
//     // name: String,
//     email:String,
//     contact: Number
   
//   })
// //  writeProduct = async (req,res)=>{
// //     // console.log(req.body)
// //    const product = await new Product(req.body)  //this project objectid of the product database created in schema
// //   product.save() //this function will save the data passed to the product object created above
  
// //    res.status(202).json(req.body)
   
// // }


// const app = express()
// app.use(express.json()) 
// app.use(cors())

// const Contact = mongoose.model('Contact', contactSchema);


// app.post("/api/contacts",async(req,res)=>{
// console.log("data received")
// console.log(req.body)
// console.log("workigmmgm")

// const contact = await new Contact(req.body)  //this project objectid of the contact database created in schema
//   contact.save()

// // res.send("okkkk")
// res.json(req.body.email)
// })






// app.listen(5000,()=>{console.log("app is running")})








const cors = require("cors")
const express = require("express")
const {mongoose,Schema} = require('mongoose'); 




// const mongoose = require('mongoose'); //importing mongoose so we can save data coming from frontend to backend to database

main().catch(err => console.log(err))   //this is important! without it the mongodb wont connect 
async function main() { // function used to connect node throough mongoose
    await mongoose.connect('mongodb://127.0.0.1:27017/portfolio');   
  console.log("connected to the mongodb database")
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  const contactSchema = new Schema({
    name: String,
    email:String,
    contact:Number
    
   
  })



const app = express()
app.use(express.json()) 
app.use(cors())

const Contact = mongoose.model('Contact', contactSchema);


app.post("/api/contacts",async(req,res)=>{
console.log("data received")
console.log(req.body)


const contact = await new Contact(req.body)  //this project objectid of the contact database created in schema
  contact.save()


res.json(req.body)
})






app.listen(5000,()=>{console.log("app is running")})