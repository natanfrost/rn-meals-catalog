import { StyleSheet, Text } from "react-native";
import Categories from "./screens/Categories";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./screens/Favorites";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#f4511e" },
      headerTintColor: "#fff",
      sceneStyle: { backgroundColor: "#fff" },
      drawerContentStyle: { backgroundColor: "#f7b8a4" },
      drawerInactiveTintColor: "#fff",
      drawerActiveTintColor: "#f4511e",
      drawerActiveBackgroundColor: "#fff",
    }}
  >
    <Drawer.Screen
      name="Categories"
      component={Categories}
      options={{
        title: "All Categories",
        drawerIcon: () => (
          <Ionicons name="restaurant" size={24} color="#f4511e" />
        ),
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={Favorites}
      options={{
        title: "Your Favorites",
        drawerIcon: () => <Ionicons name="star" size={24} color="#f4511e" />,
      }}
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen name="MealDetails" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
