import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDogName } from '../redux/thunks/dog';
import style from '../styles/SearchBar.module.css'

const SearchBar = () =>
{
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleChange(event)
  {
    event.preventDefault()
    setName(event.target.value)
  }

  function handleSubmit(event)
  {
    event.preventDefault();

    if (!name) {
      return alert('Enter name that does not contain numbers or symbols')
    } else {

      dispatch(getDogName(name))
      setName('')
    }

  }
  return (

    <div className={style.containSerchBar}>
      <Link key={'landing'} to='/' className={style.link}><h3 >Homepage</h3></Link>
      <div className={style.searchbar}>
        <label className={style.label}>Search by name</label>
        <input className={style.input} value={name} key='buscar' type='text' placeholder='Search...' onChange={(e) => handleChange(e)} />
        <button className={style.btn} type='submit' onClick={(e) => handleSubmit(e)}>SEARCH</button>
      </div>
    </div>
  )
}

export default SearchBar