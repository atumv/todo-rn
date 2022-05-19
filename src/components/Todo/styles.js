import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    paddingRight: 15,
  },
  pressableContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    padding: 15,
  },
  title: {
    color: '#000',
    fontSize: Platform.OS === 'web' ? 16 : 18,
    marginLeft: 7,
    width: '80%',
  },
  titleCompleted: {
    color: '#bbb',
  },
});
