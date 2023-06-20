import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Thapasrc/screens/Home';
import About from '../Thapasrc/screens/About';
import Contact from '../Thapasrc/screens/Contact';
import Course from "../Thapasrc/screens/Course";
import UserData from "../Thapasrc/screens/UserData";
import CourseDetails from "../Thapasrc/screens/CourseDetails";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const App = () => {

    const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      {/* home screen  */}
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}>
        {(props) => <Home {...props} channelName={"Physics Aura"} />}
      </Stack.Screen>

      {/* Course Screen  */}
      <Stack.Screen
        name="Course"
        component={Course}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_700Bold",
          },
          headerTitle: "Courses",
          headerTitleAlign: "center",
        }}
      />

      {/* UserData Screen  */}
      <Stack.Screen
        name="Student"
        component={UserData}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_700Bold",
          },
          headerTitle: "Students Data",
          headerTitleAlign: "center",
        }}
      />

      {/* About Screen  */}
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_700Bold",
          },
          headerTitleAlign: "center",
        }}
      />

      {/* Contact Screen  */}
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_700Bold",
          },
          headerTitleAlign: "center",
        }}
      />

      {/* CourseDetails Screen  */}
      <Stack.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_700Bold",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default App;
