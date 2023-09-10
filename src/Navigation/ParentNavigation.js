// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "../Screens/HomeScreen";
// import ExploreScreen from "../Screens/ExploreScreen";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <Stack.Navigator
//       initialRouteName="HomeScreen"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
//       <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
//     </Stack.Navigator>
//   );
// }

// export default App;
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import ExploreScreen from "../Screens/ExploreScreen";
import SportScreen from "../Screens/SportScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import ProductScreen from "../Screens/ProductScreen";

const Tab = createBottomTabNavigator();

const ParentNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide the screen name from the top of the screen
        tabBarIcon: ({ focused }) => {
          let iconSource;

          // Your existing code for tab bar icons
          if (route.name === "MyCart") {
            iconSource = focused
              ? require("../../assets/images/Home.png")
              : require("../../assets/images/Home.png");
          } else if (route.name === "ProductInfo") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          } else if (route.name === "Categories") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          } else if (route.name === "Home") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          } else if (route.name === "Profile") {
            iconSource = focused
              ? require("../../assets/images/Cart.png")
              : require("../../assets/images/Cart.png");
          }

          return (
            <View style={{ alignItems: "center" }}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "green" : "#8E8E93",
                }}
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={ExploreScreen} />
      <Tab.Screen name="MyCart" component={SportScreen} />
      <Tab.Screen name="ProductInfo" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProductScreen} />
    </Tab.Navigator>
  );
};

export default ParentNavigator;
