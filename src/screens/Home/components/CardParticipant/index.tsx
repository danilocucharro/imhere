import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type CardParticipantProps = {
  name: string;
  handleRemoveParticipant: (name: string) => void;
}

export function CardParticipant({
  name,
  handleRemoveParticipant
}: CardParticipantProps) {
  return(
    <View style={styles.container}>
      <Text style={styles.txtParticipantNameCard}>
        {name}
      </Text>

      <TouchableOpacity
        style={styles.btnRemoveParticipant}
        onPress={() => handleRemoveParticipant(name)}
      >
        <Text style={styles.txtRemoveParticipant}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}