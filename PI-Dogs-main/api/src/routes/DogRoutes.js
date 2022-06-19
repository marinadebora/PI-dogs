require('dotenv').config();
const axios =require ('axios');
const {API_KEY}=process.env;
const { Router } = require('express');
const router = Router();
const { Dog , Temperament }=require('../db.js');
const {Op}=require('sequelize');
const  getAlldogsApi  = require('../funciones/funApi.js');
const  getAllDogsDB  = require('../funciones/funDB.js');


//---------Buscar todos los perros y por nombre de raza----------
router.get('/', async(req,res,next)=>{
  const {name}=req.query;
  
  try {
    const dogsApi= await getAlldogsApi(name);
    const dogDB= await getAllDogsDB(name);
   
    if(name){
      let totatDogs=[...dogDB,...dogsApi];
      res.send(totatDogs)
    }else{
      await Promise.all([dogDB,dogsApi])
      .then(response=>{
        const [dogDB,dogsApi]=response
      })

      res.send([...dogDB,...dogsApi])
    }
  
  } catch (error) {
    next(error)
  }

})

router.get('/:id',async(req,res,next)=>{
  const {id}= req.params;
  try {
  if(id){
    if(id.includes('-')){
      const dogsDBId= await Dog.findByPk(id,{
        include:{
          model:Temperament,
          attributes:['name'],
          through:{
              attributes:[]
          } 
      }
      })
      res.send(dogsDBId)
    }else{
      const dogsApi= await getAlldogsApi();
      const dogsId= dogsApi.filter(e=>e.id==id);
      console.log(dogsId)
      res.json(dogsId)
    }
  }
  } catch (error) {
    next(error)
  }
})


router.post('/', async(req, res, next)=>{
const {name, heightMin, heightMax, weightMin, weightMax,life_span,temperament}=req.body;

try {
  const dogPost= await Dog.create({
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
    temperament
  })
  let selectTemp= await Temperament.findAll({
    where:{
      name:temperament
    }
  })
  dogPost.addTemperament(selectTemp);
  res.send('Creado con exito')
} catch (error) {
  next(error)
}


})

/* Nombre
Altura (Diferenciar entre altura mínima y máxima)
Peso (Diferenciar entre peso mínimo y máximo)
Años de vida
[ ] Posibilidad de seleccionar/agregar uno o más temperamentos
[ ] Botón/Opción para crear una nueva raza de perro
"weight": {
"imperial": "6 - 13",
"metric": "3 - 6"
},
"height": {
"imperial": "9 - 11.5",
"metric": "23 - 29"
},
"id": 1,
"name": "Affenpinscher",
"bred_for": "Small rodent hunting, lapdog",
"breed_group": "Toy",
"life_span": "10 - 12 years",
"temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
"origin": "Germany, France",
"reference_image_id": "BJa4kxc4X",
"image": {
"id": "BJa4kxc4X",
"width": 1600,
"height": 1199,
"url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
} */




module.exports=router;
/*  const {name}=req.query
try {
  if(!name){
    dogsDB= await Dog.findAll({
        include:{
            model:Temperament,
            attributes:['name'],
            through:{
                attributes:[]
            } 
        }
    })
  
  
    let dogsApi= (await axios(`https://api.thedogapi.com/v1/breeds`))//?api_key=${API_KEY}
    .data.map(e=>({
    image:e.image.url,
    name:e.name,
    temperament:e.temperament,
    weight:e.weight.metric.split('-')
  }));
  
    let totalDogs=[...dogsDB,...dogsApi]
    res.send(totalDogs)
  }else{
      let dogsDB=[];
      dogsDB = await Dog.findAll({
        
      include:{
          model:Temperament,
          attributes:['name'],
          through:{
              attributes:[]
          } 
      },
       where:{
          name:{[Op.iLike]:`%${name}%`}
       },
       
     })
    
    let dogsApi= (await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`))//?api_key=${API_KEY}
    .data
    let reference_image = dogsApi[0].reference_image_id
    let img= (await axios('https://api.thedogapi.com/v1/breeds')).data.filter(e=>e.reference_image_id===reference_image);
    let imagen=img.map(e=>e.image.url)
    console.log(imagen)

    let dogApiMap=dogsApi.map(e=>({
       image:undefined,
       name:e.name,
       temperament:e.temperament,
       weight:e.weight.metric.split('-')
    }));

    dogApiMap.map(e=>e.image= imagen)
   
    let totalDogs= [...dogsDB,...dogApiMap]
    res.send(totalDogs)
  } 
}
  
  catch (error) {
  next(error)
} */