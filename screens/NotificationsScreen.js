import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notificationText}>
        Salih Süha Kürün fotoğrafınızı beğendi
      </Text>
      <Text style={styles.timeText}>(1 dakika önce)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
  },
  notificationText: {
    fontSize: 16,
    color: "#000000",
  },
  timeText: {
    fontSize: 14,
    color: "#7d7d7d",
  },
});

export default NotificationsScreen;
