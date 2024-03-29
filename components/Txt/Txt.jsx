import { Text } from "react-native";
import { s } from "./Txt.style.jsx";

export default function Txt({ children, style }) {
  return <Text style={[s.text, style]}>{children}</Text>;
}
