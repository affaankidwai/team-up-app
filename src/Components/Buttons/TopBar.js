import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.locationContainer}>
          <Text style={styles.changeText}>Change</Text>
          <View style={styles.location}>
            <SimpleLineIcons name="location-pin" size={24} color="white" />
            <Text style={styles.locationText}>Chennai</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <View>
        <AntDesign name="user" size={24} color="black" />
      </View> */}
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    alignContent: "space-between",
    backgroundColor: "#00245A",
  },
  locationContainer: {
    margin: 10,
  },
  changeText: {
    marginLeft: 30,
    color: "white",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 5,
    color: "white",
  },
});
