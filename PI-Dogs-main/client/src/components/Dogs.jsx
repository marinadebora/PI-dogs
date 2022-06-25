import React from "react";
import style from '../styles/Dogs.module.css';
import img from '../image/defaultDB.jpg'
import getTemperaments from "../funciones/funTemp";

export default function Dogs({ image, name, temperaments, weightMin, weightMax })
{
 
  return (
    <div className={style.container}>
      {
        image?<img src={image} alt={name} />:<img src={img} alt={name} />
      }
      

      <h3>Breed: {name}</h3>
     
   
      
       <h4 >Temperament: {getTemperaments(temperaments)} </h4>
    
      <h5>Min weight: {weightMin} max weight: {weightMax}</h5>


    </div>
  );
};
