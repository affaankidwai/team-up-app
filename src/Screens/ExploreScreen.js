import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SearchBar from "../Components/Buttons/SearchBar";
import TopBar from "../Components/Buttons/TopBar";
import ProductItem from "../Components/Cards/ProductCard";

const ExploreScreen = () => {
  const data = [
    { id: "1", imageSource: require("../../assets/images/tenn.png") },
    { id: "2", imageSource: require("../../assets/images/football.png") },
    { id: "3", imageSource: require("../../assets/images/cricket.png") },
    { id: "4", imageSource: require("../../assets/images/tenn.png") },
    { id: "5", imageSource: require("../../assets/images/tenn.png") },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image source={item.imageSource} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.SearchBar}>
        <SearchBar />
      </View>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <Text style={styles.gamesText}>Games to join</Text>
      <ProductItem />
      <ProductItem />

      <ProductItem />
      <ProductItem />
      <ProductItem />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  SearchBar: {
    marginTop: 10,
  },
  image: {
    width: 138,
    height: 161,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 5,
    marginTop: 20,
  },
  gamesText: {
    margin: 10,
    fontSize: 25,
  },
});
