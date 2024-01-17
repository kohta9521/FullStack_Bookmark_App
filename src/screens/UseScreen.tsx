import React, { useEffect } from "react";
import { View, Text } from "react-native";

const UserScreen = () => {
  useEffect(() => {
    console.log("User Mount");
    return () => {
      console.log("User Unmout");
    };
  }, []);
  return (
    <View>
      <Text>User Screen</Text>
    </View>
  );
};

export default UserScreen;
