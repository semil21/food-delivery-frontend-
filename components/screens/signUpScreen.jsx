import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Link } from "expo-router";
import Dashboard from "../../app/(tabs)/dashboard";

export default function SignUpScreen() {
  return (
    <View style={tw`pt-5 mx-10 	`}>
      <TextInput
        placeholder="First Name"
        style={tw`h-10 border-b border-black text-lg font-normal `}
      />
      <TextInput
        placeholder="Last Name"
        style={tw`h-10 border-b border-black text-lg font-normal mt-6`}
      />
      <TextInput
        placeholder="Mobile Number"
        keyboardType="number-pad"
        style={tw`h-10 border-b border-black text-lg font-normal mt-6`}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={tw`h-10 border-b border-black text-lg font-normal mt-6 `}
      />
      <TextInput
        placeholder="Password"
        style={tw`h-10 border-b border-black text-lg font-normal mt-6 `}
        secureTextEntry
      />
      <Link href="./dashboard" style={styles.button}>
        <View>
          <Text style={styles.buttonText}>Sign up</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "#FA4A0C",
    fontSize: 18,
    paddingTop: 35,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#FA4A0C",
    marginTop: 35,
    height: 40,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    width: 300,
    color: "white",
    fontWeight: "500",
    paddingTop: 5,
  },
});
