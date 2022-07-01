import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCreated, filterTemperament, getAllDogs, getAllTemperament, order, orderWeight } from "../action/action";
import { Link } from 'react-router-dom';
import Dogs from "./Dogs";
import Paginado from "./Paginado";
import style from '../styles/Home.module.css'
import SearchBar from "./SearchBar";
import gif from '../image/perros.gif'


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
  
    dispatch(getAllDogs())
    dispatch(getAllTemperament())
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
    dispatch(orderWeight(event.target.value))
    setPage(1)
    setOrdering(`Order ${event.target.value}`)
  }
  

  return( 
  <div className={style.contain} key='contain'>
    {
      !allCharacters?<img src={gif} className={style.gif}  alt='gif'/>:
    <div key= {'searchbar'}className={style.searchbar}>
    <Link key='dogs' className={style.link} to='/dogs'><h3 className={style.created}>Create your dog breed</h3></Link>
    <div key={'search'} className='search'>
      <SearchBar/>
      <div key='btn'className={style.btn}>
      <button key={'reloadClick'}  onClick={reloadClick}>Reload</button>
      </div>
    </div>
    <div key='divContain' className={style.divContainer}>
    <div key={'divs'} className={style.filters}>
      <select key={"temperamnt"}  name="temp" id="temperamnt" onChange={temperamentChange}>
        <option key={'all'} value={'all'}>Temperaments</option>
        {
          allTemperaments?.map(e =>
          {
            return <option key={e.name} value={e.name}>{e.name}</option>
          })
        }

      </select>
    </div>
        <div key='filter' className={style.filters}>
          <label className={style.label}>Created or Existing  </label>
         
          <select  className={style.select} name="created" id="dogCreated" onChange={(e)=>createdtChange(e)}>
            <option key={'allDg'} value={'all'}>All the dogs</option>
            <option key={'db'} value={'db'}>Created in database</option>
            <option key={'api'} value={'api'}>Existing in the API</option>
          </select>
         
        </div>
        <div key='filters'className={style.filters}>
        <label className={style.label}>Order alphabetically  </label>
          <select  className={style.select} name="created" id="dogCreated" onChange={(e)=>orderChange(e)}>
            <option key={'allDogs'}value={'all'}>All the dogs</option>
            <option key={'falling'}value={'falling'}>Z-A</option>
            <option key={'upward'}value={'upward'}>A-Z</option>
          </select>
        </div>
        <div key='filterss'className={style.filters}>
        <label className={style.label}>Sort by weight </label>
          <select  className={style.select} name="sortByWeight" id="byWeight" onChange={(e)=>weightChange(e)}>
            <option key={'all' }value={'all'}>All the dogs</option>
            <option key={'max'}value={'max'}>Biggers</option>
            <option key={'min'}value={'min'}>Smallers</option>
          </select>
        </div>
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
                id={e.id}
              />
            </Link>
          </Fragment>
        )
      })
    }
    </div>
}
  </div>
  )
};


