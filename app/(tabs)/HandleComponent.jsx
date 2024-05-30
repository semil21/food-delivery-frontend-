import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LoginScreen from "../../components/screens/loginScreen";
import SignUpScreen from "../../components/screens/signUpScreen";
import logo from "../../assets/images/logo.png";
import tw from "twrnc";
const Tab = createMaterialTopTabNavigator();

export default function HandleComponent() {
  return (
    <NavigationContainer independent={true}>
      <View style={tw`flex items-center pt-10 bg-white `}>
        <Image source={logo} />
      </View>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
        }}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Sign-up" component={SignUpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
