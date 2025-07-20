
const express=require("express")
const cors=require("cors")


const app=express()
app.use(cors())

let userEmail="lax@gmail.com"
let userPassword=123

app.use(express.urlencoded({extended:true}))
app.listen(5000,function(req,res){
    console.log("server start...");    
})

app.get("/login",function(req,res){
    // res.send("kitechen")
    console.log(req.query.userEmail);
    console.log(req.query.userPassword);
    if(userEmail==req.query.userEmail && userPassword==req.query.userPassword){
        res.send(true)
    }else{
        res.send(false)
    }
    
})