
//1) node-1

// const lib=require('./lib.js')
// const express=require('express');

// console.log("hello world");
// const server=express();
// server.listen(8080);

// var arguments = process.argv 

// function add(a, b) { 

//     // To extract number from string 
//     return parseInt(a)+parseInt(b)  
// } 

// var sum = add(arguments[2], arguments[3]) 

// console.log("Addition of 2, 3 is ", sum) 


// import {sum,diff } from "./lib.js"
// const fs=require('fs');
// const t1=performance.now();
// const txt=fs.readFileSync('demo.txt',"utf-8");

// // const txt=fs.readFile('demo.txt',"utf-8",(err,txt)=>{
// //     console.log(txt);
// // });
// console.log(txt)
// const t2=performance.now();
// console.log(t2-t1);

// // console.log(lib)
// // console.log(lib.sum(4,5),lib.diff(3,6))
// // console.log(sum(4,5),diff(3,6))
// const a=5;


// 2)node-2

// const http=require('http');
// const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8')
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products=data.products;
// const data1={age:5};
// const server=http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     if(req.url.startsWith('/product')){
//         const id=req.url.split('/')[2];
//         const product=products.find(p=>p.id===(+id));
//         console.log(product)
//         res.setHeader("content-type","text/html");
//             let ind=index.replace('**title**',product.title)
//             .replace('**url**',product.thumbnail)
//             .replace('**price**',product.price)
//             .replace('**rating**',product.rating)
//             res.end(ind);
//             return;
//     }
//     switch(req.url){
//         case '/':
//             res.setHeader("content-type","text/html");
//             res.end(index);
//             break;
//         case '/api':
//             res.setHeader("content-type","application/json");
//             res.end(JSON.stringify(data));
//             break;
//         // case '/product':
//         //     res.setHeader("content-type","text/html");
//         //     let ind=index.replace('**title**',products.title)
//         //     .replace('**url**',products.thumbnail)
//         //     .replace('**price**',products.price)
//         //     .replace('**rating**',products.rating)
//         //     res.end(ind);
//         //     break;
//         default:
//             res.writeHead(404,"not found");
//             res.end();

//     }
//     // console.timeLog('server started');
//     // res.setHeader("dummy","value")
//     // res.setHeader("content-type","application/json")
//     // res.setHeader("content-type","text/html")
//     // res.end('<h1>hello</h1>');
//     // res.end(index);
//     // res.end(data);
//     // res.end(JSON.stringify(data1));
// })
// server.listen(8080);

// const server1=http.createServer((req,res)=>{
//     res.end('<h1>hello</h1>');
// })
// server1.listen(8081);




// 3)node-3


// const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8')
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products=data.products;

// const express =require('express');
// const morgan=require('morgan');

// const server=express();

// //body parser
// server.use(express.json());

// // server.use(express.urlencoded());

// server.use(morgan('default'))
// server.use(express.static('public'));



// // server.use((req,res,next)=>{
// //     console.log(req.method,req.ip,req.hostname,new Date(),req.get('user-agent'))
// //     next()
// // })
// const auth=(req,res,next)=>{
//     // console.log(req.query)
//     // if (req.body.password=='123') {
//     //     next()
//     // } else {
//     //     res.sendStatus(401)
//     // }
//     next()

// }
// // server.use(auth)

// //API -endpoint-route

// // server.get("/demo/:name/:subject",
// // function(req,res){ console.log(req.params) 
// //     // prints all data in request object 
// //     res.send(req.query);
// //     // res.json({type:'GET'})
// //  // send back same data in response object
// //  })
// server.get('product/:id',auth,(req,res)=>{
//     // console.log(req.params)
//     console.log(req.query)
//     res.json({type:'GET'})
// })
// server.post('/',auth,(req,res)=>{
//     res.json({type:'POST'})
// })
// server.put('/',(req,res)=>{
//     res.json({type:'PUT'})
// })
// server.delete('/',(req,res)=>{
//     res.json({type:'DELETE'})
// })
// server.patch('/',(req,res)=>{
//     res.json({type:'PATCH'})
// })




// server.get('/',(req,res)=>{
//     // res.send('<h1>hello</h1>')
//     // res.status(201).send('<h1>hello</h1>')
//     // res.json(products)
//     // res.sendStatus(404);
//     // res.sendFile('H:/web development/javascript practice without seeing/backend/index.html')
// })







// server.listen(8080,()=>{
//     console.log('server started')
// });


// 4)node-4


// const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8')
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products=data.products;

// const express =require('express');
// const morgan=require('morgan');

// const server=express();

// //body parser
// server.use(express.json());

// // server.use(express.urlencoded());

// server.use(morgan('default'))
// server.use(express.static('public'));


// //products
// //apt root,base url, example-google.com/api/v2


// //create post /products    C R U D
// server.post('/products',(req,res)=>{
//     console.log(req.body);
//     products.push(req.body);
//     res.json(req.body)
// })
// //read get /products
// server.get('/products',(req,res)=>{
//     res.json(products)
// })

// //read get /products/:id
// server.get('/products/:id',(req,res)=>{
//     // console.log(req.params)
//     const id =+req.params.id;

//     const product=products.find(p=>p.id===id)
//     res.json(product)
// })
// //update put /products/:id
// server.put('/products/:id',(req,res)=>{
//     // console.log(req.params)
//     const id =+req.params.id;
//     const productIndex=products.findIndex(p=>p.id===id)
//      products.splice(productIndex,1,{...req.body,id:id})
//     res.status(201).json();
// })

// //update patch /products/:id
// server.patch('/products/:id',(req,res)=>{
//     // console.log(req.params)
//     const id =+req.params.id;
//     const productIndex=products.findIndex(p=>p.id===id)
//     const product=products[productIndex]
//      products.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json();
// })

// //delete delete /products/:id
// server.delete('/products/:id',(req,res)=>{
//     // console.log(req.params)
//     const id =+req.params.id;
//     const productIndex=products.findIndex(p=>p.id===id)
//     const product=products[productIndex]
//      products.splice(productIndex,1)
//     res.status(201).json(product);
// })



// server.listen(8080,()=>{
//     console.log('server started')
// });



// 5)node-5 mvc
// routes and controller folder
// project.js File



require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const { Schema } = mongoose;
const cors=require('cors');
const path=require('path')

const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
console.log('env', process.env.DB_PASSWORD)
//db connection code
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

main().catch(err => console.log(err));

async function main() {
    //await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected")
}


//schema
// //body parser
server.use(cors());
server.use(express.json());
server.use(morgan('default'))
server.use(express.static(path.resolve(__dirname ,process.env.PUBLIC_DIR)));

server.use('/products', productRouter.router)
server.use('/users', userRouter.router)
server.use('*',(req,res)=>{
    // res.sendFile(__dirname+'/dist/index.html')
    res.sendFile(path.resolve(__dirname,'dist','index.html'))
})

server.listen(8080, () => {
    console.log('server started')
});