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
  function handleSubmit(event)
  {
    event.preventDefault();
    dispatch(dogName(name))
  }

  return (
    <div>
      <input key='buscar' type='text' placeholder='Search...' onChange={handleChange} />
      <button className={style.btn} type='submit' onClick={handleSubmit}>SEARCH</button>
    </div>
  )
}


























