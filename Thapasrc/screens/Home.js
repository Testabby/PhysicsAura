import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import Menu from "../component/Menu";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import { myHeight, myWidth } from "../component/AppScaling";

const Home = (props) => {

  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const description =
    "Welcome to Physics Aura, coaching center that nurtures bright minds, fostering conceptual clarity and problem-solving skills. Our experienced faculty inspires a love for physics through interactive lectures, practical experiments, and personalized guidance. Unleash your potential and embark on an enlightening journey with Physics Aura.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}>
          {props.channelName}
        </Text>
        <ImageBackground
          style={styles.BGheaderImage}
          imageStyle={{ opacity: 0.6 }}
          resizeMode="stretch"
          source={require("../../assets/logo.jpeg")}
        >


        </ImageBackground>

        <Text style={styles.paraStyle}>{description} </Text>

      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: myHeight,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  BGheaderImage: {
    height:myHeight/3,
    width: myWidth,
    // aspectRatio: 1.2,
    display: "flex",
    alignItems: "stretch",
    marginTop: 20,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 26,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Nunito_700Bold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 16,
    color: "#7d7d7d",
    marginTop: 25,
    paddingBottom: 10,
    lineHeight: 25,
    fontFamily: "WorkSans_400Regular",
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },

  menuStyle: {
    width:myWidth,
    position: 'absolute',
    bottom:0,
    justifyContent:'space-around'
  }
});

export default Home;
