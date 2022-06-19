require('dotenv').config();
const axios =require ('axios');
const {API_KEY}=process.env;
const { Router } = require('express');
const router = Router();
const { Temperament }=require('../db.js');


router.get('/', async(req,res,next)=>{
    let temperaments= (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`))
    .data.map(e=>(
       e.temperament
    ))
    let element='';
    for (let i = 0; i < temperaments.length; i++) {
       element = element+temperaments[i];
        
    }
    temperaments=element.split(',')
    let temp=temperaments.map(e=> e.trim())
    let uniqueTemp= [...new Set(temp)];

    uniqueTemp.map((element,index)=>{Temperament.findOrCreate({
        where:{
            name:element,
            id:index
        }
    })})

  
   const alltemperaments= await Temperament.findAll()  
    
    res.send(alltemperaments);

})


module.exports=router;



