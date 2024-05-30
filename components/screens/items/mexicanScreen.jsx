import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import mexican from "../../data/mexicanData.json";

const MexicanScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.detailsButton}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mexican}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MexicanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardContainer: {
    alignItems: "center",
    marginBottom: 20,
    height: 340,
    marginHorizontal: 45,
    marginTop: 15,
  },
  imageContainer: {
    position: "relative",
    zIndex: 1,
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 95,
  },
  lowerContainer: {
    borderRadius: 40,
    position: "absolute",
    top: 85,
    height: 270,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 100,
    zIndex: 0,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "600",
    paddingTop: 15,
  },
  price: {
    paddingTop: 15,
    fontSize: 20,
    color: "#FA4A0C",
    fontWeight: "700",
  },
  touchableOpacity: {
    marginTop: 15,
  },
  detailsButton: {
    fontSize: 18,
    backgroundColor: "#FA4A0C",
    color: "white",
    width: 135,
    height: 35,
    paddingTop: 5,
    textAlign: "center",
    fontWeight: "600",
    borderRadius: 20,
  },
});
