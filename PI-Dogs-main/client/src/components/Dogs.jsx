import React from "react";
import style from '../styles/Dogs.module.css';



export default function Dogs({ image, name, temperaments, weightMin, weightMax })
{

  return (
    <div className={style.container}>

      <img src={image} alt={name} />

      <h3>Breed: {name}</h3>
      <h4>Temperament: {temperaments}</h4>
      <h5>Minimum weight: {weightMin} maximum weight: {weightMax}</h5>


    </div>
  );
};
