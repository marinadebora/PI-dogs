import style from '../styles/Paginado.module.css'
import PropTypes from 'prop-types';

const Paginado = ({ characterPerPage, allCharacters, paginado }) =>
{
  let page = [];

  for (let i = 0; i < Math.ceil(allCharacters / characterPerPage); i++) {
    page.push(i + 1)
  }

  return <div className={style.contain}>
    {page?.map(e => (
      <button onClick={() => paginado(e)} key={e}>{e}</button>

    ))}
  </div>;
};

Paginado.propTypes ={
  characterPerPage:PropTypes.number,
  allCharacters: PropTypes.number,
  paginado:PropTypes.func, 
 
}
export default Paginado