import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';
import { useState } from 'react';
import FIB from './components/FIB';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <FAB label="" onPress={() => setCount(count + 1)} onLongPress={() => setCount(0)} position="right"></FAB>
      <FIB label="" onPress={() => setCount(0)} onLongPress={() => setCount(0)} position="left"></FIB>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#000",
  },

});
