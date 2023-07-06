import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  function handleAddParticipant() {
    console.log('Adicionou participante');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Quinta, 6 de julho de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Novo do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddParticipant}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}