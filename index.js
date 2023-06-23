import { registerRootComponent } from "expo";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "./Components/App";

const AppContainer = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

registerRootComponent(AppContainer);
