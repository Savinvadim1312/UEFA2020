import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { View, Text } from "react-native";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allPlayersState, filteredPlayers } from "../atoms/Players";

import PlayerListItem from "./PlayerListItem";

const PlayersList = () => {
  // const [players, setPlayers] = useRecoilState(allPlayersState);
  // const setPlayers = useSetRecoilState(allPlayersState):
  const players = useRecoilValue(filteredPlayers);

  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({ item }) => <PlayerListItem player={item} />}
    />
  );
};

export default PlayersList;
