import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const GreetCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/tp.png")}
        style={styles.image}
        resizeMode="contain" // Adjust the resizeMode as per your needs
      />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Hey, Welcome Back</Text>
          <Text style={styles.text}>Affaan Kidwai</Text>
        </View>
        <View>
          <Text style={styles.explore}>Places around me</Text>
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 200,
    margin: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 55,
    left: 0,
    right: 150,

    // backgroundColor: "rgba(0, 0, 0, 0.6)", // Use rgba to set the background color with transparency
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  explore: { color: "white", textAlign: "center", marginTop: 10 },
});

export default GreetCard;
