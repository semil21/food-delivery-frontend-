import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import tw from "twrnc";
import logo from "../../assets/images/logo.png";
import { Link } from "expo-router";

export default function App() {
  return (
    // <SafeAreaView style={tw`bg-cyan-900	 h-full justify-center	`}>
    <SafeAreaView style={styles.safeAreaView}>
      <View style={tw`flex  items-center  `}>
        <Image
          source={logo}
          style={tw`bg-white justify-center items-center h-32`}
          resizeMode="contain"
        />
      </View>
      <View style={tw`flex items-center mt-8`}>
        <Text style={tw`text-6xl font-bold text-white	`}>Food For Everyone</Text>
      </View>
      <View style={tw`flex items-center mt-6`}>
        <Link href="./HandleComponent">
          <View style={tw`bg-white w-60 h-11 rounded-3xl	pt-2 items-center`}>
            <Text style={tw` text-xl font-medium	 text-orange-600		`}>
              Get Started
            </Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#FA4A0C",
    height: "100%",
    justifyContent: "center",
  },
});
