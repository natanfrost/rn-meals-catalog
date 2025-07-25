import { createContext, useState } from "react";
import Meal from "../../models/meal";

export const FavoritesContext = createContext({
  favorites: [] as Meal[],
  addFavorite: (favoriteMeal: Meal) => {},
  removeFavorite: (mealId: string) => {},
});

const FavoritesContextProvider = ({ children }: React.PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  const addFavorite = (favoriteMeal: Meal) => {
    setFavorites((currentFavorites) => [...currentFavorites, favoriteMeal]);
  };

  const removeFavorite = (mealId: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((meal) => meal.id !== mealId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
