import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dogName } from '../action/action';
import style from '../styles/SearchBar.module.css'


export default function SearchBar()
{
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleChange(event)
  {
    event.preventDefault()
    setName(event.target.value)
 
  }
  function handleSubmit(event){
    event.preventDefault();
    if(typeof(event)==='string'){

      dispatch(dogName(name))
    }else{
      alert('This field does not accept numbers or symbols')
    }
     }

  return (
    <div className={style.searchbar}>
      <label className={style.label}>Search by name</label>
      <input key='buscar' type='text' placeholder='Search...' onChange={(e)=>handleChange(e)} />
      <button className={style.btn} type='submit' onClick={(e)=>handleSubmit(e)}>SEARCH</button>
      <Link key={'landing'} to='/'className={style.link}><h3 className={style.created}>Homepage</h3></Link>

    </div>
  )
}


























