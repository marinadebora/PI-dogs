import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DogName } from '../action/action';
export default function SearchBar(){
  const dispatch=useDispatch();
  const [name, setName] = useState('');

  function handleChange(event){
    event.preventDefault()
    setName(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault();
    dispatch(DogName(name))
  }

  return (
    <div>
      <input key='buscar' type='text' placeholder='Buscar...' onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>Buscar</button>
    </div>
  )
}


























