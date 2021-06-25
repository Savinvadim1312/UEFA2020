import { atom, selector } from "recoil";

import response from "../assets/data/response.json";

const pos2pos = {
  Attacker: "FWD",
  Defender: "DEF",
  Midfielder: "MID",
  Goalkeeper: "GCK",
};

export const allPlayersState = selector({
  key: "allPlayersState",
  get: async () => {
    try {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/players?league=4&season=2020&page=2",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "49ebf285acmsh021f8634355a7d7p1b67dejsn95db9dce3536",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          },
        }
      );

      const json = await response.json();

      return json.response.map((entry) => ({
        id: entry.player.id,
        name: entry.player.name,
        match: "SDS v ZCC",
        price: 11_300_000,
        position: pos2pos[entry.statistics[0].games.position],
        totalPoints: 29,
      }));
    } catch (e) {
      console.log(e);
      return [];
    }
  },
});

export const positionFilterState = atom({
  key: "positionFilterState",
  default: [] as string[],
});

export const filteredPlayers = selector({
  key: "filteredPlayers",
  get: ({ get }) => {
    const players = get(allPlayersState);
    const filters = get(positionFilterState);
    return players.filter(
      (player) => filters.length === 0 || filters.includes(player.position)
    );
  },
});
