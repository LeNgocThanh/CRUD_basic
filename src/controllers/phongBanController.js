const PhongBan = require('../models/phongBan');
const mongoose = require('mongoose');
const connection = require('../config/database');
const express = require('express');

const getPhongBanPage = async (req, res) => {   
  let results = await PhongBan.find({});
  //let data = results[0].name; // Access the 'name' property from the 'results' array
//  console.log(results);
  return res.render('phongban.ejs', { data : results }); // Pass 'data' as a property to the 'res.render()' method
};
  const getCreatePhongBanPage = async (req, res) => {
    res.render('createPhongBan.ejs');
  }
  const getUpdatePhongBanPage = async (req, res) => {   
    let results = await PhongBan.findById(req.params.id);
    //let data = results[0].name; // Access the 'name' property from the 'results' array
    console.log(req.params.id);
    console.log(results);
    return res.render('editPhongBan.ejs', { data : results }); // Pass 'data' as a property to the 'res.render()' method
  };
  const getFHA = (req, res) => {   
    res.render('sample.ejs');
  }
  const postCreatePhongBan = async (req, res) => {    
    let Phong = req.body.phong;
    let Ban = req.body.ban;    
    let phongBanExit = await PhongBan.find({});
   
    for(let i = 0; i < phongBanExit.length; i++){
      if(phongBanExit[i].phong == Phong && phongBanExit[i].ban == Ban){
        return res.status(400).json({
          message: 'Phong Ban already exists'
        });
      }
    }       
    await PhongBan.insertMany({
      phong: Phong,
      ban: Ban              
      });
      console.log('Post create phong ban');
    res.send('Phong Ban created successfully!');
  }
  const postUpdatePhongBan = async (req, res) => {
    
    let phong = req.body.phong;
    let ban= req.body.ban;
    let id = req.body.id;
    let phongBanExit = await PhongBan.find({});
   
    for(let i = 0; i < phongBanExit.length; i++){
      if(phongBanExit[i].phong == phong && phongBanExit[i].ban == ban){
        return res.status(400).json({
          message: 'Phong Ban already exists'
        });
      }
    }     
    await PhongBan.findByIdAndUpdate(id, {
        phong: phong,
        ban: ban                    
      });
      console.log('Post create phong ban');
    res.send('Phong Ban created successfully!');
  }
  const deletePhongBan = async (req, res) => {
    let id = req.body.id;
    console.log(req.body);
    await PhongBan.findByIdAndDelete(id);
      console.log('Delete phong ban');
    res.send('Phong Ban delete successfully!');
  }
module.exports = { getPhongBanPage, getFHA, postCreatePhongBan, getCreatePhongBanPage, getUpdatePhongBanPage, postUpdatePhongBan, deletePhongBan };