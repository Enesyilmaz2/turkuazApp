import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Turkuaz" />
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Text style={styles.welcomeText}>Turkuaz'a Hoşgeldiniz</Text>
      <Button
        title="Giriş Yap"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Button
        title="Kayıt Ol"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Homemade Apple",
  },
});

export default WelcomeScreen;
