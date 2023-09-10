import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const SportScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>SportScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack("ExploreScreen")}>
        <Entypo
          name="chevron-left"
          style={{
            fontSize: 18,
            color: "#777777",
            padding: 12,
            backgroundColor: "#ffffff",
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SportScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
