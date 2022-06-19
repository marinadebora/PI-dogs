require('dotenv').config();
const axios =require ('axios');
const {API_KEY}=process.env;
const { Router } = require('express');
const router = Router();
const { Dog , Temperament }=require('../db.js');
const {Op}=require('sequelize');

async function getAllDogsDB(name){
    
    try {
      if(!name){
        dogsDB= await Dog.findAll({
            include:{
                model:Temperament,
                attributes:['name','id'],
                through:{
                    attributes:[]
                } 
            }
        })
       return(dogsDB)  
    } else{
      let dogsDB=[];
      dogsDB = await Dog.findAll({
        
      include:{
          model:Temperament,
          attributes:['name','id'],
          through:{
              attributes:[]
          } 
      },
       where:{
          name:{[Op.iLike]:`%${name}%`}
       },
       
     })
     return dogsDB
    }
  }catch (error) {
       console.log(error) 
    }
}
module.exports= getAllDogsDB;