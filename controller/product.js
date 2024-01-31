const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8')
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products=data.products;


const model=require('../model/product')
const mongoose = require('mongoose');
const Product=model.Product;


//post
 exports.createProduct=async(req,res)=>{
    // console.log(req.body);
    // products.push(req.body);
    // res.json(req.body)

    const product=new Product(req.body);
    // product.title='PhoneX';
    // product.price=9999;
    // product.rating=5;
    await product.save().then((doc)=>{
        console.log(doc)
        res.status(201).json(doc);
        // if(err){
        //     res.status(400).json(err);
        // }
        // else{
        //     res.status(201).json(doc);
        // }
        
 }).catch((err)=>{
    res.status(400).json(err);
 });
   
}

//get
exports.getAllProducts=async(req,res)=>{
    const products=await Product.find();
    res.json(products)
}

//get
exports.getProduct=async(req,res)=>{
    // console.log(req.params)
    const id =req.params.id;
    // const product=products.find(p=>p.id===id)
    const products=await Product.findById(id);
    res.json(products)
}

//put
exports.replaceProduct=async(req,res)=>{
    // console.log(req.params)
    const id =req.params.id;
    // const productIndex=products.findIndex(p=>p.id===id)
    //  products.splice(productIndex,1,{...req.body,id:id})
    try {
        const doc =await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
   
   
}


//patch
exports.updatePrduct=async(req,res)=>{
    // console.log(req.params)
    const id =req.params.id;
    // const productIndex=products.findIndex(p=>p.id===id)
    // const product=products[productIndex]
    //  products.splice(productIndex,1,{...product,...req.body})
    try {
        const doc =await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//delete
exports.deletePrduct=async(req,res)=>{
    // console.log(req.params)
    const id =req.params.id;
    // const productIndex=products.findIndex(p=>p.id===id)
    // const product=products[productIndex]
    //  products.splice(productIndex,1)
    try {
        const doc =await Product.findOneAndDelete({_id:id})
        res.status(201).json(doc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}