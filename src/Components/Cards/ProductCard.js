import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

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
    <TouchableOpacity
      onPressOut={() =>
        navigation.navigate("ProductScreen", { productId: item.Id })
      }
    >
      <View style={styles.container}>
        {/* Container for Image */}
        <View>
          <Image source={imagePaths[randomImageIndex]} style={styles.image} />
        </View>

        {/* Container for Text Items */}
        <View style={styles.textContainer}>
          <Text style={styles.header}>Affaan's Game</Text>
          <View style={styles.sport}>
            <Ionicons name="md-football-outline" size={16} color="black" />
            <Text style={styles.address}>Football</Text>
            <Text style={styles.address}>5 v 5</Text>
          </View>
          <Text style={styles.address}>Sat</Text>
          <Text style={styles.address}>29 July</Text>
          <Text style={styles.address}>7:00 am - 9:00 am</Text>
          <Text style={styles.address}>Turf Town, Guduvanchery</Text>

          {/* Stars Container */}
          <View style={styles.starsContainer}>
            {/* <MaterialIcons name="star" size={18} color="gold" /> */}
            <Text style={styles.address}>Booked</Text>
            <Text style={styles.starsText}> ₹ 999/ p</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%", // Set the width to your desired size
    height: 170, // Set the height to your desired size
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",
    padding: 8,
    backgroundColor: "#112B3C",
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    color: "white",
  },
  address: {
    fontSize: 14,
    marginRight: 20,
    color: "white",
  },
  textContainer: {
    flex: 1, // This will make the text items take the remaining width
    marginLeft: 10, // Add some spacing between the image and text items
    justifyContent: "space-between", // Align the text items vertically
  },
  sport: {
    flexDirection: "row",
    alignItems: "center",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starsText: {
    fontSize: 12,
    marginLeft: 10,
    color: "white",
  },
});

export default ProductItem;
