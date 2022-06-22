import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, getAllTemperament } from "../action/action";
import Dogs from "./Dogs";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
//import style from '../styles/Home.module.css'
import  Loader  from "./Loader";
export default function Home(){
    const dispatch = useDispatch();
    const allTemperaments = useSelector(state => state.temperament)
    const allCharacters=useSelector(state=>state.dogs);

   const [loading, setLoading]= useState(false)

    const [page, setPage] = useState(1);
    const [characterPerPage, setCharacterPerPage]=useState(8);
    const index=page*characterPerPage;
    const endIndex=index -characterPerPage;
    const actualPage=allCharacters?.slice(endIndex,index);
    
    
    
     const paginado=(numPage)=>{
    setPage(numPage)
    }  
    


    useEffect(() => {
        setLoading(true)
        dispatch(getAllDogs())
        dispatch(getAllTemperament())
        setTimeout(function(){setLoading(false)},2000)
    }, [dispatch]);










    return <div>
        
        {
            loading&&<Loader />
        }
        <div>
            <SearchBar />
        </div>
        
     <Paginado 
      characterPerPage={characterPerPage}
       allCharacters= {allCharacters?.length}
       paginado={paginado}
      />  

        {
            actualPage?.map(e =>{
                return (
                    <Fragment>
                    <Dogs
                        image={e.image}
                        name={e.name}
                        temperament={e.temperament}
                        weightMin={e.weightMin}
                        weightMax={e.weightMax}
                    />
                    </Fragment>
                )
            })
        }

    </div>;
};


