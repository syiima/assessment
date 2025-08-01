import { Platform, Alert } from 'react-native';

export const showAlert = (message) => {
  if (Platform.OS === 'web') {
    window.alert(`${message}`);
  } else {
    Alert.alert(message);
  }
};