import { Text, View, StyleSheet, Pressable, Platform } from "react-native";

interface CategoryGridTileProps {
  title: string;
  color: string;
  onPress: () => void;
}

const CategoryGridTile = ({ title, color, onPress }: CategoryGridTileProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.button] : [styles.button]
        }
        onPress={onPress}
      >
        <View style={[{ backgroundColor: color }, styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: Platform.select({ ios: "hidden", android: "visible" }),
  },
  button: {
    flex: 1,
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    padding: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  pressed: {
    opacity: 0.5,
  },
});
