import { get_all_temperament, set_errors_temperament } from '../slice/temperament'
import { serverApi } from './serverApi'


//--------------------thunk para temperaments--------------------//
export const getAllTemperaments = () =>
  {
    return async (dispatch) =>
    {
   
      try {
        const { data, status } = await serverApi.get(`/temperament`)
        dispatch(get_all_temperament({ data, status }))
      } catch (error) {
        dispatch(set_errors_temperament(error))
        console.log(error)
      }
    }
  }