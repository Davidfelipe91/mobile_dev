import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const mainTheme = Colors.mainTheme;

const index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: mainTheme.white }}>
      <View
        style={{
          position: "absolute",
          top: "-26%",
          right: "-2%",
          zIndex: 10,
          backgroundColor: mainTheme.gray,
          width: "120%",
          aspectRatio: 1,
          borderRadius: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            position: "absolute",
            bottom: "-24%",
            right: "-4%",
            width: "96%",
            aspectRatio: 1,
          }}
          contentFit="contain"
          source={require("@/assets/images/dog-watching.png")} //TASK DOWN IMG SIZEz
        ></Image>
        <View
          style={{
            position: "absolute",
            width: "100%",
            aspectRatio: 1,
            backgroundColor: mainTheme.secondary,
            opacity: 0.4,
          }}
        ></View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            minHeight: "60%",
            paddingInline: 44,
            paddingBlock: 40,
            backgroundColor: mainTheme.white,
            borderRadius: 40,
            boxShadow: "0px 5px 15px rgba(25, 157, 220, 0.3)",
            gap: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                width: 198,
                height: 106,
                zIndex: 20,
              }}
              contentFit="contain"
              source={require("@/assets/images/main-logo.png")}
            />
          </View>

          <View style={{ gap: 20 }}>
            <Text
              style={{
                color: mainTheme.grayText,
                fontFamily: "Poppins-Medium",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              ¡Bienvenido!
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                height: 32,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: mainTheme.gray,
              }}
            >
              <Link
                style={[
                  styles.navigationButton,
                  {
                    backgroundColor: mainTheme.white,
                    color: mainTheme.primary,
                  },
                ]}
                href="/log-in"
              >
                Log In
              </Link>
              <Link
                style={[
                  styles.navigationButton,
                  {
                    height: 36,
                    textAlignVertical: "center",
                  },
                ]}
                href="/"
              >
                Sign Up
              </Link>
            </View>

            <View style={{ gap: 12 }}>
              <TextInput
                style={styles.inputUserData}
                placeholder="Número de identificación"
              />
              <TextInput
                style={styles.inputUserData}
                placeholder="Número de celular"
              />

              <TextInput
                style={styles.inputUserData}
                placeholder="Correo ecetrónico"
              />

              <TextInput
                style={styles.inputUserData}
                placeholder="Contraseña"
              />

              <TextInput
                style={styles.inputUserData}
                placeholder="Confirmar contraseña"
              />
            </View>

            <Pressable
              style={{
                backgroundColor: mainTheme.primary,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 16,
                  color: mainTheme.white,
                }}
              >
                Sing up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          zIndex: 10,
          // backgroundColor: mainTheme.grayText,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{ width: 218, height: 85 }}
          contentFit="cover"
          source={require("@/assets/images/dog-face.png")}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputUserData: {
    borderBottomColor: mainTheme.gray,
    borderBottomWidth: 1,
    fontFamily: "Poppins-Light",
    fontSize: 12,
  },

  navigationButton: {
    flex: 1,
    backgroundColor: mainTheme.primary,
    color: mainTheme.white,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    borderRadius: 20,
    // borderTopLeftRadius: 20,
    // borderBottomLeftRadius: 20,
  },

  textOption: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    color: mainTheme.grayText,
    textAlign: "center",
  },

  socialMediaIconContainer: {
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: "100%",
    borderColor: mainTheme.gray,
  },

  socialMediaIconSize: {
    width: 32,
    aspectRatio: 1,
  },
});

export default index;
