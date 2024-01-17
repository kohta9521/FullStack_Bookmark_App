import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation }: any) => {
  useFocusEffect(
    React.useCallback(() => {
      console.log("Home Focus");

      return () => {
        console.log("Home Unfocus");
      };
    }, [])
  );
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="ユーザ"
        onPress={() =>
          navigation.navigate("User", {
            userId: 1,
            userName: "Sample Name",
            userAge: 20,
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
