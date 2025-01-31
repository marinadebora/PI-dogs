import style from '../styles/Loader.module.css'

const Loader = () =>
{
  return (
    <div className={style.container}>
      <div className={style.loading}>
        <div className={style.ring}></div>
        <span>Loading...</span>
      </div>
    </div>
  );
};
export default Loader