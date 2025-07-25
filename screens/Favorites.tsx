import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { useAppSelector } from "../store/redux/hooks";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);

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
