const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    brand:{type:String},
    price:{type:Number},
    category:{type:String},
    quantity:{type:Number},
},{
    versionKey:false
})

const ProductModel=mongoose.model("product",productSchema)

module.exports=ProductModel