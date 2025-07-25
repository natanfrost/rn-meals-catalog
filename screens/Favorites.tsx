import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return <MealList categoryMeals={favorites} />;
};

export default Favorites;
