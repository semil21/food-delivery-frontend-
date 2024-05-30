import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import orderDetails from "../../assets/images/orderDetails.png";
import React from "react";
import tw from "twrnc";
import { Link } from "expo-router";
import HomeScreen from "./homeScreen";
const OrderDetails = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <Image source={orderDetails} />
      <View style={tw`mx-9 my-10 `}>
        <Text style={tw`text-3xl font-medium text-center`}>No orders yet</Text>
        <Text style={tw`text-lg mx-6 my-3 font-normal text-center`}>
          Hit Orange Order button down below to Create an order
        </Text>
      </View>
      <Link href="./homeScreen">
        <TouchableOpacity style={styles.link}>
          <Text style={styles.textColor}>Start Ordering</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  link: {
    backgroundColor: "#FA4A0C",
    width: 250,
    height: 35,
    borderRadius: 20,
  },
  textColor: {
    color: "white",
    width: 250,
    textAlign: "center",
    fontSize: 20,
    alignItems: "center",
    paddingTop: 2,
  },
});
