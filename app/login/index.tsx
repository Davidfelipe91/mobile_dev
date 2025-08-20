import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "80%",
          gap: 20,
          backgroundColor: "#ffffff",
        }}
      >
        <View>
          <Text>ICON</Text>
        </View>

        <View>
          <Text>¡Bienvenido!</Text>
          <Text>Sign Up</Text>

          <TextInput placeholder="Correo o cédula" />
          <TextInput placeholder="Contraseña" />

          <Text>¿Olvido su contraseña?</Text>
          <Button title="Log in" />
          <Text>Síganos</Text>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text>A</Text>
            <Text>B</Text>
            <Text>C</Text>
          </View>
        </View>

        <View>
          <Text>BUTTON</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23cf31ff",
  },
});

export default index;
