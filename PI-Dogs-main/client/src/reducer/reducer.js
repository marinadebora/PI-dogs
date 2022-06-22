const initialState = {
    dogs: [],
    allDogs:[],
    temperament: [],
    tetail: []
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
        case 'CREATE_DOG':
            return {
                ...state
            }  
        case 'DOG_DELETE':
                const filterDog= state.AllDogs.filter(e=> e!== action.payload)
            return {
                    ...state,
                    dogs: filterDog
                }
         case 'DOG_UPDATE':
            return {
                    ...state,
                    dogs: action.payload
                }    
        default:
            return {
                state
            }
    }
}



export default rootReducer;