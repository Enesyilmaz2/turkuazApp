import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Kayıt işlemi burada gerçekleştirilecek
  };

  return (
    <View style={styles.container}>
      <Header title="Turkuaz" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcomeText}>Turkuaz'a Kayıt Ol</Text>
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
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Kayıt Ol" onPress={handleRegister} />
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google ile Kayıt Ol</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Apple ile Kayıt Ol</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    padding: 15,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  socialButton: {
    backgroundColor: "black",
    borderRadius: 25,
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  socialButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default RegisterScreen;
