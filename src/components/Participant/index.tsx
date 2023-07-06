import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Guilherme</Text>

      <TouchableOpacity
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
