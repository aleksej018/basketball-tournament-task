import { sortTeamsByPoints, simulateMatch } from "../utils/index.js";

export default function simulateGroupPhase(group) {
  const matchSchedule = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  const results = [];

  matchSchedule.forEach((schedule, roundIndex) => {
    console.log(`Grupa ${group.name} - Kolo ${roundIndex + 1}:`);

    const roundResults = [];

    for (let i = 0; i < schedule.length; i += 2) {
      const teamOne = group.teams[schedule[i]];
      const teamTwo = group.teams[schedule[i + 1]];

      const matchResult = simulateMatch(teamOne, teamTwo);

      roundResults.push(matchResult);
      console.log(
        `${teamOne.name} - ${teamTwo.name} (${matchResult.scoreOne}:${matchResult.scoreTwo})`
      );
    }

    results.push(roundResults);
    console.log("");
  });

  const sortedTeams = sortTeamsByPoints(group.teams);
  group.teams = sortedTeams;

  return { groupName: group.name, results, sortedTeams };
}
