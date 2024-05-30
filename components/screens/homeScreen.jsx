import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SearchBar from "react-native-dynamic-search-bar";
import tw from "twrnc";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MexicanScreen from "../screens/items/mexicanScreen";
import PizzaScreen from "../screens/items/pizzaScreen";
import SacdwichScreen from "../screens/items/sandwichScreen";
import ShakesScreen from "../screens/items/shakesScreen";
import ThaliScreen from "../screens/items/thaliScreen";

import ProfileScreen from "./bottomTab/profileScreen";
import OrderHistoryScreen from "./bottomTab/orderHistoryScreen";
import FavouritesScreen from "./bottomTab/favouritesScreen";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <View style={tw`mb-6`}>
        <SearchBar
          style={tw`mt-10 h-13 text-lg	 font-bold `}
          placeholder="Search here.."
          // onChangeText={(text) => console.log(text)}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 110 },
          tabBarLabelStyle: { fontSize: 15 },
        }}
      >
        <Tab.Screen name="mexican" component={MexicanScreen} />
        <Tab.Screen name="pizza" component={PizzaScreen} />
        <Tab.Screen name="sandwich" component={SacdwichScreen} />
        <Tab.Screen name="shakes" component={ShakesScreen} />
        <Tab.Screen name="thali" component={ThaliScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
