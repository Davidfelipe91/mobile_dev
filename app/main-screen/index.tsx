import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const mainTheme = Colors.mainTheme;

const index = () => {
  return (
    <View style={{ flex: 1, gap: 20, alignItems: "center" }}>
      <View style={styles.container}>
        <View>
          <Text>Datos personales</Text>
          <View></View>
          <Text>David Felipe Cataño Garcia</Text>
          <Text>david.catano@tdea.edu.co</Text>
          <Text>32443881757</Text>
        </View>
        <View>
          <Text>Mascotas</Text>
          <View></View>
          <View style={{ flexDirection: "row" }}>
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
          </View>
        </View>
        <Pressable>
          <Text>Consulta historial clínico</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text>B</Text>
      </View>
      <View style={styles.container}>
        <Text>C</Text>
      </View>
      <View style={styles.container}>
        <Text>D</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: mainTheme.white,
    boxShadow: "0px 5px 15px rgba(25, 157, 220, 0.3)",
  },
});

export default index;
