import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import React from "react";
import ProductCard from "../Components/Cards/ProductCard";
import GreetCard from "../Components/Cards/GreetCard";
import SearchBar from "../Components/Buttons/SearchBar";
import TopBar from "../Components/Buttons/TopBar";
import CarouselComponent from "../Components/Carousel/Carousel";
import ProductCarousel from "../Components/Carousel/ProductCarousel";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.topText}>
        {/* <Text>HomeScreen</Text>

        <Text>liuhgoisd h</Text> */}
        <TopBar />

        <GreetCard />
        <SearchBar />
        <View style={styles.topT}>
          <Text style={styles.topText}>Top Games near you</Text>
        </View>
        <ProductCarousel />

        {/* <CarouselComponent /> */}
        <ScrollView contentContainerStyle={styles.cont}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginTop: 40,
  },
  cont: {
    paddingVertical: 20,
  },
  topT: {
    marginTop: 20,
    marginLeft: 12,
  },
  topText: {
    fontSize: 22,
  },
});
