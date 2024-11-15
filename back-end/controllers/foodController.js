import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item

const addFood = async(req,res)=>{

    let image_filename=`${req.file.filename}`

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image: image_filename,
        category:req.body.category
    })
    try{
        await food.save();
        res.status(200).json({success:true,message:"food added"})
    }catch(error){
        console.log(error)
        res.status(500).json({success:false,message:"food not added"})
    }
}
//all food list
const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({})
        res.json({success:true,data:foods})
    }catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }
}
//remove food item
const removeFood=async(req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"food removed"})
    }catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}
export {addFood,listFood,removeFood}