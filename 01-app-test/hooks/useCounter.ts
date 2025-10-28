import { useState } from "react";
import { Alert } from "react-native";

export function useContador() {
  const [count, setCount] = useState(0);
  const [historial, setHistorial] = useState([0]);

  // Maximo 20
  const handleIncrease = () => {
    if (count < 20) {
      setCount(count + 1);
      setHistorial([...historial, count]);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleLongPress = () => {
    Alert.alert(
      "Reiniciar contador a 0",
      "¿Estás seguro de reiniciar el contador?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Reiniciar", onPress: handleReset },
      ]
    );
  };

  return {
    count,
    historial,
    handleIncrease,
    handleReset,
    handleLongPress,
  };
}
