import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: Platform.OS === 'web' ? '25vh' : '25%',
  },
});
