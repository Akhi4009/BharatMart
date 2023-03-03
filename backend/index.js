const express=require("express")
const cors=require("cors")
const connection=require("./db")
const productRouter=require("./routes/product.route")
const cartRouter=require("./routes/Cart.routes")
const addressRouter=require("./routes/Address.route")
const userRouter=require("./routes/User.routes")
const authorization=require("./middleware/auth.middleware")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/address",authorization,addressRouter)
app.use("/cart",authorization,cartRouter)

const port =process.env.port

app.listen(port,async()=>{

    try{
        await connection
        console.log('connected to BharatMart db');
    }catch(err){
        console.log({msg:"Not connected to db","error":err.message});
    }
    console.log(`server is running in port ${port}`);
})