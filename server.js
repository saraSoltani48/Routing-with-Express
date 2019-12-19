const express = require("express");
const app = express();
// app.get("/home",(req,res)=>{
//     res.send("hello ,this is my home page")
// })
// app.get("/contact",(req,res)=>{
//     res.sendFile(__dirname+'/project/contact.html')
// })



const date = new Date().getHours();
console.log(date);
if (date > 17 || date < 5) {
    console.log("Our office is not open now");
    //res.send("<h1>Our office is not open now</h1>")
    
    

} else {
    
    app.use(express.static(__dirname + "/project"));
      console.log("welcome to our website");
    //   next();
    }



app.listen(3000, err => {
  if (err) console.log("server is not runing ");
  else console.log("server is runing");
});
