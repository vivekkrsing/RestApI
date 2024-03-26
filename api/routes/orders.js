const express = require('express');
const router = express.Router();


const orderModelRequest = require('../controller/order.model');

//get request for order
router.get("/",orderModelRequest.get_orders);

//post request for order
router.post("/",orderModelRequest.create_order);
// router.post("/",(req,res,next)=>{
//     const orderObj = {
//         productId:req.body.productId,
//         quantity:req.body.quantity
//     }
//      res.status(200).json({
//         msg:"This is the simple POST request for order",
//         createdOrder:orderObj
//     })
// });

//GET req for SINGLE order
// router.get("/:orderId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is the simple GET request for SINGLE order"
//     })
// });
router.get("/:orderId",orderModelRequest.get_order_ById);


//PUT req for SINGLE order
router.put("/:orderId",(req,res,next)=>{
    res.status(200).json({
        msg:"This is the simple PUT request for SINGLE order"
    })
});

//DELETE req for SINGLE order
// router.delete("/:orderId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is the simple DELETE request for SINGLE order"
//     })
// });
router.delete("/:orderId",orderModelRequest.delete_order);


module.exports = router;