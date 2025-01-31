import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filter_create, filter_dogs_by_temperament, sort_dogs, sort_weight } from "../redux/slice/dogs";
import { getAllDogs } from "../redux/thunks/dog";
import { getAllTemperaments } from '../redux/thunks/temperament'
import { Link } from 'react-router-dom';
import Dogs from "./Dogs";
import Paginado from "./Paginado";
import style from '../styles/Home.module.css'
import SearchBar from "./SearchBar";
import Image from "../image"

const Home = () =>
{
  const dispatch = useDispatch();
  const { allTemperaments } = useSelector(state => state.temperament)
  const { allDogs } = useSelector(state => state.dogs);
  const [/* ordering */, setOrdering] = useState('')

  //---------PAGINADO---------//
  const [page, setPage] = useState(1);
  const [characterPerPage/* , setCharacterPerPage */] = useState(8);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = allDogs?.slice(endIndex, index);

  const paginado = (numPage) =>
  {
    setPage(numPage)
  }

  useEffect(() =>
  {
    dispatch(getAllDogs())
    dispatch(getAllTemperaments())
  }, [dispatch]);


  const reloadClick = () =>
  {
    dispatch(getAllDogs())
  }

  const temperamentChange = (event) =>
  {
    if (event.target.value === 'all') {
      dispatch(getAllDogs())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
      dispatch(filter_dogs_by_temperament(event.target.value))
      setPage(1)
      setOrdering(`Orner ${event.target.value}`)

    }
  }

  const createdtChange = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'all') {
      dispatch(getAllDogs())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
      dispatch(filter_create(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }
  }
  const orderChange = (event) =>
  {
    event.preventDefault();
    if (event.target.value === 'all') {
      dispatch(getAllDogs())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
      dispatch(sort_dogs(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)

    }
  }

  const weightChange = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'all') {
      dispatch(getAllDogs())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
      dispatch(sort_weight(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }
  }


  return (
    <div className={style.contain} key='contain'>
      <div key={'searchbar'} className={style.searchbar}>
        <Link key='dogs' className={style.link} to='/dogs'><h3>Create your dog breed</h3></Link>
        <div key={'search'} className='search'>
          <SearchBar />
        </div>
        <div key='btn' className={style.btncontain}>
          <button className={style.btn} key={'reloadClick'} onClick={reloadClick}>Reload</button>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div className={style.filterContain}>
        <div className={style.containFilter}>
          <div key={'divs'} className={style.filters}>
            <label className={style.label}>Search by temperament</label>
            <select key={"temperamnt"} className={style.select} name="temp" id="temperamnt" onChange={temperamentChange}>
              <option key={'all'} value={'all'}>Temperaments</option>
              {
                allTemperaments?.map(e =>
                {
                  return <option key={e.name} value={e.name}>{e.name}</option>
                })
              }
            </select>
          </div>

          <div key='filtersdb' className={style.filters}>
            <label className={style.label}>Created or Existing  </label>
            <select className={style.select} name="created" id="dogCreated" onChange={(e) => createdtChange(e)}>
              <option key={'allDg'} value={'all'}>All the dogs</option>
              <option key={'db'} value={'db'}>Created in database</option>
              <option key={'api'} value={'api'}>Existing in the API</option>
            </select>
          </div>

          <div key='filters' className={style.filters}>
            <label className={style.label}>Order alphabetically  </label>
            <select className={style.select} name="created" id="dogCreated" onChange={(e) => orderChange(e)}>
              <option key={'allDogs'} value={'all'}>All the dogs</option>
              <option key={'falling'} value={'falling'}>Z-A</option>
              <option key={'upward'} value={'upward'}>A-Z</option>
            </select>
          </div>
          <div key='filterss' className={style.filters}>
            <label className={style.label}>Sort by weight </label>
            <select className={style.select} name="sortByWeight" id="byWeight" onChange={(e) => weightChange(e)}>
              <option key={'all'} value={'all'}>All the dogs</option>
              <option key={'max'} value={'max'}>Biggers</option>
              <option key={'min'} value={'min'}>Smallers</option>
            </select>
          </div>
        </div>

      </div>
      <Paginado
        characterPerPage={characterPerPage}
        allCharacters={allDogs?.length}
        paginado={paginado}
      />
      {/* ------------------------------------ */}
      {
        !actualPage ?<div className={style.containGif}><img src={Image.gif} className={style.gif} alt='gif' /></div>
        :
        <div className={style.containTotalDog}>
          <div key='divContain' className={style.containDog}>
            {
              actualPage.map(e =>
              {
                return (
                  <div key={e._id}>
                    <Link to={`/home/${e._id}`} >
                      <Dogs
                        image={e.image}
                        name={e.name}
                        temperament={e.temperament}
                        weightMin={e.weightMin}
                        weightMax={e.weightMax}
                        id={e._id}
                        origin={e.origin}
                        createDB={e.createDB}
                      />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        
      }
    </div>
  )
};


export default Home