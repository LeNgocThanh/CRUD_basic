const User = require('../models/user');
const mongoose = require('mongoose');
const connection = require('../config/database');
const express = require('express');

const getHomePage = async (req, res) => {   
  let results = await User.find({});
  //let data = results[0].name; // Access the 'name' property from the 'results' array
//  console.log(results);
  return res.render('home.ejs', { data : results }); // Pass 'data' as a property to the 'res.render()' method
};
  const getCreatePage = (req, res) => {
    res.render('create.ejs');
  }
  const getUpdatePage = async (req, res) => {   
    let results = await User.findById(req.params.id);
    //let data = results[0].name; // Access the 'name' property from the 'results' array
    console.log(req.params.id);
    console.log(results);
    return res.render('edit.ejs', { data : results }); // Pass 'data' as a property to the 'res.render()' method
  };
  const getFHA = (req, res) => {   
    res.render('sample.ejs');
  }
  const postCreateUser = async (req, res) => {
    let user = req.body.user;
    let email = req.body.email;
    let pwd = req.body.pwd;
    let phone = req.body.phone;
    let name = req.body.name;
    let birthday = req.body.birthday;
    console.log(req.body);
    await User.insertMany({
      user : user,
      email : email, 
      pwd : pwd,
      phone : phone, 
      name : name, 
      birthday: birthday              
      });
      console.log('Post create user');
    res.send('User created successfully!');
  }
  const postUpdateUser = async (req, res) => {
    let id = req.body.id;
    let user = req.body.user;
    let email = req.body.email;
    let pwd = req.body.pwd;
    let phone = req.body.phone;
    let name = req.body.name;
    let birthday = req.body.birthday;
    console.log(req.body);
    await User.findByIdAndUpdate(id, {
      user : user,
      email : email, 
      pwd : pwd,
      phone : phone, 
      name : name, 
      birthday: birthday              
      });
      console.log('Post create user');
    res.send('User created successfully!');
  }
  const deleteUser = async (req, res) => {
    let id = req.body.id;
    console.log(req.body);
    await User.findByIdAndDelete(id);
      console.log('Delete user');
    res.send('User delete successfully!');
  }
module.exports = { getHomePage, getFHA, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, deleteUser };