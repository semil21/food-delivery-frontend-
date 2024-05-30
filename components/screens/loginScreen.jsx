import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={tw`pt-13 mx-10 	`}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={tw`h-10 border-b border-black text-lg font-normal`}
      />
      <TextInput
        placeholder="Password"
        style={tw`h-10 border-b border-black text-lg font-normal mt-8`}
        secureTextEntry
      />
      <View>
        <Text style={styles.textColor}>Forgot password ?</Text>
      </View>

      <Link href="./dashboard" style={styles.button}>
        <View>
          <Text style={styles.buttonText}>Log in</Text>
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
