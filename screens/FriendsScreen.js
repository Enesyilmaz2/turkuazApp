import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const friendsData = [
  { id: "1", name: "Selim Alp Yılmaz", username: "@selimalpyilmaz" },
  { id: "2", name: "İsmail Mutahhat Çelik", username: "@ismailcelik" },
  { id: "3", name: "Salih Süha Kürün", username: "@salihsuha" },
];

const FriendsScreen = () => {
  const navigation = useNavigation();

  const renderFriend = ({ item }) => (
    <TouchableOpacity
      style={styles.friendItem}
      onPress={() => navigation.navigate("ProfileScreen", { userId: item.id })}
    >
      <Text style={styles.friendName}>{item.name}</Text>
      <Text style={styles.friendUsername}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friendsData}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  friendItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  friendName: {
    fontSize: 18,
    color: "#333",
  },
  friendUsername: {
    fontSize: 14,
    color: "#888",
  },
});

export default FriendsScreen;
