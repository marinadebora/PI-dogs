import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/LandingPage.module.css'
import img from '../image/hueso.png'

export default function LandingPage(){
    return(
        <div className={style.contain}>
            <Link to='/home' >
                <img src={img} className={style.btn} alt='hueso'/>
            </Link>
          
        </div>
    )
}