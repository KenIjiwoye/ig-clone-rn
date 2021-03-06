import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Redressed_400Regular } from "@expo-google-fonts/redressed";
import AppLoading from "expo-app-loading";
import { Layout, Input, Button, Divider } from "@ui-kitten/components";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  let [fontsLoaded] = useFonts({
    Redressed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Layout style={styles.container}>
      <Text style={styles.logoText}>Kenstagram</Text>
      <Text style={styles.subText}>Register</Text>
      <Divider />
      <Input
        style={styles.input}
        placeholder="Email address"
        value={email}
        keyboardType="email-address"
        onChangeText={(val) => setEmail(val)}
      />
      <Input
        style={styles.input}
        placeholder="Full Name"
        value={email}
        onChangeText={(val) => setName(val)}
      />
      <Input
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={(val) => setUsername(val)}
      />
      <Button style={styles.authBtn}>Register</Button>
      <Text
        onPress={() => navigation.navigate("Log In")}
        style={styles.authLinks}
        style={styles.authLinks}
      >
        Already have an account? Login here
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 48,
    paddingRight: 48,
  },
  logoText: {
    fontFamily: "Redressed_400Regular",
    fontSize: 48,
    color: "white",
  },
  input: {
    backgroundColor: "#fff",
    // marginRight: 48,
    // marginLeft: 48,
  },
  subText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 24,
    marginBottom: 24,
  },
  authBtn: {
    width: "100%",
  },
  authLinks: {
    color: "#fff",
    marginTop: 16,
  },
});

export default Register;
