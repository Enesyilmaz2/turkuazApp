import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Test credentials
    if (email === "test@test.com" && password === "123") {
      navigation.navigate("HomeScreen");
    } else {
      alert("Geçersiz e-posta veya şifre");
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Turkuaz" />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Turkuaz'a Hoşgeldiniz</Text>
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => alert("Şifremi Unuttum")}
          style={styles.link}
        >
          <Text style={styles.linkText}>Şifremi Unuttum</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    padding: 15,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#5ae8e2",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  link: {
    marginBottom: 15,
  },
  linkText: {
    color: "#46e5de",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
