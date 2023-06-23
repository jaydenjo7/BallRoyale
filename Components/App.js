import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TabNavigator from "./TabNav";

const App = () => {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;
