import axios from 'axios';


export function getAllDogs(){
    return async function(dispatch){
       try {
        const Dogs= await axios('https://pi-dogs-debora.herokuapp.com/dogs');
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
           const temperament= await axios('https://pi-dogs-debora.herokuapp.com/temperament') 
           return dispatch({
            type:'GET_ALL_TEMPERAMENT',
            payload:temperament.data
           })
        } catch (error) {
            console.log(error)
        }
    }
} 



export function dogName(payload){

    return async function(dispatch){
     try {
        const name= await axios(`https://pi-dogs-debora.herokuapp.com/dogs?name=${payload}`)
        return dispatch({
          type:'DOG_NAME',
          payload:name.data
        })
     } catch (error) {
        console.log(error)
     }
    }
  
  }

//-------fetch-------//
/* 
 export function dogDetail(id){
    return async function(dispatch){
       return(
        fetch(`/dogs/${id}`)
        .then(response=>response.json())
        .then(data=> dispatch({
            type:'DOG_DETAIL',
            payload:data
        }))
        .catch (error=>console.log(error)) 
            
       )}
          
               
      
        }  */
        export function dogDetail(id)
        {
            return async function (dispatch)
            {
                try {
                   const dogDetail =await axios(`https://pi-dogs-debora.herokuapp.com/dogs/${id}`)
                  
                    return dispatch({
                        type: 'DOG_DETAIL',
                        payload: dogDetail.data
                    })
                } catch (error) {
                    console.log(error)
                }
        
            }
        
        }


export function createDogs(payload){
    return async function(){
        try {
           const dogsCreate= await axios.post(`https://pi-dogs-debora.herokuapp.com/dogs`,payload) 
           return dogsCreate
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteDogs(id){
    return async function(dispatch){
        try {
           const dogsDelete= await axios.delete(`https://pi-dogs-debora.herokuapp.com/dogs/${id}`) 
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
          const dogsUpdate= await axios.put(`https://pi-dogs-debora.herokuapp.com/dogs/${id}`) 
          return dispatch({
            type:'DOG_UPDATE',
            payload:dogsUpdate.data
          }) 
        } catch (error) {
            
        }
    }
}
//-------------filters-------------//


export function filterTemperament(payload){
    return {
        type:'FILTER_TEMPERAMENT',
        payload,
    }
}
export function filterCreated(payload){
    return {
        type:'FILTER_CREATED',
        payload,
    }
}


//-------------order-------------//

export function order(payload){
    return {
        type:'ORDER',
        payload,
    }
}

export function orderWeight(payload){
    return {
        type:'ORDER_WEIGHT',
        payload,
    }
}
