const express = require("express");
const AddressModel = require("../models/Adrress.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const user = req.body.user;

    try {
      const userAddress = await AddressModel.find({ user });
      res.send({"msg":"success",data:userAddress});
    } catch (error) {
      res.send({ message: "Cannot get users address", error: error.message });
    }
});

router.post("/add", async (req, res) => {

  const user=req.body.user
  const data=await AddressModel.find({user})
 if(data.length>0){
  res.send({"msg":"Your Address already present"})
 }else{
  try{

  
  const userAddress = new AddressModel(req.body);
  await userAddress.save();
  res.send({ message: "Address has been added successfully" });
} catch (error) {
  res.send({ message: "Cannot add Address", error: error.message });
}
 }
 
  });

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await AddressModel.findByIdAndDelete({_id:id});
    res.send({ message: "Address has been deleted successfully from the db" });
  } catch (error) {
    res.send({ message: "Cannot delete the Address from the cart", error: error.message });
  }
});
router.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload=req.body
  try {
    await AddressModel.findByIdAndUpdate({_id:id},payload);
    res.send({ message: "Address has been updated successfully from the db" });
  } catch (error) {
    res.send({ message: "Cannot update the Address from the cart", error: error.message });
  }
});

module.exports=router