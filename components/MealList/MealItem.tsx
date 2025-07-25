import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

type MealItemProps = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  onPress: () => void;
};

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}: MealItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.mealItem}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailText}>{duration}m</Text>
          <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    overflow: Platform.select({ ios: "hidden", android: "visible" }),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});
