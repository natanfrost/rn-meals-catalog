import { StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: "Categories",
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              contentStyle: { backgroundColor: "#fdfdfd" },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            options={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetails}
            options={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
