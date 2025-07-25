import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length > 0 ? (
    <MealList categoryMeals={favorites} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.noDataText}>No favorites found.</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e2e2",
  },
  noDataText: {
    textAlign: "center",
    fontSize: 24,
    color: "#666",
  },
});
