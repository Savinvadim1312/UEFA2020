import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TeamStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Players</Text>
        <Text style={styles.value}>0 / 15</Text>
      </View>

      <View style={styles.valueContainer}>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.value}>$100m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    borderWidth: 4,
    borderColor: "#38abd1",
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
  },
  valueContainer: {
    marginRight: 25,
  },
  label: {
    color: "#333",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TeamStats;
