import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const _layout = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes full screen
    backgroundColor: "#68daf7ff",
  },
});

export default _layout;
