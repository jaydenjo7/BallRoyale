import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CourtFinder from "./CourtFinder";
import App from "./App";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={App} />
      <Tab.Screen name="Court Finder" component={CourtFinder} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
