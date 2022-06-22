import axios from 'axios';


export function getAllDogs(){
    return async function(dispatch){
       try {
        const Dogs= await axios('http://localhost:3001/dogs');
        return dispatch({
            type:'GET_ALL_DOGS',
            payload:Dogs.data
        })
       } catch (error) {
        console.log(error)
       }
    } 
};

export function getAllTemperament(){
    return async function(dispatch){
        try {
           const temperament= await axios('http://localhost:3001/temperament') 
           return dispatch({
            type:'GET_ALL_TEMPERAMENT',
            payload:temperament.data
           })
        } catch (error) {
            console.log(error)
        }
    }
}



export function DogName(payload) {

    return async function(dispatch){
     try {
        const name= await axios(`http://localhost:3001/dogs?name=${payload}`)
        return dispatch({
          type:'DOG_NAME',
          payload:name.data
        })
     } catch (error) {
        console.log(error)
     }
    }
  
  }


 export function DogDetail(id){
    return async function(dispatch){
        try {
            const dogId= await axios(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type:'DOG_DETAIL',
                payload:dogId.data
            })
        } catch (error) {
            console.log(error)
        }
    }
 }

export function createDogs(payload){
    return async function(){
        try {
           const dogsCreate= await axios.post(`http://localhost:3001/dogs`,payload) 
           return dogsCreate
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteDogs(id){
    return async function(dispatch){
        try {
           const dogsDelete= await axios.delete(`http://localhost:3001/dogs/${id}`) 
           return dispatch({
            type:'DOG_DELETE',
            payload:dogsDelete.data
           }) 
        } catch (error) {
            console.log(error)
        }
    }
}

export function updateDog(id){
    return async function(dispatch){
        try {
          const dogsUpdate= await axios.put(`http://localhost:3001/dogs/${id}`) 
          return dispatch({
            type:'DOG_UPDATE',
            payload:dogsUpdate.data
          }) 
        } catch (error) {
            
        }
    }
}