const express =require('express');
const productcontroller=require('../controller/product')
const router=express.Router();


//create post /products    C R U D
router
    .post('/',productcontroller.createProduct)
//read get /products
     .get('/',productcontroller.getAllProducts)

//read get /products/:id
      .get('/:id',productcontroller.getProduct)
//update put /products/:id
       .put('/:id',productcontroller.replaceProduct)

//update patch /products/:id
            .patch('/:id',productcontroller.updatePrduct)

//delete delete /products/:id
         .delete('/:id',productcontroller.deletePrduct);

exports.router=router;
