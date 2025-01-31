import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from 'axios';

const initialState = {
  allTemperaments: [],
  errors: ""
}
export const temperament_slice = createSlice({
  name: 'temperament_slice',
  initialState,
  reducers: {
    get_all_temperament: (state, action) =>
    {
      state.allTemperaments = action.payload.data
    },
    set_errors_temperament: (state, action) =>
    {
      if (action.payload instanceof AxiosError) {
        state.errors = action.payload
      } else {
        state.errors = 'Ops... algo fallo'
      }
    },
  }
})
export const { get_all_temperament, set_errors_temperament } = temperament_slice.actions;
export default temperament_slice.reducer