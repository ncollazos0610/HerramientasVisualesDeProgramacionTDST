import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";
import { useContador } from "./hooks/useCounter";

export default function App() {
  const {
    count,
    historial,
    handleIncrease,
    handleReset,
    handleLongPress,
  } = useContador();

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

      <FAB
        label="Incremento"
        color="orange"
        onPress={handleIncrease}
        onLongPress={handleLongPress}
        position="right"
      />

      <FAB
        label="Reseteo"
        color="white"
        onPress={handleReset}
        onLongPress={handleReset}
        position="left"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHuge: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#000",
  },
  titulo: {
    color: "white",
    fontSize: 18,
    marginTop: 20,
  },
  historialBox: {
    marginTop: 10,
    height: "10%",
    width: "80%",
    backgroundColor: "#444",
    borderRadius: 8,
    padding: 12,
  },
  historialTexto: {
    color: "white",
    fontSize: 16,
  },
});
