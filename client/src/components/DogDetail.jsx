import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDogId } from '../redux/thunks/dog';
import style from '../styles/DogDetail.module.css'
import { reset_dog } from '../redux/slice/dogs';


const DogDetail = () =>
{
  const dispatch = useDispatch();
  const { id } = useParams();
  const { allDogs } = useSelector((state) => state.dogs);

  useEffect(() =>
  {
    dispatch(reset_dog())
    dispatch(getDogId(id))

  }, [dispatch, id])

  return (
    <div className={style.container}>

      {
        allDogs[0] ?
          <div className={style.personajes} >
            <h1 className={style.name}>{allDogs[0].name} <Link to='/home'>
              <button className={style.button}>RETURN</button>
            </Link></h1>
            {/*  <Link to={'/update'}><button className={style.button}>UPDATE</button> </Link> */}
            <img src={allDogs[0].image} className={style.img} alt={allDogs[0].name} />

            <div className={style.contenedorText}>

              <div className={style.text}>
                <h3>Temperament: </h3>
                {allDogs[0].temperament ? allDogs[0].temperament.map(e => <p key={e.name}>{e.name}</p>) : <p>Empty data</p>}
                <h3> Minimum height: </h3>
                <p>{allDogs[0].heightMin} cm</p>
                <h3>Max height: </h3>
                <p>{allDogs[0].heightMax} cm</p>
                <h3>Minimum weight: </h3>
                <p>{allDogs[0].weightMin} kg</p>
                <h3>Maximum weight: </h3>
                <p>{allDogs[0].weightMax} kg</p>
                <h3>Years of life: </h3>
                {
                  allDogs[0].life_span_Since ? <p>Since: {allDogs[0].life_span_Since}</p>
                    : <p>Since: Empty data </p>
                }
                {
                  allDogs[0].life_span_Until ? <p>Until: {allDogs[0].life_span_Until} approximately</p>
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

export default DogDetail