import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { dogDetail } from '../action/action';
import style from '../styles/DogDetail.module.css'
import img from '../image/defaultDB.jpg'
import getTemperaments from "../funciones/funTemp";


export default function DogDetail()
{
  const dispatch = useDispatch();
  const { id } = useParams();
  


  useEffect(() =>
  {
    dispatch(dogDetail(id))
   
  }, [dispatch, id])

  const myDetail = useSelector((state) => state.detail);


  return (
    <div className={style.container}>
      
        {
          myDetail ?
          <div className={style.personajes} >
              {
                myDetail.image ? <img src={myDetail.image} className={style.img} alt={myDetail.name} />
                  : <img src={img} className={style.img} alt='Created Database' />
              }
              <div className={style.contenedorText}>
              <h1 className={style.name}>{myDetail.name}</h1>
             


             
          <div className={style.text}>
              <h3>Temperament: </h3>
              {myDetail.temperaments? <p>{getTemperaments(myDetail.temperaments)}</p>:<p>Empty data</p>}
              

              <h3> Minimum height: </h3>
              <p>{myDetail.heightMin} cm</p>
              <h3>Max height: </h3>
              <p>{myDetail.heightMax} cm</p>
              <h3>Minimum weight: </h3>
              <p>{myDetail.weightMin} kg</p>
              <h3>Maximum weight: </h3>
              <p>{myDetail.weightMax} kg</p>
              <h3>Years of life: </h3>
              {
                myDetail.life_span_Since ? <p>Since: {myDetail.life_span_Since}</p>
                  : <p>Since: Empty data </p>
              }
              {
                myDetail.life_span_Until ? <p>Until: {myDetail.life_span_Until} approximately</p>
                  : <p>Until: Empty data </p>

              }
          </div>
          <br/>
           <Link to='/home'>
                <button>RETURN</button>
              </Link>
          </div>
          
            </div>
            :
            <div className="loading">
              <h1><strong>Loading...</strong></h1>
            </div>
        }
     
    </div>
  )
}


