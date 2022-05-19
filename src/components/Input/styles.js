import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000',
    fontSize: Platform.OS === 'web' ? 16 : 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});
