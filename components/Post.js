import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ProfilePicture from "./ProfilePicture";

const Post = ({ userId, postImage, likes, comments, date }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <ProfilePicture />
        <Text style={styles.userId}>{userId}</Text>
      </View>
      <Image source={{ uri: postImage }} style={styles.postImage} />
      <View style={styles.interactionContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>📤</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.likes}>{likes} beğeni</Text>
      <Text style={styles.comment}>{comments}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Düzenle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#adf3f0",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userId: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  interactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  iconButton: {
    padding: 10,
  },
  iconText: {
    fontSize: 20,
  },
  likes: {
    fontWeight: "bold",
  },
  comment: {
    marginVertical: 5,
  },
  date: {
    color: "gray",
    fontSize: 12,
  },
  editButton: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  editButtonText: {
    color: "#5ae8e2",
  },
});

export default Post;
