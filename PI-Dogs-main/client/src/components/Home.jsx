import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCreated, filterTemperament, getAllDogs, getAllTemperament, order } from "../action/action";
import { Link } from 'react-router-dom';
import Dogs from "./Dogs";
import Paginado from "./Paginado";
import style from '../styles/Home.module.css'
import Loader from "./Loader";
import SearchBar from "./SearchBar";



export default function Home()
{
  const dispatch = useDispatch();
  const allTemperaments = useSelector(state => state.temperament)
  const allCharacters = useSelector(state => state.dogs);

  const [loading, setLoading] = useState(false)
  const [ordering,setOrdering]= useState('')
  const [page, setPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(8);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = allCharacters?.slice(endIndex, index);



  const paginado = (numPage) =>
  {
    setPage(numPage)
  }



  useEffect(() =>
  {
    setLoading(true)
    dispatch(getAllDogs())
    dispatch(getAllTemperament())
    setTimeout(function () { setLoading(false) }, 2000)
  }, [dispatch]);


  const reloadClick= ()=>{
    dispatch(getAllDogs())
  }

  const temperamentChange = (event) =>{
   
    dispatch(filterTemperament(event.target.value))
    setPage(1)
    setOrdering(`Orner ${event.target.value}`)
  }
  const createdtChange = (event) =>{
    event.preventDefault()
    dispatch(filterCreated(event.target.value))
    setPage(1)
    setOrdering(`Order ${event.target.value}`)
  }

  const orderChange = (event) =>{
    event.preventDefault()
    dispatch(order(event.target.value))
    setPage(1)
    setOrdering(`Order ${event.target.value}`)
  }

  const weightChange = (event) =>{
    event.preventDefault()
    dispatch(order(event.target.value))
    setPage(1)
    setOrdering(`Order ${event.target.value}`)
  }
  

  return( 
  <div className={style.contain} id='contain'>
    {
      loading && <Loader />
    }
    <Link to='/dogs'><h3>Create your dog breed</h3></Link>
    <div id='search'>
      <SearchBar/>
      <button onClick={reloadClick}>Reload</button>
    </div>
    <div>
      <select name="temp" id="temperamnt" onChange={temperamentChange}>
        <option value={'all'}>Temperaments</option>
        {
          allTemperaments?.map(e =>
          {
            return <option value={e.name}>{e.name}</option>
          })
        }

      </select>
    </div>
        <div>
          <label htmlFor="creayed">Created or Existing  </label>
          <select name="created" id="dogCreated" onChange={createdtChange}>
            <option value={'all'}>All the dogs</option>
            <option value={'db'}>Created in database</option>
            <option value={'api'}>Existing in the API</option>
          </select>
        </div>
        <div>
        <label htmlFor="order">Order alphabetically  </label>
          <select name="created" id="dogCreated" onChange={orderChange}>
            <option value={'all'}>All the dogs</option>
            <option value={'upward'}>A-Z</option>
            <option value={'falling'}>Z-A</option>
          </select>
        </div>
        <div>
        <label htmlFor="sort">Sort by weight </label>
          <select name="sortByWeight" id="byWeight" onChange={weightChange}>
            <option value={'all'}>All the dogs</option>
            <option value={'min'}>Smallers</option>
            <option value={'max'}>Biggers</option>
          </select>
        </div>
    <Paginado
      characterPerPage={characterPerPage}
      allCharacters={allCharacters?.length}
      paginado={paginado}
    />

    {
      actualPage?.map(e =>
      {
        return (
          <Fragment>
            <Link to={`/home/${e.id}`} >
              <Dogs
                image={e.image}
                name={e.name}
                temperaments={e.temperaments}
                weightMin={e.weightMin}
                weightMax={e.weightMax}
              />
            </Link>
          </Fragment>
        )
      })
    }

  </div>
  )
};


