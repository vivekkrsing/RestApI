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
const userModelRequest = require('../controller/user.model');

//get request for users all list
router.get("/",userModelRequest.get_users);

//post request for user
router.post("/",uploads.single("userImage"),userModelRequest.create_user);

//GET req for SINGLE product
router.get("/:userId",userModelRequest.get_user_ById);

//PUT req for SINGLE product with ID
router.put("/:userId",userModelRequest.update_user);

//DELETE req for SINGLE product with id
router.delete("/:userId",userModelRequest.delete_user);

module.exports = router;