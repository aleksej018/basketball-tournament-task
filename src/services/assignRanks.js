import { rankTeams } from "../utils/index.js";

export default function assignRanks(groups) {
  const topTeams = { first: [], second: [], third: [] };

  groups.forEach((group) => {
    const teams = group.teams;

    topTeams.first.push(teams[0]);
    topTeams.second.push(teams[1]);
    topTeams.third.push(teams[2]);
  });

  const rankedFirst = rankTeams(topTeams.first);
  const rankedSecond = rankTeams(topTeams.second);
  const rankedThird = rankTeams(topTeams.third);

  const finalRanks = [
    ...rankedFirst.map((team, index) => ({ ...team, rank: index + 1 })),
    ...rankedSecond.map((team, index) => ({ ...team, rank: index + 4 })),
    ...rankedThird.map((team, index) => ({ ...team, rank: index + 7 })),
  ];
  const passingTeams = finalRanks.slice(0, 8);

  return { passingTeams };
}
