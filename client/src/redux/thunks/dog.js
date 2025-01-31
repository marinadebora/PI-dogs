import { delete_dog, get_all_dogs, get_dog_id, get_dog_name, post_dog, put_dog, set_errors_dog } from '../slice/dogs'
import { serverApi } from './serverApi'



//--------------------thunks para dogs--------------------//
export const getAllDogs = () =>
  {
    return async (dispatch) =>
    {
   
      try {
        const { data, status } = await serverApi.get(`/dogs`)
        dispatch(get_all_dogs({ data, status }))
      } catch (error) {
        dispatch(set_errors_dog(error))
        console.log(error)
      }
    }
  }

  export const getDogId = (id) =>
    {
      return async (dispatch) =>
      {
     
        try {
          const { data, status } = await serverApi.get(`/dogs/${id}`)
          dispatch(get_dog_id({ data, status }))
        } catch (error) {
          dispatch(set_errors_dog(error))
          console.log(error)
        }
      }
    }

    export const getDogName = (name) =>
      {
        return async (dispatch) =>
        {
       
          try {
            const { data, status } = await serverApi.get(`/dogs?name=${name}`)
            dispatch(get_dog_name({ data, status }))
          } catch (error) {
            dispatch(set_errors_dog(error))
            console.log(error)
          }
        }
      }

      export const postDog = (payload) =>
        {
          return async (dispatch) =>
          {
         
            try {
              const { data, status } = await serverApi.post(`/dogs`,payload)
              dispatch(post_dog({ data, status }))
            } catch (error) {
              dispatch(set_errors_dog(error))
              console.log(error)
            }
          }
        }

        export const putDog = (payload) =>
          {
            return async (dispatch) =>
            {
           
              try {
                const { data, status } = await serverApi.put(`/dogs`,payload)
                dispatch(put_dog({ data, status }))
              } catch (error) {
                dispatch(set_errors_dog(error))
                console.log(error)
              }
            }
          }

          export const deleteDog = (id) =>
            {
              return async (dispatch) =>
              {
             
                try {
                  const { data, status } = await serverApi.delete(`/dogs/${id}`)
                  dispatch(delete_dog({ data, status }))
                } catch (error) {
                  dispatch(set_errors_dog(error))
                  console.log(error)
                }
              }
            }