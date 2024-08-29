import { simulateMatch } from "../utils/index.js";

export default function eliminationPhaseSimulate(matchesToSimulate) {
  const teams = [];
  const finalTeams = [];
  const thirdPlaceTeams = [];

  console.log("Cetvrtfinalne utakmice:");
  matchesToSimulate.forEach((match) => {
    const result = simulateMatch(match.teamA, match.teamB);

    console.log(
      `      ${result.teamOne} - ${result.teamTwo} (${result.scoreOne}:${result.scoreTwo})`
    );

    const winner =
      result.scoreOne > result.scoreTwo ? match.teamA : match.teamB;

    teams.push(winner);
  });

  const semiFinalPairs = [
    [teams[0], teams[1]],
    [teams[2], teams[3]],
  ];

  console.log("\nPolufinalne utakmice:");
  semiFinalPairs.forEach((pair) => {
    const result = simulateMatch(pair[0], pair[1]);

    console.log(
      `      ${result.teamOne} - ${result.teamTwo} (${result.scoreOne}:${result.scoreTwo})`
    );

    const winner = result.scoreOne > result.scoreTwo ? pair[0] : pair[1];

    finalTeams.push(winner);

    const loser = result.scoreOne > result.scoreTwo ? pair[1] : pair[0];
    thirdPlaceTeams.push(loser);
  });

  console.log("\nMeč za treće mesto:");
  const thirdPlaceResult = simulateMatch(
    thirdPlaceTeams[0],
    thirdPlaceTeams[1]
  );

  console.log(
    `      ${thirdPlaceResult.teamOne} - ${thirdPlaceResult.teamTwo} (${thirdPlaceResult.scoreOne}:${thirdPlaceResult.scoreTwo})`
  );

  const bronzeMedalist =
    thirdPlaceResult.scoreOne > thirdPlaceResult.scoreTwo
      ? thirdPlaceTeams[0]
      : thirdPlaceTeams[1];

  console.log("\nFinalna utakmica:");
  const finalResult = simulateMatch(finalTeams[0], finalTeams[1]);
  console.log(
    `      ${finalResult.teamOne} - ${finalResult.teamTwo} (${finalResult.scoreOne}:${finalResult.scoreTwo})`
  );

  const champion =
    finalResult.scoreOne > finalResult.scoreTwo ? finalTeams[0] : finalTeams[1];
  const silverMedalist =
    finalResult.scoreOne > finalResult.scoreTwo ? finalTeams[1] : finalTeams[0];

  console.log("\nMedalje su osvojili sledeći timovi:");
  console.log(`    1. ${champion.name}`);
  console.log(`    2. ${silverMedalist.name}`);
  console.log(`    3. ${bronzeMedalist.name}\n`);
}
