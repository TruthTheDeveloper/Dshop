import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    height: 400,
    width: '100%',
    gap: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
