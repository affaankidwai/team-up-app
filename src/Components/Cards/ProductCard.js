import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Add your 5 image paths here
const imagePaths = [
  require("../../../assets/images/1.jpeg"),
  require("../../../assets/images/2.jpeg"),
  require("../../../assets/images/3.jpeg"),
];

const ProductItem = ({ item, navigation }) => {
  // Get a random image index from the array
  const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
  console.log(navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressOut={() =>
          navigation.navigate("ProductScreen", { productId: item.Id })
        }
      >
        <Image source={imagePaths[randomImageIndex]} style={styles.image} />
        <Text style={styles.header}>{item?.Title}</Text>
        <View style={styles.row}>
          <View style={styles.starsContainer}>
            <MaterialIcons name="star" size={18} color="gold" />
            <Text style={styles.starsText}> ₹ 999</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%", // Set the width to your desired size
    height: 350, // Set the height to your desired size
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
    padding: 8,
    backgroundColor: "blue",
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  header: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  body: {
    fontSize: 10,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starsText: {
    fontSize: 12,
    marginLeft: 10,
  },
});

export default ProductItem;
