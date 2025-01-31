import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from 'axios';

const initialState = {

  allDogs: [],
  dogsFilter: [],
  data: "",
  status: "",
  errors: ""
}

export const dog_slice = createSlice({
  name: 'dog_slice',
  initialState,
  reducers: {
    get_all_dogs: (state, action) =>
    {
      state.allDogs = action.payload.data,
        state.dogsFilter = action.payload.data,
        state.status = action.payload.status
    },
    get_dog_id: (state, action) =>
    {
      state.allDogs = [action.payload.data],
        state.status = action.payload.status
    },
    get_dog_name: (state, action) =>
    {
      state.allDogs = [action.payload.data],
      state.status = action.payload.status
    },
    post_dog: (state, action) =>
    {
      state.allDogs = [action.payload.data],
        state.status = action.payload.status

    },
    put_dog: (state, action) =>
    {
      state.data = action.payload.data,
        state.status = action.payload.status
    },
    delete_dog: (state, action) =>
    {
      state.data = action.payload.data,
        state.status = action.payload.status
    },

    filter_dogs_by_temperament: (state, action) =>
    {
      const filteratemp = state.allDogs.filter(dog =>
        dog.temperament.some(temp => temp.name === action.payload)
      );
      state.allDogs = action.payload === 'all' ? state.allDogs : filteratemp
    },
    filter_create: (state, action) =>
    {
      const createInDB = action.payload === 'db' ? state.dogsFilter.filter(e => e.createDB === true) :
        action.payload === 'api' && state.dogsFilter.filter(e => e.createDB === false);
      state.allDogs = action.payload === 'all' ? state.allDogs : createInDB
    },
    sort_dogs: (state, action) =>
    {
      const sortDogs = action.payload === 'falling' ? state.dogsFilter.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0) :
        state.dogsFilter.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
      state.allDogs = sortDogs
    },
    sort_weight: (state, action) =>
    {
      const sortDogs = action.payload === 'min' ? state.dogsFilter.sort((a, b) => (a.weightMax ? parseInt(a.weightMax, 10) : 0) - (b.weightMax ? parseInt(b.weightMax, 10) : 0)) :
        action.payload === 'max' ? state.dogsFilter.sort((a, b) => (b.weightMax ? parseInt(b.weightMax, 10) : 0) - (a.weightMax ? parseInt(a.weightMax, 10) : 0)) : state.allDogs;
      state.allDogs = sortDogs
    },
    set_errors_dog: (state, action) =>
    {
      if (action.payload instanceof AxiosError) {
        state.errors = action.payload
      } else {
        state.errors = 'Ops... algo fallo'
      }
    },
    reset_dog: state =>
    {
      state.allDogs = ""
      state.status = "",
        state.errors = ""
    }

  }
});
export const { get_all_dogs, get_dog_id, get_dog_name, post_dog, put_dog, delete_dog, filter_dogs_by_temperament, filter_create, sort_dogs, sort_weight, set_errors_dog, reset_dog } = dog_slice.actions
export default dog_slice.reducer