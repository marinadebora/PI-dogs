import React from 'react'
import { useState } from 'react';
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
    dispatch(dogName(name))
   
  }

  return (
    <div className={style.searchbar}>
      <label className={style.label}>Search by name</label>
      <input key='buscar' type='text' placeholder='Search...' onChange={(e)=>handleChange(e)} />
      <button className={style.btn} type='submit' onClick={(e)=>handleSubmit(e)}>SEARCH</button>
    </div>
  )
}


























