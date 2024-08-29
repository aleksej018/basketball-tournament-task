import getRandomTeamToDraw from "./getRandomTeamToDraw.js";

export default function formQuarterFinalPairs(hatA, hatB) {
  const quarterFinals = [];
  while (hatA.teams.length > 0 && hatB.teams.length > 0) {
    const teamA = getRandomTeamToDraw(hatA.teams);
    let teamB = getRandomTeamToDraw(hatB.teams);

    while (teamA.group === teamB.group && hatB.teams.length > 0) {
      teamB = getRandomTeamToDraw(hatB.teams);
    }

    quarterFinals.push({ teamA, teamB });

    hatA.teams = hatA.teams.filter((team) => team !== teamA);
    hatB.teams = hatB.teams.filter((team) => team !== teamB);
  }

  return quarterFinals;
}
