require('dotenv').config();
const  express = require('express');
const app = express();

const morgan = require('morgan');//importing morgan
const bodyParser = require('body-parser'); //importing body-parser
const mongoose = require('mongoose');// importing mongoose

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/users');

// use middleware: by using this we can handle multiple routes
// app.use((req,res,next)=>{
//     res.status(200).json({
//         msg:"This is Simple Get Request"
//     })
// });

//use of morgan
app.use(morgan("dev"));

//mongoose conneection string
mongoose.connect("mongodb+srv://vk559113:"+process.env.MONGO_ATLAS_PASS+"@cluster0.pmhvpbf.mongodb.net/",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connected succesfully with MongoDB Atlas")
});

//use of body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//code to handle CORS Error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Credentials",true);
    if(res.header==="OPTIONS"){
        res.header("Access-Control-Allow-Method","PUT","POST","DELETE","GET");
        return res.status(200).json();
    }
    next()
})

//use of routes
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);
app.use("/users",userRoutes);

//handle error by using NEXT middle
app.use((req,res,next)=>{
   const error = new Error("Opps... Route Not Found");
   next(error);// it is use for handle error
})
app.use((error,req,res,next)=>{
    res.status(500).json({
        error:error.message
    })
})



module.exports = app;
