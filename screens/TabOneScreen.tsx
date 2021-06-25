import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";

import Field from "../components/Field";
import PlayerListItem from "../components/PlayerListItem";
import TeamStats from "../components/TeamStats";

import { players } from "../assets/data/players";
import Filters from "../components/Filters";

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const filtersBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };

  const snapPoints = [0, "50%"];

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View players</Text>
      </Pressable>

      <BottomSheet ref={playersBottomSheet} index={0} snapPoints={snapPoints}>
        <Pressable
          onPress={() => filtersBottomSheet.current?.expand()}
          style={styles.buttonContainer}
        >
          <Text>Filters</Text>
        </Pressable>
        <BottomSheetFlatList
          data={players}
          renderItem={({ item }) => <PlayerListItem player={item} />}
        />
      </BottomSheet>

      <BottomSheet ref={filtersBottomSheet} index={0} snapPoints={snapPoints}>
        <Filters />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#72CC5E",
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  contentContainer: {},
});
