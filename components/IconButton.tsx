import { Pressable, TouchableOpacity } from "react-native";
import type { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type IconButtonProps = {
  icon: ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
  color?: string;
};

const IconButton = ({ icon, onPress, color }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ height: 24 }}>
      <Ionicons name={icon} size={24} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
