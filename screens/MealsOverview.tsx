import { useNavigation, useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { MealsScreenNavigationProp } from "../types/navigation";
import MealList from "../components/MealList/MealList";

const MealsOverview = () => {
  const route = useRoute();
  const navigation = useNavigation<MealsScreenNavigationProp>();
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

  return <MealList categoryMeals={categoryMeals} />;
};

export default MealsOverview;
