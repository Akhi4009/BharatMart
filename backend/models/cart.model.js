const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    brand:{type:String},
    price:{type:Number},
    category:{type:String},
    quantity:{type:Number},
    user:String
},{
    versionKey:false
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports=CartModel