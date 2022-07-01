import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { createDogs, getAllTemperament } from '../action/action';
import style from '../styles/DogCreate.module.css'

const validate = (form) =>
{
  let errors = {};
  if (!form.name) {
    errors.name = 'Name is required'
  }
  if (!form.heightMin || parseFloat(form.heightMin) < 10) {
    errors.heightMin = 'Min height required - must not be less than 10cm'
  }
  if (!form.heightMax || parseFloat(form.heightMax) <= parseFloat(form.heightMin) || parseFloat(form.heightMax) > 90) {
    errors.heightMax = 'Max height is required, must be greater than minimum height and less than 90 cm'
  }
  if (!form.weightMin || parseFloat(form.weightMin) < 1) {
    errors.weightMin = 'Min weight required - must not be less than 1kg'
  }
  if (!form.weightMax || parseFloat(form.weightMax) <= parseFloat(form.weightMin) || parseFloat(form.weightMax) > 90) {
    errors.weightMax = 'Max weight is required, must be greater than the minimum weight and less than 90 kg'
  }
  if (!form.life_span_Since || parseFloat(form.life_span_Since) < 5) {
    errors.life_span_Since = 'Years of life should be between 5 and 25 years'
  }
  if (!form.life_span_Until || parseFloat(form.life_span_Until) <= parseFloat(form.life_span_Since) || parseFloat(form.life_span_Until) < 5) {
    errors.life_span_Until = 'The years of life must be greater than the minimum value and less than 25 years'
  }
  if (!form.temperaments) {
    errors.temperaments = 'Temperament is required'
  }
  return errors
}




export default function DogCreate()
{
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    life_span_Since: '',
    life_span_Until: '',
    temperaments: []
  });

  const allTemperament = useSelector(state => state.temperament)
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

useEffect(()=>{
  dispatch(getAllTemperament())
})
  const handleChange = (event) =>{
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...form,
      [event.target.name]: event.target.value
    }))  //valida cada una de las variables del formulario
  }

  const handleSubmit = (event) =>
  {
    
    event.preventDefault();
    if (!form.name || !form.heightMin || !form.heightMax || !form.weightMin || !form.weightMax || !form.temperaments) {
      alert('Campo requerido')
    } else {
      dispatch(createDogs(form))
      alert('Dog breed successfully created!!')
      setForm({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        life_span_Since: '',
        life_span_Until: '',
        temperaments: []
      })
      navigate('/home')
    }

  }
  const handleTemperament = (event) =>
  {
    event.preventDefault();
    setForm({
      ...form,
      temperaments: [...form.temperaments, event.target.value]
    })
    setErrors(validate({
      ...form,
      [event.target.name]: event.target.value
    }))
  }
  const handleDelete = (event) =>
  {
    setForm({
      ...form,
      temperaments: form.temperaments.filter(e => e !== event)
    })
  }

  return (
    <div>
      <div className={style.btnCreated}>
        <Link to='/home'> <button>RETURN</button></Link>
        <h1 className={style.title}>Create your dog breed</h1>
      </div>

      <div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.container}>
            <div className={style.group}>
          <label className={style.label}>Name</label>
          <input
            type='text'
            onChange={(e) =>handleChange(e)}
            value={form.name}
            name='name'
           className={style.input} 
          />
          {errors.name &&(<p className={style.p}>{errors.name}</p>)}
          </div>
          <div className={style.group}>
          <label className={style.label}>Minimum height</label>
          <input
            type='text'
            onChange={(e) =>handleChange(e)}
            value={form.heightMin}
            name='heightMin'
           className={style.input} 
          />
          {errors.heightMin && <p className={style.p}>{errors.heightMin}</p>}
          </div>
          <div className={style.group}>
          <label className={style.label}>Max height</label>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            value={form.heightMax}
            name='heightMax'
           className={style.input} 
          />
           {errors.heightMax && <p className={style.p}>{errors.heightMax}</p>}
           </div>
           <div className={style.group}>
          <label className={style.label}>Min weight</label>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            value={form.weightMin}
            name='weightMin'
           className={style.input} 
          />
        {errors.weightMin && <p className={style.p}>{errors.weightMin}</p>}
        </div> 
        <div className={style.group}>
          <label className={style.label}>Max weight</label>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            value={form.weightMax}
            name='weightMax'
          className={style.input} 
          />
        {errors.weightMax && <p className={style.p}>{errors.weightMax}</p>} 
        </div>
        <div className={style.group}>
          <label className={style.label}>Years of life</label>
          <label className={style.label}>Since</label>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            value={form.life_span_Since}
            name='life_span_Since'
           className={style.input} 
          />
          {errors.life_span_Since && <p className={style.p}>{errors.life_span_Since}</p>}
          </div>
          <div className={style.group}>
          <label className={style.label}>Until</label>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            value={form.life_span_Until}
            name='life_span_Until'
          className={style.input} 
          />
          {errors.life_span_Until && <p className={style.p}>{errors.life_span_Until}</p>}
          </div>
          <div className={style.group}>
          <label className={style.label}>Temperament  </label>
          <select
            onChange={(e) => handleTemperament(e)}
          >
            {allTemperament?.map((e) => (
              <option value={e.name} name={e.name} key={e.name}>{e.name}</option>
            ))
            }
          </select>
          </div>
          {form.temperaments.map(e =>
            <div className={style.temp}>
              <h5>{e}
              <button className={style.btn} onClick={()=>handleDelete(e)} >X</button>
              </h5>
            </div>
          )}
          {errors.temperaments && <p className={style.p}>{errors.temperament}</p>}

          <button type="submit" className={style.button}>Create</button>
        </div>
        </form>
      </div>




    </div>
  )
}
