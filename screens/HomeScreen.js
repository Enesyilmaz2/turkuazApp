import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import { BottomNavigation } from "../components/BottomNavigation"; // Assuming you have a BottomNavigation component
import BottomNavigation from "../components/BottomNavigation";

const HomeScreen = () => {
  const posts = [
    // Sample data for posts
    {
      id: "1",
      userId: "@selimalpyilmaz",
      image: "path/to/image1.jpg",
      comments: "Bu harika!",
      date: "1 dakika önce",
      likes: 1,
    },
    {
      id: "2",
      userId: "@ismailcelik",
      image: "path/to/image2.jpg",
      comments: "Güzel bir gün!",
      date: "2 dakika önce",
      likes: 0,
    },
    // Add more posts as needed
  ];

  return (
    <View style={styles.container}>
      <Header title="Turkuaz" />
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            userId={item.userId}
            image={item.image}
            comments={item.comments}
            date={item.date}
            likes={item.likes}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default HomeScreen;
