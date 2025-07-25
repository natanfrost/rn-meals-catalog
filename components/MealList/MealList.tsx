import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";
import Category from "../../models/category";
import Meal from "../../models/meal";
import { useNavigation } from "@react-navigation/native";
import { MealsScreenNavigationProp } from "../../types/navigation";

type MealListProps = {
  categoryMeals: Meal[];
};

const MealList = ({ categoryMeals }: MealListProps) => {
  const navigation = useNavigation<MealsScreenNavigationProp>();

  const handleMealSelected = (mealId: string) => {
    navigation.navigate("MealDetails", { mealId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={categoryMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            onPress={() => handleMealSelected(item.id)}
          />
        )}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e2e2",
  },
  list: {
    width: "100%",
    margin: 8,
    padding: 8,
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
