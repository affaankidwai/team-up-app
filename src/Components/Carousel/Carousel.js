import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import ProductItem from "../Cards/ProductCard";

// Your array of products (example)
const products = [
  { Id: 1 /* Add other product details */ },
  { Id: 2 /* Add other product details */ },
  { Id: 3 /* Add other product details */ },
  // Add more products as needed
];

const CarouselComponent = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ProductItem item={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={products}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop
        layout="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default CarouselComponent;
