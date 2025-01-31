import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { postDog } from '../redux/thunks/dog.js';
import { getAllTemperaments } from '../redux/thunks/temperament.js';
import style from '../styles/DogCreate.module.css'
import image from '../image'
import validate from '../funciones/funValidate.js'




const DogCreate = () =>
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
    temperament: []
  });

  const { allTemperaments } = useSelector(state => state.temperament)
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  useEffect(() =>
  {
    dispatch(getAllTemperaments())
  }, [dispatch])

  const handleChange = (event) =>
  {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...form,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    if (!form.name || !form.heightMin || !form.heightMax || !form.weightMin || !form.weightMax || !form.temperament) {
      alert('Complete all fields')
    } else {
      dispatch(postDog(form))
      alert('Dog breed successfully created!!')
      setForm({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        life_span_Since: '',
        life_span_Until: '',
        temperament: []
      })
      navigate('/home')
    }

  }
  const handleTemperament = (event) =>
  {
    event.preventDefault();
    setForm({
      ...form,
      temperament: [...form.temperament, event.target.value]
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
      temperament: form.temperament.filter(e => e !== event)
    })
  }

  return (
    <div className={style.containerTotal}>

      <div className={style.title}>
        <div className={style.containLink}><Link to='/home'> <img className={style.img} src={image.return} alt='hueso' /></Link></div>
        <div className={style.containH1} ><h1>Create your dog breed</h1></div>
      </div>

      <div className={style.containerForm}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.container}>
            <div className={style.group}>
              <label className={style.label}>Name</label>
              <input
                type='text'
                onChange={(e) => handleChange(e)}
                value={form.name}
                name='name'
                className={style.input}
              />
              {errors.name && (<p className={style.p}>{errors.name}</p>)}
            </div>

            <div className={style.group}>
              <label className={style.label}>Minimum height</label>
              <input
                type='text'
                onChange={(e) => handleChange(e)}
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
              <select className={style.select}
                onChange={(e) => handleTemperament(e)}>
                <option>Select Temperament</option>
                {allTemperaments?.map((e) => (

                  <option value={e.name} name={e.name} key={e.name}>{e.name}</option>
                ))
                }
              </select>
            </div>

            <div className={style.group}>
              <div className={style.temp}>
                {form.temperament.map((e, i) =>
                  <h5 key={i}>{e}
                    <button className={style.btn} onClick={() => handleDelete(e)} >X</button>
                  </h5>

                )}
                {errors.temperament && <p className={style.p}>{errors.temperament}</p>}
              </div>
            </div>

          </div>

          <div className={style.group}>
            <button type="submit" className={style.button}>Create</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}
export default DogCreate