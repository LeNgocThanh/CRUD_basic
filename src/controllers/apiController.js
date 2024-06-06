const User = require('../models/user');
const mongoose = require('mongoose');
const connection = require('../config/database');
const express = require('express');
const getHomeAPI = async (req, res) => {   
    let results = await User.find({});
    //let data = results[0].name; // Access the 'name' property from the 'results' array
  //  console.log(results);
    return res.status(200).json({
        data: results
    });
  };
  const postApiCreateUser = async (req, res) => {
    let user = req.body.user;
    let email = req.body.email;
    let pwd = req.body.pwd;
    let phone = req.body.phone;
    let name = req.body.name;
    let birthday = req.body.birthday;
    console.log(req.body);
    let userData = await User.insertMany({
      user : user,
      email : email, 
      pwd : pwd,
      phone : phone, 
      name : name, 
      birthday: birthday              
      });
    //  console.log('Post create user');
  //  res.send('User created successfully!');
    return res.status(200).json({
        data: userData
    });
  }
  const putApiUpdateUser = async (req, res) => {
    let user = req.body.user;
    let email = req.body.email;
    let pwd = req.body.pwd;
    let phone = req.body.phone;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let id = req.body.id;
    //console.log(req.body);
    let userData = await User.updateOne({_id: id},{
        user : user,
        email : email, 
        pwd : pwd,
        phone : phone, 
        name : name, 
        birthday: birthday              
    }).catch(err => {
        console.log(err);
    });
    return res.status(200).json({
        data: userData
    });
      return res.status(500).json({
          message: 'Internal server error'
      });   
  }
  const deleteUserAPI = async (req, res) => {
    let id = req.body.id;
    console.log(req.body);
    let userData = await User.findByIdAndDelete(id).catch(err => {
        console.log(err);
    }   );
    return res.status(200).json({
        data: userData
    })};
  module.exports = {getHomeAPI,postApiCreateUser,putApiUpdateUser,deleteUserAPI}