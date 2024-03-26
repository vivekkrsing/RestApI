require('dotenv').config(); //importing dotenv
const http = require('http');
const app = require('./app');


// let server = http.createServer((req,res)=>{
//     res.write("server created successfully");
//     res.end();
// })

//using dotenv
let server = http.createServer(app);

let port = process.env.PORT
let host = process.env.HOST


server.listen(7777,()=>{
    console.log(`Server get started on ${host}:${port}`);
})
