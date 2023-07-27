import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import ProductCard from "../Components/Cards/ProductCard";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.topText}>
        <Text>HomeScreen</Text>

        <Text>liuhgoisd h</Text>
        <ProductCard />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight, // Add padding top equal to the height of the status bar
  },
  topText: {
    marginTop: 50,
  },
});
