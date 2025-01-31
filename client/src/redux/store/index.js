import { configureStore } from "@reduxjs/toolkit";
import dogs from "../slice/dogs";
import temperament from "../slice/temperament";

export const store = configureStore({
  reducer: {
    dogs,
    temperament
  }
})