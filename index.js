// const http = require("http");
// import http from 'http';
// import { per} from './feature.js';
// import path from 'path';

// console.log(path);
// console.log(per());

// const server = http.createServer((req, res) => {   
//     console.log(req.url);
//     if(req.url === "/about") {
//         res.end("<h1>These is an about page</h1>");
//     } else if(req.url === "/pramod") {
//         res.end(`<h1>Love is to take ${per()}</h1>`);
//     } else if(req.url === "/"){
//         res.end("<h1> You are at my Home</h1>");
//     }else {
//         res.end("<h1>Page not found</h1>");
//     }

// });

// server.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });

// console.log("Pramod kumar");

// import express from 'express';
// import path from "path";
//  const app = express();

//     app.set("view engine","ejs")
//     app.get("/",(req,res)=> {
//         const loc = path.resolve();
//         // console.log(path.join(loc,"./index.html"));
//         res.sendFile(path.join(loc,"./index.html"));
//     })
// //  console.log(server);
//     app.listen(3000,() => {
//         console.log("Log is running");
//     })


import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
// mongo connections 
mongoose .connect("mongodb://localhost:27017",{
    dbName : "backEnd",
}).then(()=>console.log("Data Base Connected"))
.catch((e) => console.log(e));

const mesgSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
})

const Message = mongoose.model("Message",mesgSchema);
const app = express();
        
        // Medialwares
        app.use(express.static(path.join(path.resolve(), "public"))); // to add new pages
        app.use(express.urlencoded({ extended : true}));
        app.set("view engine","ejs");

        app.post("/contact",(req,res) => {
            // console.log(req.body.name);
            Message.create({ name : req.body.name,
                        email : req.body.email,
                    phone: req.body.PhoneNo }).then((e)=>{

                        res.render("success.ejs");
                    })
        });

        // app.set("view engine","ejs")
        app.get("/contact",(req,res)=> {
            res.render("index.ejs");
        })

        //mongo test 
        // app.get("/add",(req,res)=> {
        //     Message.create({name:req.body.name, email:"pramod72@gmail.com"}).then((e) =>{
        //         res.send("nice");
        //     })
        // })
        //  app.get("/success",(req,res) => {
        //     res.render("success");
            
        // })
        
        // app.get("/users", (req,res) => {
        //     res.json({
        //         users,
        //     });
        // });
        app.get("/",(req,res)=> {
            res.render("home.ejs");
        })



    // port sconections successfull message 
        app.listen(3000,() => {
            console.log("Log is running");
        })
