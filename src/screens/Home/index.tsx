import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert
} from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';

import { Participant } from '../../components/Participant';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState('');

  function handleAddParticipant(name: string) {
    if (participants.includes(name)) {
      return Alert.alert('Participante já adicionado', 'Esse participante já foi adicionado ao evento');
    }

    setParticipants([...participants, name]);
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter((participant) => participant !== name));
          Alert.alert('Removido', `O participante ${name} foi removido com sucesso!`)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ]);
    console.log(`Removeu o ${name}`);
  }

  useEffect(() => {
    console.log(participants);
  }, [participants]);

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Quinta, 6 de julho de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Novo do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddParticipant(newParticipant)}
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