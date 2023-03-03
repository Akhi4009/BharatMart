const express = require("express");
const CartModel=require("../models/cart.model")

const router = express.Router();

router.get("/", async (req, res) => {
 const user = req.body.user;
 
    try {
      
      const CartData = await CartModel.find({user});
      res.send({CartData});
    } catch (error) {
      res.send({ message: "Cannot get cart products", error: error.message });
    }
});

router.post("/add", async (req, res) => {
  console.log(req.body)
  try {
    const CartData = new CartModel(req.body);
    await CartData.save();
    res.send({ message: "Product has been added successfully to the cart" });
  } catch (error) {
    res.send({ message: "Cannot add product to the cart", error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    
    try {
     const data= await CartModel.findByIdAndDelete({_id:id});
     console.log(data)
      res.send({ message: "Product has been deleted successfully from the cart" });
    } catch (error) {
      res.send({ message: "Cannot delete the product from the cart", error: error.message });
    }
});

router.delete("/deleteAll/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id)

  
  try {
    await CartModel.deleteMany({user:id});
    res.send({ message: "Product has been deleted successfully in the cart" });
  } catch (error) {
    res.send({ message: "Cannot delete the product from the cart", error: error.message });
  }
 });




router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
 
  const payload=req.body
  try {
    await CartModel.findByIdAndUpdate({_id:id},payload);
    res.send({ message: "Product has been updated successfully from the cart" });
  } catch (error) {
    res.send({ message: "Cannot delete the product from the cart", error: error.message });
  }
});


module.exports=router;