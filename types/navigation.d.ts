export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

export type MealsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealDetails"
>;
