const express = require('express');
const router = express.Router();
const {getHomePage, getFHA, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, deleteUser} = require('../controllers/homeController')
router.get('/', getHomePage);
//router.get
router.get('/FHA', getFHA);
//router.post
router.post('/create', postCreateUser);    
router.get('/createUser',  getCreatePage); 
router.get('/updateUser/:id',  getUpdatePage);    
//router.get('/updateUser/:id',  getUpdatePage); 
router.post('/updateUser',  postUpdateUser); 
router.post('/deleteUser',  deleteUser);  
  module.exports = router