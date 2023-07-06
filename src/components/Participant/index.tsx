import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  removeParticipant: () => void;
}

export function Participant({ name, removeParticipant }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={removeParticipant}
      >
        <Text style={styles.deleteButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
