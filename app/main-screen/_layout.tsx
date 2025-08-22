import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

const _layout = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#68daf7ff",
      }}
    >
      <Slot />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // takes full screen
//     backgroundColor: "#68daf7ff",
//   },
// });

export default _layout;
