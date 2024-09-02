import { simulateMatch, showResult } from "../utils/utils.js";

export default function eliminationPhaseSimulate(matchesToSimulate) {
  const teams = [];
  const finalTeams = [];
  const thirdPlaceTeams = [];

  console.log("Cetvrtfinalne utakmice:");
  matchesToSimulate.forEach((match) => {
    const result = simulateMatch(match.teamA, match.teamB);
    const winner =
      result.scoreOne > result.scoreTwo ? match.teamA : match.teamB;
    teams.push(winner);

    showResult(result);
  });

  const semiFinalPairs = [
    [teams[0], teams[1]],
    [teams[2], teams[3]],
  ];

  console.log("\nPolufinalne utakmice:");
  semiFinalPairs.forEach((pair) => {
    const result = simulateMatch(pair[0], pair[1]);
    const winner = result.scoreOne > result.scoreTwo ? pair[0] : pair[1];
    finalTeams.push(winner);
    const loser = result.scoreOne > result.scoreTwo ? pair[1] : pair[0];
    thirdPlaceTeams.push(loser);

    showResult(result);
  });

  console.log("\nMeč za treće mesto:");
  const thirdPlaceResult = simulateMatch(
    thirdPlaceTeams[0],
    thirdPlaceTeams[1]
  );
  const bronzeMedalist =
    thirdPlaceResult.scoreOne > thirdPlaceResult.scoreTwo
      ? thirdPlaceTeams[0]
      : thirdPlaceTeams[1];

  showResult(thirdPlaceResult);

  console.log("\nFinalna utakmica:");
  const finalResult = simulateMatch(finalTeams[0], finalTeams[1]);
  showResult(finalResult);

  const champion =
    finalResult.scoreOne > finalResult.scoreTwo ? finalTeams[0] : finalTeams[1];
  const silverMedalist =
    finalResult.scoreOne > finalResult.scoreTwo ? finalTeams[1] : finalTeams[0];

  console.log("\nMedalje su osvojili sledeći timovi:");
  console.log(`    1. ${champion.name}`);
  console.log(`    2. ${silverMedalist.name}`);
  console.log(`    3. ${bronzeMedalist.name}\n`);
}
