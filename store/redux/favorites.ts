import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Meal from "../../models/meal";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [] as Meal[],
  },
  reducers: {
    addFavorite(state, action: PayloadAction<Meal>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<{ id: string }>) {
      state.favorites = state.favorites.filter(
        (meal) => meal.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
