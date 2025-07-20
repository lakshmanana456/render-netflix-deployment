
const express=require("express")
const cors=require("cors")

const PORT = process.env.PORT || 5000;

const app=express()
app.use(cors())

let userEmail="lax@gmail.com"
let userPassword=123

app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    // res.send("kitechen")
    console.log(req.query.userEmail);
    console.log(req.query.userPassword);
    if(userEmail==req.query.userEmail && userPassword==req.query.userPassword){
        res.send(true)
    }else{
        res.send(false)
    }
    
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});