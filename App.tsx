import * as React from "react";
import { View, Text, Button } from "react-native";

// react native import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UseScreen";

// icons import
// import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "ホーム画面" }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{ title: "ユーザ画面" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
