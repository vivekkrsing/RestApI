
const mongoose = require('mongoose');
const Product = require('../model/productModel');

//code for post request
   exports.create_product = async (req,res,next)=>{
          try{

            const productObj = new Product({
                _id:new mongoose.Types.ObjectId(),
                name:req.body.name,
                price:req.body.price
            });
            // productObj.save().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
         const data = await productObj.save()
        
            res.status(200).json({
                code:1,
                msg:"This is the simple POST request for product",
                createdProduct:data,
                error:null
            })

        }catch(err){
            res.status(200).json({
                code:0,
                msg:"Something went wrong",
                createdProduct:null,
                error:err
            });
         }
    }

    // code for getting product List
     exports.get_products = async (req,res,next)=>{
        try{
           const data = await Product.find();
           if(data){
            res.status(200).json({
                code:1,
                message:"This is simple get requesr for product",
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
                message:"Something went Wrong",
                data:null,
                error:err
            
            })
        }
    }

    //CODE FOR GETTING SINGLE PRODUCT
    exports.get_product_ById = async (req,res,next)=>{
        try{
            const data = await Product.findById(req.params.productId);
            if(data){
                res.status(200).json({
                    code:1,
                    message:"This is Simple get request for Single Product",
                    data:data,
                    error:null
                });
            }else{
                res.status(200).json({
                    code:1,
                    message:"No product is available with given id",
                    data:null,
                    error:null
                })
            }
        }catch(error){
            res.status(200).json({
                code:0,
                message:"Something went wrong",
                data:null,
                error:error
            })
        }
    }

    //code for update single product
    exports.update_product = async (req,res,next)=>{
        try{
          const data = await Product.findByIdAndUpdate(req.params.productId,req.body,{new:true,runValidator:true});
          res.status(200).json({
            code:1,
            message:"This is simple PUT REQUEST FOR SINGLE PRODUCT",
            data:data,
            error:null
          })
        }catch(error){
            res.status(500).json({
                code:0,
                message:"somthing went wrong",
                data:null,
                error:error
            })
        }
    }

    //code for delete single product method 1
    // exports.delete_product = async (req,res,next)=>{
    //     try{
    //       const data = await Product.findByIdAndDelete(req.params.productId);
    //       res.status(200).json({
    //         code:1,
    //         message:"Deleted Succesfully",
    //         data:data,
    //         error:null
    //       })
    //     }catch(error){
    //         res.status(500).json({
    //             code:0,
    //             message:"somthing went wrong",
    //             data:null,
    //             error:error
    //         })
    //     }
    // }
    

    
    // code for deleting product method 2
    exports.delete_product = async (req,res,next)=>{
        try{
            const data  = await Product.findByIdAndDelete(req.params.productId);
            if(!data){
               res.status(404).json({
                code:1,
                message:"No Product Found",
                data:data,
                error:null
               })
            }else{
                res.status(404).json({
                    code:1,
                    message:"delete request perform successfully",
                    data:data,
                    error:null
                   })
            }
        }catch(error){
            res.status(500).json({
                code:0,
                message:"Somthing went wrong",
                data:null,
                error:error
               })
        }
    }
     
