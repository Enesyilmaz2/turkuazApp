import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ProfilePicture from "../components/ProfilePicture";
import Button from "../components/Button";

const EditProfileScreen = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    // Logic to save the updated profile information
  };

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <TextInput
        style={styles.input}
        placeholder="Ad"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Profili Kaydet" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});

export default EditProfileScreen;
