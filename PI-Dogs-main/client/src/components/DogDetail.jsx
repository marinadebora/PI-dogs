import React from 'react'
import { useEffect} from "react";
import { useDispatch,  useSelector } from 'react-redux';
import { Link , useParams} from 'react-router-dom';
import { dogDetail } from '../action/action';
import style from '../styles/DogDetail.module.css'

export default function DogDetail() {
  const dispatch=useDispatch();
  const {id}= useParams();



useEffect(()=>{
  dispatch(dogDetail(id))
},[dispatch,id])

const myDetail= useSelector((state)=>state.detail);





  return (
    <div className={style.container}>
      <div className={style.detail}>
      {
        myDetail?
        <div>
       <h1>{myDetail.name}</h1>
     
       
        <img src={myDetail.image} className={style.img} alt={myDetail.name} />
       
      
      <Link to='/home'>
            <button>RETURN</button>
          </Link>
      
          <h3>Temperament: </h3>
          <p>{myDetail.temperaments}</p>
         <h3> Minimum height: </h3>
         <p>{myDetail.heightMin}</p>
         <h3>Max height: </h3>
         <p>{myDetail.heightMax}</p>
         <h3>Minimum weight: </h3>
         <p>{myDetail.weightMin}</p>
         <h3>Maximum weight: </h3>
         <p>{myDetail.weightMax}</p>
         <h3>Years of life: </h3>
         <p>Since: {myDetail.life_span_Since}</p>
         <p>Until: {myDetail.life_span_Until} approximately</p>
        </div>
        :
        <div className="loading">
                        <h1><strong>Loading...</strong></h1>
                    </div>
      }
      </div>
    </div>
  )
}


/* 
Ruta de detalle de raza de perro: debe contener

[ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
[ ] Altura
[ ] Peso
[ ] Años de vida  life_span_Desde



import React from 'react'

import {getVideogameDetail} from '../action/index';
import style from '../styles/videogameDetail.module.css'

export default function VideogamesDetail (){
  const dispatch= useDispatch();
  const {id}= useParams()

  const mydetail= useSelector((state)=>state.detail)
  console.log(mydetail)

 useEffect(()=>{
  dispatch(getVideogameDetail(id))
 },[dispatch, id])



  return( 
    
     
      <div className={style.container}>
      
        
        <div>
       
            <div>
            <h1>{mydetail.name}</h1>
            </div>
            <div>
            <img src={mydetail.img}  className={style.img} alt=''/>
            </div>
            <Link to='/home'>
            <button>VOLVER</button>
          </Link>
          <div className={style.detail}>
          <h3>Descripcion del juego: </h3>
          
            <p>{mydetail.description}</p>
            
          {mydetail.genres?.map((e)=><p>Genero: {e.name}</p>)}
          
          <h3>fecha de creacion:  </h3>
            <p>{mydetail.Release_date}</p>
            
            <h3>Raiting: </h3>
            <p>{mydetail.rating}</p>
            
            <h3>Plataformas disponibles: </h3>
            <p>{mydetail.platform + '  '}</p>
            </div>
          </div>
     
          
    </div>
   
    )
  
}  */