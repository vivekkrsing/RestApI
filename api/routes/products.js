const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const uploads = multer({storage:storage})
// const Product = require('../model/productModel');
// const mongoose = require('mongoose');
const productModelRequest = require('../controller/product.model');

//get request for product all list
router.get("/",productModelRequest.get_products);

//post request for product
router.post("/",uploads.single("productImage"),productModelRequest.create_product);

    // const productObj = {
    //     name:req.body.name,
    //     price:req.body.price
    // }

//GET req for SINGLE product
router.get("/:productId",productModelRequest.get_product_ById);


//PUT req for SINGLE product
// router.put("/:productId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is the simple PUT request for SINGLE product"
//     })
// });
//PUT req for SINGLE product with ID
router.put("/:productId",productModelRequest.update_product);


//DELETE req for SINGLE product with id
router.delete("/:productId",productModelRequest.delete_product);

module.exports = router;