import style from '../styles/Dogs.module.css';
import { useDispatch } from "react-redux";
import { deleteDog, getAllDogs } from "../redux/thunks/dog";
import PropTypes from 'prop-types';

const Dogs = ({ image, name, temperament, weightMin, weightMax, id, createDB }) =>
{
  const dispatch = useDispatch()
  const handleDelete = (event) =>
  {
    event.preventDefault();
    dispatch(deleteDog(id))
    alert('Successfully erased')
    dispatch(getAllDogs())
  }

  return (
    <div className={style.containerCard}>
      <div className={style.name}>
        <h3>{name && name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase())}</h3>
        {
          createDB ? <button className={style.btn} onClick={(e) => handleDelete(e)}>X</button> : <p></p>
        }
      </div>
      <div className={style.imageContain}>
        <img className={style.image} src={image} alt={name} />
      </div>
      <div className={style.footer}>
        <div className={style.footerCard}>
          {
            temperament ? temperament.map(e => (<p className={style.temperament} key={e.name}>{e.name}</p>)) : <h4>Temperament: Empty data</h4>
          }
        </div>
        <div className={style.weightMin}>
          <p>Min weight: {weightMin} max weight: {weightMax}</p>
        </div>
      </div>
    </div>
  );
};

Dogs.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  temperament: PropTypes.array,
  weightMin: PropTypes.string,
  weightMax: PropTypes.string,
  id: PropTypes.string,
  createDB: PropTypes.bool
}
export default Dogs