import React from "react";
import style from '../styles/Paginado.module.css'

export default function Paginado ({characterPerPage, allCharacters, paginado}) {

let page=[];
for (let i = 0; i < Math.ceil(allCharacters/characterPerPage); i++) {
    
    page.push(i+1)
}
    
       
    

  return <div className={style.contain}>
     {page?.map(e=>(
            <button onClick={()=>paginado(e)} className={style.btn} key={e}>{e}</button>

        ))}
  </div>;
};
