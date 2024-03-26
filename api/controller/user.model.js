
const mongoose = require('mongoose');
const User = require('../model/userModel');

//code for post request for user
   exports.create_user = async (req,res,next)=>{
          try{

            const userObj = new User({
                _id:new mongoose.Types.ObjectId(),
                email:req.body.email,
                password:req.body.password
            });
            // productObj.save().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
         const data = await userObj.save()
        
            res.status(200).json({
                code:1,
                msg:"New User Added",
                createdUser:data,
                error:null
            })

        }catch(err){
            res.status(200).json({
                code:0,
                msg:"Something went wrong",
                createdUser:null,
                error:err
            });
         }
    }

    // code for getting users List
     exports.get_users = async (req,res,next)=>{
        try{
           const data = await User.find();
           if(data){
            res.status(200).json({
                code:1,
                message:"Got the list of all Users",
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

    //CODE FOR GETTING SINGLE User
    exports.get_user_ById = async (req,res,next)=>{
        try{
            const data = await User.findById(req.params.userId);
            if(data){
                res.status(200).json({
                    code:1,
                    message:"Got a Single User",
                    data:data,
                    error:null
                });
            }else{
                res.status(200).json({
                    code:1,
                    message:"No user is available with given id",
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

    //code for update single user
    exports.update_user = async (req,res,next)=>{
        try{
          const data = await User.findByIdAndUpdate(req.params.userId,req.body,{new:true,runValidator:true});
          res.status(200).json({
            code:1,
            message:"This User has been updated",
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
     
    // code for deleting product method 2
    exports.delete_user = async (req,res,next)=>{
        try{
            const data  = await User.findByIdAndDelete(req.params.userId);
            if(!data){
               res.status(404).json({
                code:1,
                message:"No User Found",
                data:data,
                error:null
               })
            }else{
                res.status(404).json({
                    code:1,
                    message:"User Deleted Successfully",
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
     
