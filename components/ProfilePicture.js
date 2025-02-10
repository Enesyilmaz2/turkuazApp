import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfilePicture = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#46e5de",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#adf3f0",
    borderRadius: 50,
  },
});

export default ProfilePicture;
