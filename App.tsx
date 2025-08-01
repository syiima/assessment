/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View , Platform, Text} from 'react-native';
import Calculator from './src/answers/Calculator';
import Navbar from './src/answers/Navbar';
import TwoSum from './src/answers/TwoSum';

function App() {  
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20
  },
});

export default App;
