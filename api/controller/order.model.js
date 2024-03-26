
const mongoose = require('mongoose')
const Order = require('../model/orderModel')
 
// code for creating order 
exports.create_order = async (req,res,next)=>{
    try{
        const orderObj = new Order({
            _id:new mongoose.Types.ObjectId(),
            product:req.body.productId,
            quantity:req.body.quantity
        })
 
        const data = await orderObj.save()
 
        res.status(200).json({
            code:1,
            message:"order created successfully",
            data:data,
            error:null
        })
    }catch(err){
        res.status(500).json({
            code:0,
            message:"something went wrong",
            data:null,
            error:err
        })
    }
}
 
//code for get the order list
exports.get_orders = async (req,res,next)=>{
    try{
        
       const data = await Order.find();
       if(data){
        res.status(200).json({
            code:1,
            message:"Get Request for Order List Succesfully",
            data:data,
            error:null
        });
       }else{
        res.status(200).json({
            code:1,
            message:"No Data Available",
            data:null,
            error:null
        })
       }
    }catch(err){
        res.status(200).json({
            code:0,
            message:"Oops...Something went Wrong",
            data:null,
            error:err
        
        })
    }
}

// code of get the order with a id/single order
exports.get_order_ById = async (req,res,next)=>{
    try{
        const data = await Order.findById(req.params.orderId);
        if(data){
            res.status(200).json({
                code:1,
                message:"Get Request For Single Order Succesfully",
                data:data,
                error:null
            });
        }else{
            res.status(200).json({
                code:1,
                message:"Invalid Order ID",
                data:null,
                error:null
            })
        }
    }catch(error){
        res.status(200).json({
            code:0,
            message:"Oops...Something went Wrong",
            data:null,
            error:error
        })
    }
}

//code of delete the  single order 
exports.delete_order = async (req,res,next)=>{
    try{
        const data  = await Order.findByIdAndDelete(req.params.orderId);
        if(!data){
           res.status(404).json({
            code:1,
            message:"Unavailable Order ID",
            data:data,
            error:null
           })
        }else{
            res.status(404).json({
                code:1,
                message:"Order Deleted Successfully",
                data:data,
                error:null
               })
        }
    }catch(error){
        res.status(500).json({
            code:0,
            message:"Oop...Somthing went wrong",
            data:null,
            error:error
           })
    }
}
