import { groupMatchSimulate } from "./index.js";
import { sortTeamsByPoints } from "../utils/index.js";

export default function simulateGroupPhase(group) {
  group.teams.forEach((teamOne, indexOne) => {
    group.teams.forEach((teamTwo, indexTwo) => {
      indexOne < indexTwo && groupMatchSimulate(teamOne, teamTwo);
    });
  });

  return sortTeamsByPoints(group.teams);
}
