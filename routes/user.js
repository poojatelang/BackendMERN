const express =require('express');
const usercontroller=require('../controller/user')
const router=express.Router();


//create post /products    C R U D
router
    .post('/',usercontroller.createUser)
//read get /products
     .get('/',usercontroller.getAllUsers)

//read get /products/:id
      .get('/:id',usercontroller.getUser)
//update put /products/:id
       .put('/:id',usercontroller.replaceUser)

//update patch /products/:id
            .patch('/:id',usercontroller.updateUser)

//delete delete /products/:id
         .delete('/:id',usercontroller.deleteUser);

exports.router=router;
