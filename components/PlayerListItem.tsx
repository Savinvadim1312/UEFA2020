import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { Player } from "../types";
import { myFormationState, myPlayersState } from "../atoms/MyTeam";

interface Props {
  player: Player;
}

const PlayerListItem = ({ player }: Props) => {
  const [myPlayers, setMyPlayers] = useRecoilState(myPlayersState);
  const myFormation = useRecoilValue(myFormationState);

  const numberOfPlayersOnPos = myPlayers.filter(
    (p) => p.position === player.position
  ).length;

  const onPress = () => {
    setMyPlayers((curPlayers) => {
      if (curPlayers.some((p) => p.id === player.id)) {
        return curPlayers.filter((p) => p.id !== player.id);
      }
      // CHECK if it's possible to add
      if (numberOfPlayersOnPos < myFormation[player.position]) {
        return [...curPlayers, player];
      }
      return curPlayers;
    });
  };

  const isSelected = myPlayers.some((p) => p.id === player.id);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#d170db" : "white" },
      ]}
    >
      <Image
        source={{
          uri: `https://media.api-sports.io/football/players/${player.id}.png`,
        }}
        style={styles.image}
      />

      <View style={{ flexGrow: 1 }}>
        <Text style={styles.name}>{player.name}</Text>
        <Text>{player.match}</Text>
      </View>

      <View style={[styles.colContainer, { alignItems: "flex-end" }]}>
        <Text style={styles.name}>
          ${(player.price / 1_000_000).toFixed(1)}m
        </Text>
        <Text>{player.position}</Text>
      </View>

      <Text style={styles.points}>{player.totalPoints}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  colContainer: {
    marginHorizontal: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ddd",
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  points: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PlayerListItem;
