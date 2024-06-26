// @components/Message.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface MessageProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const Message: React.FC<MessageProps> = ({
  visible,
  title,
  message,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{message}</Text>
      <Text style={styles.closeButton} onPress={onClose}>
        Fechar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  closeButton: {
    marginTop: 8,
    color: "blue",
    textAlign: "right",
    textDecorationLine: "underline",
  },
});

export default Message;
