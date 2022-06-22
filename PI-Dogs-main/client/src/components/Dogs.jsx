import React from "react";
import style from '../styles/Dogs.module.css';



export default function Dogs({image, name, temperament, weightMin, weightMax}){

  return( 
  <div className={style.container}>
    
     <img src={image} alt={name} />
    
  <h3>Raza: {name}</h3>
  <h4>Temperamento: {temperament}</h4>
  <h5>Peso minimo: {weightMin} peso maximo: {weightMax}</h5>
 
  
  </div>
    );
};
/* [ ] Input de búsqueda para encontrar razas de perros por nombre
[ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
Imagen
Nombre
Temperamento
Peso */