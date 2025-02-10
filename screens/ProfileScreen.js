import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePicture from "../components/ProfilePicture";
import Button from "../components/Button";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <ProfilePicture />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Ad Soyad</Text>
          <Text style={styles.userId}>@kullaniciID</Text>
          <Text style={styles.bio}>Buraya bio yazılacak.</Text>
        </View>
      </View>
      <Button
        title="Profili Düzenle"
        onPress={() => {
          /* Navigate to EditProfileScreen */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userId: {
    fontSize: 16,
    color: "gray",
  },
  bio: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProfileScreen;
