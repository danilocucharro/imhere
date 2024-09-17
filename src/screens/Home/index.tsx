import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { useState } from "react";
import { CardParticipant } from "./components/CardParticipant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleAddParticipant() {
    if(participants.includes(participantName)){
      Alert.alert("Participante Existe", "Ja existe um participante no evento com esse nome")
    } 
    else {
      setParticipants(prevState => [...prevState, participantName])
      setParticipantName("")
    }
  }
  
  function handleRemoveParticipant(name: string) {
    const newParticipantsList = participants.filter(participant => participant !== name)

    Alert.alert(
      "Remover Participante",
      `Deseja remover o ${name} dessa lista?`,[
        {
          text: "Sim",
          onPress: () => setParticipants(newParticipantsList)
        },
        {
          text: "Nao",
          style: "cancel"
        }
    ])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.txtEventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.txtEventDate}>
        Segunda, 16 de Setembro de 2024
      </Text>

      <View style={styles.contentFormAddParticipant}>
        <TextInput 
          style={styles.inputAddParticipant}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />

        {/* REGIAO CLICAVEL COM EFEITO DE OPACITY */}
        <TouchableOpacity
        style={styles.btnAddParticipant}
        onPress={handleAddParticipant}
        >
          <Text style={styles.txtAddParticipant}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <CardParticipant
            key={item}
            name={item}
            handleRemoveParticipant={handleRemoveParticipant}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return(
            <Text style={styles.txtEmptyParticipantList}>
              Ninguem chegou no evento ainda? Adicione participantes a sua lista de presenca
            </Text>
          )
        }}
      />
    </View>
  )
}