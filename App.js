import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navigator from './src/navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'whitesmoke',
    justifyContent: 'center', 
  },
});
