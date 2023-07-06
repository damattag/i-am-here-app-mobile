import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
  },

  deleteButton: {
    backgroundColor: '#E23C44',
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteButtonText: {
    color: '#FDFCFE',
    fontSize: 24,
  },
});