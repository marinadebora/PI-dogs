const initialState = {
    dogs: [],
    allDogs:[],
    temperament: [],
    detail: []
}

function rootReducer(state = initialState, action)
{
    switch (action.type) {
        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs:action.payload
            }
        case 'GET_ALL_TEMPERAMENT':
            return {
                ...state,
                temperament: action.payload
            }
        case 'DOG_NAME':
            
            return {
                ...state,
                dogs: action.payload
            }
        case 'DOG_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'CREATE_DOGS':
            return {
                ...state
            }  
        case 'DOG_DELETE':
               
            return {
                    ...state,
                  
                }
                
         case 'DOG_UPDATE':
            return {
                    ...state,
                    dogs: action.payload
                } 

        case 'FILTER_TEMPERAMENT':
            const allDogsTemp= state.allDogs;
            const filteratemp= allDogsTemp.filter(e=>{
              
                if(typeof(e.temperaments)==='string')return e.temperaments.includes(action.payload)
                if(Array.isArray(e.temperaments)){
                    let filterName= e.temperaments.map(e=> e.name)
                    return filterName.includes(action.payload)
                }
               
               
               
                return 'no se encontro la raza'
            })

            return{
                ...state,
                dogs: action.payload ==='all'? allDogsTemp:filteratemp
            }        
        case 'FILTER_CREATED':
          
            const filtercreated= action.payload ==='db'? state.allDogs.filter(e=> e.createDB) : state.allDogs.filter(e=> !e.createDB)  
            return {
                ...state,
                dogs:action.payload ==='all'? state.allDogs: filtercreated
            }      
        case 'ORDER':
            const filterOrder=state.allDogs;
            const order=action.payload ==='all'? state.dogs: action.payload === 'falling' ? filterOrder.sort((a, b)=>{
                if(a.name > b.name){
                    return -1
                }
                if(b.name > a.name){
                    return 1
                }
                return 0
            }):filterOrder.sort((a, b)=>{
                if(a.name > b.name){
                    return 1
                }
                if(b.name > a.name){
                    return -1
                }
                return 0
            })
            return{
                ...state,
                dogs:order
            }
        case 'ORDER_WEIGHT':
        
           
            const weightOrder= action.payload === 'min' ? state.allDogs.sort(function(a, b){
              return parseInt(a.weightMin)- parseInt(b.weightMin)

            })
            : action.payload === 'max' ?
            state.allDogs.sort(function(a, b){

                return parseInt(b.weightMax) - parseInt(a.weightMax)
               

            })
            : state.dogs
            return{
                ...state,
                dogs:weightOrder
            }


        default:
            return {
                state
            }
    }
}



export default rootReducer;