import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: Platform.OS === 'web' ? 5 : 10,
    paddingBottom: Platform.OS === 'web' ? 5 : 10,
  },
  plusIcon: {
    color: '#000',
    fontSize: 24,
  },
  text: {
    color: '#000',
    fontSize: Platform.OS === 'web' ? 16 : 18,
  },
});
