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

const ExploreScreen = () => {
  const data = [
    { id: "1", imageSource: require("../../assets/images/tenn.png") },
    { id: "2", imageSource: require("../../assets/images/tenn.png") },
    { id: "3", imageSource: require("../../assets/images/tenn.png") },
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
      <SearchBar />

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <Text>ExploreScreen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  image: {
    width: 138,
    height: 161,
    resizeMode: "cover",
  },
});
