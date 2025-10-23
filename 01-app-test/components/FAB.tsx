import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string;
  position?: "left" | "right";
  // Actions
  color: string;
  onPress?: () => void;
  onLongPress?: () => void;
}
export default function FAB({label,position = "right",color ='red',onPress, onLongPress,}: Props) {
  return (
    <Pressable  style={(pressed) => [
        styles.floattingButton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        { backgroundColor: color },
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
      >
      <Text style={{ color: "black", fontSize: 18, fontWeight:'bold'}}>{label}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  floattingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#007AFF",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    zIndex: 1000,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },
  positionRight: {
    right:150,
  },
  positionLeft: {
    left: 20,
  },
});
