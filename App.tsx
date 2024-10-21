import "react-native-gesture-handler";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerParamList,
  RootStackParamList,
  DrawerScreenProps,
  StackScreenProps,
} from "./type/types";
import HomePage from "./pages/general pages/welc";
import { ItemSelectionScreen } from "./pages/checkout/pay";
import { PaymentDetailsScreen } from "./pages/checkout/checkout";
import { PaymentSuccessScreen } from "./pages/checkout/success";
import { SixWeekCoursesScreen } from "./pages/courses/6WeekCourses";

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Drawer Screens
function NewsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>News Screen</Text>
    </View>
  );
}

function Courses1Screen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Courses 1 Screen</Text>
    </View>
  );
}

function Courses2Screen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Courses 2 Screen</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Screen</Text>
    </View>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="SixWeekCourses">
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="About Us" component={NewsScreen} />
      <Drawer.Screen name="Six Week Courses" component={SixWeekCoursesScreen} />
      <Drawer.Screen name="Six Month Courses" component={Courses2Screen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ItemSelection"
        component={ItemSelectionScreen}
        options={{ title: "Select Items" }}
      />
      <Stack.Screen
        name="PaymentDetails"
        component={PaymentDetailsScreen}
        options={{ title: "Payment Details" }}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccessScreen}
        options={{ title: "Payment Successful" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
