import { showHats, formQuarterFinalPairs } from "../utils/utils.js";

export default function drawPhaseSimulate(teams) {
  const { passingTeams } = teams;
  let quarterFinalsPairs = [];
  const hatsForDraw = [
    { hatName: "D", teams: passingTeams.slice(0, 2) },
    { hatName: "E", teams: passingTeams.slice(2, 4) },
    { hatName: "F", teams: passingTeams.slice(4, 6) },
    { hatName: "G", teams: passingTeams.slice(6, 8) },
  ];

  showHats(hatsForDraw);
  quarterFinalsPairs = [
    ...formQuarterFinalPairs(hatsForDraw[0], hatsForDraw[3]),
    ...formQuarterFinalPairs(hatsForDraw[1], hatsForDraw[2]),
  ];

  console.log("");
  console.log(
    `Eliminaciona faza turnira:
      ${quarterFinalsPairs[0].teamA.name} - ${quarterFinalsPairs[0].teamB.name}\n` +
      `      ${quarterFinalsPairs[1].teamA.name} - ${quarterFinalsPairs[1].teamB.name}\n\n` +
      `      ${quarterFinalsPairs[2].teamA.name} - ${quarterFinalsPairs[2].teamB.name}\n` +
      `      ${quarterFinalsPairs[3].teamA.name} - ${quarterFinalsPairs[3].teamB.name}`
  );

  return quarterFinalsPairs;
}
