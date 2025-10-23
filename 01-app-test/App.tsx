import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [historial, setHistorial] = useState([0]);

  //condicion para que no suba de 20
  const handleIncrease = () => {
    if (count < 20) {
      setCount(count + 1);
      setHistorial([...historial, count]);
    };
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      <Text style={styles.titulo}>Historial:</Text>
      <ScrollView style={styles.historialBox}>
        {historial.map((valor, index) => (
          <Text key={index} style={styles.historialTexto}>
            {index + 1}. {valor}
          </Text>
        ))}
      </ScrollView>
      <FAB label="Incremento" color='orange' onPress={handleIncrease} onLongPress={() =>
        Alert.alert("Reiniciar contador a 0", "¿Estas seguro de reinicar el contador?", [{ text: "Cancelar", style: "cancel" }, { text: "Reiniciar", onPress: handleReset }])} position="right"></FAB>
      <FAB label="Reseteo" color='white' onPress={() => setCount(0)} onLongPress={() => setCount(0)} position="left"></FAB>


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
  titulo: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
  historialBox: {
    marginTop: 10,
    height: '10%', // tamaño pequeño del historial
    width: '80%',
    backgroundColor: '#444',
    borderRadius: 8,
    padding: 12,
  },
  historialTexto: {
    color: 'white',
    fontSize: 16,
  },

});
