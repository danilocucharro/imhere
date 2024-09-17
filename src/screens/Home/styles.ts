import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  txtEventName: {
    color: "#FDFCFE",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 100,
  },
  txtEventDate: {
    color: "#6B6B6B"
  },
  contentFormAddParticipant: {
    marginVertical: 36,
    flexDirection: "row",
    height: 56,
    gap: 12
  },
  inputAddParticipant: {
    flex: 1,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 20
  },
  btnAddParticipant: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: "auto",
    borderRadius: 5,
    backgroundColor: "#31CF67"
  },
  txtAddParticipant: {
    color: "#FFF",
    fontSize: 24
  },
  txtEmptyParticipantList: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center"
  }
});