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
  const myDetail = useSelector((state) => state.detail);

  useEffect(() =>
  {
    dispatch(dogDetail(id))

  }, [dispatch, id])

  return (
    <div className={style.container}>

      {
        myDetail ?
          <div className={style.personajes} >
            <h1 className={style.name}>{myDetail.name} <Link to='/home'>
              <button className={style.button}>RETURN</button>
            </Link></h1>
            {/*  <Link to={'/update'}><button className={style.button}>UPDATE</button> </Link> */}
            {
              myDetail.image ? <img src={myDetail.image} className={style.img} alt={myDetail.name} />
                : <img src={img} className={style.img} alt='Created Database' />
            }
            <div className={style.contenedorText}>

              <div className={style.text}>
                <h3>Temperament: </h3>
                {myDetail.temperaments ? <p>{getTemperaments(myDetail.temperaments)}</p> : <p>Empty data</p>}
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
              <br />
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


