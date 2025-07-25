import { useNavigation, useRoute } from "@react-navigation/native";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverview = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId } = route.params as { categoryId: string };

  const categoryMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

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
            onPress={() => console.log(`Selected meal: ${item.title}`)}
          />
        )}
      />
    </View>
  );
};

export default MealsOverview;

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
