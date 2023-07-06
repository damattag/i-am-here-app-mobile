import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    marginTop: 16,
    marginRight: 12,
  },

  addButton: {
    backgroundColor: '#31CF67',
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  addButtonText: {
    color: '#FDFCFE',
    fontSize: 20,
    fontWeight: 'bold',
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 42,
  }
});