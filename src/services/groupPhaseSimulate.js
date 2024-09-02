import { sortTeamsByPoints, simulateMatch } from "../utils/utils.js";

export default function simulateGroupPhase(group) {
  const matchSchedule = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  const results = matchSchedule.map((schedule, roundIndex) => {
    console.log(`Grupa ${group.name} - Kolo ${roundIndex + 1}:`);

    const roundResults = schedule
      .map((teamIndex, i) => {
        if (i % 2 === 0) {
          const teamOne = group.teams[teamIndex];
          const teamTwo = group.teams[schedule[i + 1]];

          const matchResult = simulateMatch(teamOne, teamTwo);
          console.log(
            `${teamOne.name} - ${teamTwo.name} (${matchResult.scoreOne}:${matchResult.scoreTwo})`
          );

          return matchResult;
        }
        return null;
      })
      .filter(Boolean);

    console.log("");
    return roundResults;
  });

  const sortedTeams = sortTeamsByPoints(group.teams);
  group.teams = sortedTeams;

  return { groupName: group.name, results, sortedTeams };
}
