//require('dotenv').config();
const axios =require ('axios');
//const {API_KEY}=process.env;



async function getAlldogsApi(name){
    
    try {
        if(!name){
            
    let dogsApi= (await axios(`https://api.thedogapi.com/v1/breeds`))//?api_key=${API_KEY}
    .data.map(e=>({
    id:e.id,
    name:e.name,
    image:e.image.url,
    temperament:e.temperament,
    weightMin:e.weight.metric.split('-')[0],
    weightMax:e.weight.metric.split('-')[1],
  }));
  return(dogsApi)
  }else{
    let dogsApi= (await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`))//?api_key=${API_KEY}
    .data
    let reference_image = dogsApi[0].reference_image_id
    let img= (await axios('https://api.thedogapi.com/v1/breeds')).data.filter(e=>e.reference_image_id===reference_image);
    let imagen=img.map(e=>e.image.url)
    console.log(imagen)

    let dogApiMap=dogsApi.map(e=>({
       id:e.id,
       name:e.name,
       image:undefined,
       temperament:e.temperament,
       weightMin:e.weight.metric.split('-')[0],
       weightMax:e.weight.metric.split('-')[1],
    }));
    dogApiMap.map(e=>e.image= imagen)
    return(dogApiMap)
  }
    } catch (error) {
        console.log(error)
    }
}

module.exports=getAlldogsApi;