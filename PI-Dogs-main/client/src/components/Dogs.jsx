import React from "react";
import style from '../styles/Dogs.module.css';
import img from '../image/defaultDB.jpg'
import getTemperaments from "../funciones/funTemp";
import { useDispatch } from "react-redux";
import { deleteDogs, getAllDogs } from "../action/action";


export default function Dogs({ image, name, temperaments, weightMin, weightMax, id }){
  const dispatch = useDispatch()

  const handleDelete = (event) =>{
    event.preventDefault();
    dispatch(deleteDogs(id))
    alert('Successfully erased')
    dispatch(getAllDogs())
  }

  return (
    <div className={style.maxContainer}>
      <div className={style.container}>
        {
          id.length > 5 ? <button onClick={(e) => handleDelete(e)}>X</button> : ''
        }

        {
          image ? <img src={image} alt={name} /> : <img src={img} alt={name} />
        }

        <h3>Breed: {name}</h3>

        {
          temperaments ? <h4 >Temperament: {getTemperaments(temperaments)} </h4> : <h4>Temperament: Empty data</h4>
        }

        <h5>Min weight: {weightMin} max weight: {weightMax}</h5>


      </div>
    </div>
  );
};
