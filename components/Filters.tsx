import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Filters = () => {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.text}>FWD</Text>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.text}>MID</Text>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.text}>DEF</Text>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.text}>GCK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  filterContainer: {
    backgroundColor: "#ddd",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});

export default Filters;
