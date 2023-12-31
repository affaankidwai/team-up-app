import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <AntDesign name="search1" size={20} color="#1E4BA3" />
      <TextInput
        style={styles.searchInput}
        placeholder="  Venues, Teams, Matches"
        placeholderTextColor="#27374D"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginHorizontal: 16,

    borderWidth: 1,
    borderColor: "#1E4BA3",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#27374D",
    padding: 5,
  },
});

export default SearchBar;
