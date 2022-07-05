import React from "react";
import style from '../styles/Loader.module.css'



export default function Loader(){
  return (
    <div className={style.container}>
      <div className={style.loading}>
        <div className={style.ring}></div>
        <span>Loading...</span>
      </div>
    </div>
  );
};
