import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    flexDirection: "row",
    width: "100%",
    height: 48,
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
  },
  txtParticipantNameCard: {
    color: "#FDFCFE",
    fontWeight: "bold"
  },
  btnRemoveParticipant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 5,
    backgroundColor: "#E23C44"
  },
  txtRemoveParticipant: {
    color: "#FDFCFE",
  }
})