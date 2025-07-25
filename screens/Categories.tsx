import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Categories"
>;

type CategoriesProps = {
  navigation: CategoriesScreenNavigationProp;
};

const Categories = ({ navigation }: CategoriesProps) => {
  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate("MealsOverview", { categoryId });
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          onPress={() => handleCategoryPress(item.id)}
        />
      )}
    />
  );
};

export default Categories;
