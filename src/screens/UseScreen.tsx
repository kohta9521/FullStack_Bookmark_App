import React, { useEffect } from "react";
import { View, Text } from "react-native";

const UserScreen = ({ route }: any) => {
  useEffect(() => {
    console.log("User Mount");
    return () => {
      console.log("User Unmout");
    };
  }, []);
  return (
    <View>
      <Text>User Screen</Text>
      <Text>userId: {route.params.userId}</Text>
      <Text>userId: {route.params.userName}</Text>
      <Text>userId: {route.params.userAge}</Text>
    </View>
  );
};

export default UserScreen;
