const express = require('express');
const router = express.Router();
const {getHomePage, getFHA, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, deleteUser} = require('../controllers/homeController')
const {getPhongBanPage, postCreatePhongBan, getCreatePhongBanPage, getUpdatePhongBanPage, postUpdatePhongBan, deletePhongBan} = require('../controllers/phongBanController')
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

router.get('/phongBan', getPhongBanPage);
//router.post
router.post('/createPhongBan', postCreatePhongBan);    
router.get('/createPhongBan',  getCreatePhongBanPage); 
router.get('/updatePhongBan/:id',  getUpdatePhongBanPage);    
//router.get('/updateUser/:id',  getUpdatePage); 
router.post('/updatePhongBan',  postUpdatePhongBan); 
router.post('/deletePhongBan',  deletePhongBan);  
  module.exports = router