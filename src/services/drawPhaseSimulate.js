import { showHats } from "../utils/index.js";

export default function drawPhaseSimulate(teams) {
  const quarterFinals = [];
  const hatsForDraw = [
    { hatName: "D", teams: [] },
    { hatName: "E", teams: [] },
    { hatName: "F", teams: [] },
    { hatName: "G", teams: [] },
  ];

  teams.passingTeams.forEach((team) => {
    if (team.rank <= 2) {
      hatsForDraw[0].teams.push(team);
    } else if (team.rank <= 4) {
      hatsForDraw[1].teams.push(team);
    } else if (team.rank <= 6) {
      hatsForDraw[2].teams.push(team);
    } else {
      hatsForDraw[3].teams.push(team);
    }
  });

  function getRandomTeam(teams) {
    const index = Math.floor(Math.random() * teams.length);
    return teams[index];
  }

  function formQuarterFinalPairs(hatA, hatB) {
    while (hatA.teams.length > 0 && hatB.teams.length > 0) {
      const teamA = getRandomTeam(hatA.teams);
      let teamB = getRandomTeam(hatB.teams);

      while (teamA.group === teamB.group && hatB.teams.length > 0) {
        teamB = getRandomTeam(hatB.teams);
      }

      quarterFinals.push({ teamA, teamB });

      hatA.teams = hatA.teams.filter((team) => team !== teamA);
      hatB.teams = hatB.teams.filter((team) => team !== teamB);
    }
  }

  showHats(hatsForDraw);
  formQuarterFinalPairs(hatsForDraw[0], hatsForDraw[3]);
  formQuarterFinalPairs(hatsForDraw[1], hatsForDraw[2]);

  console.log("");
  console.log(
    `Eliminaciona faza turnira:
      ${quarterFinals[0].teamA.name} - ${quarterFinals[0].teamB.name}\n` +
      `      ${quarterFinals[1].teamA.name} - ${quarterFinals[1].teamB.name}\n\n` +
      `      ${quarterFinals[2].teamA.name} - ${quarterFinals[2].teamB.name}\n` +
      `      ${quarterFinals[3].teamA.name} - ${quarterFinals[3].teamB.name}`
  );
}
