import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/LandingPage.module.css'


export default function LandingPage(){
    return(
        <div className={style.contain}>
            <Link to='/home' >
                <button className={style.btn}>START</button>
            </Link>
          
        </div>
    )
}