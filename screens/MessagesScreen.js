import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";

const MessagesScreen = () => {
  const messages = [
    {
      id: "1",
      friend: "Selim Alp Yılmaz",
      username: "@selimalpyilmaz",
      lastMessage: "Merhaba, nasılsın?",
      time: "1 dakika önce",
    },
    {
      id: "2",
      friend: "İsmail Mutahhat Çelik",
      username: "@ismailcelik",
      lastMessage: "Projeyi bitirdin mi?",
      time: "5 dakika önce",
    },
    {
      id: "3",
      friend: "Salih Süha Kürün",
      username: "@salihsuha",
      lastMessage: "Fotoğrafını beğendim!",
      time: "10 dakika önce",
    },
  ];

  const renderMessageItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Text style={styles.friendName}>{item.friend}</Text>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Mesajlar" />
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  friendName: {
    fontWeight: "bold",
  },
  username: {
    color: "gray",
  },
  lastMessage: {
    marginTop: 5,
  },
  time: {
    color: "darkgray",
    fontSize: 12,
  },
});

export default MessagesScreen;
