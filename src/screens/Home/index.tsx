import {
  Text, View, TextInput, TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant';

export function Home() {
  const participants = [
    'Guilherme',
    'João',
    'Maria',
    'Pedro',
    'Ana',
    'Mário',
    'José',
    'Carlos',
    'Fernanda',
    'Mariana',
    'Rafael',
    'Ricardo',
  ];

  function handleAddParticipant() {
    console.log('Adicionou participante');
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Removeu o ${name}`);
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            removeParticipant={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante adicionado.</Text>
        )}
      />


      {/* <ScrollView>
        {participants.map((participant, index) => (
          <Participant
            key={index}
            name={participant}
            removeParticipant={() => handleRemoveParticipant(participant)}
          />
        ))}
      </ScrollView> */}

    </View>
  );
}