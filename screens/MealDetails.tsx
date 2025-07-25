import { useNavigation, useRoute } from "@react-navigation/core";
import { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

const MealDetails = () => {
  const [meal, setMeal] = useState<Meal | null>(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params as { mealId: string };

  useLayoutEffect(() => {
    const mealDetails = MEALS.find((meal) => meal.id === mealId);
    if (mealDetails) {
      setMeal(mealDetails);
      navigation.setOptions({
        title: mealDetails.title,
      });
    }
  }, [mealId]);

  return (
    <View>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal?.title}</Text>
      <Text style={styles.details}>
        {meal?.duration}m | {meal?.complexity.toUpperCase()} |{" "}
        {meal?.affordability.toUpperCase()}
      </Text>
      <Text style={styles.subtitle}>Ingredients</Text>
      <View>
        {meal?.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>
      <Text style={styles.subtitle}>Steps</Text>
      <View>
        {meal?.steps.map((step, index) => (
          <Text key={index} style={styles.step}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  details: {
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 10,
  },
  step: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
});
