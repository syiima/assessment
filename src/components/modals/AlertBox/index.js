import { Platform, Alert } from 'react-native';

const AlertBox = (message) => {
  if (Platform.OS === 'web') {
    window.alert(`${message}`);
  } else {
    Alert.alert(message);
  }
};

export default AlertBox;