import {
  generateRandomScore,
  calculateProbability,
  updateTeamStatus,
} from "./index.js";

export default function simulateMatch(teamOne, teamTwo) {
  const probabilityTeamOneWins = calculateProbability(
    teamOne.fibaRank,
    teamTwo.fibaRank
  );

  const [scoreOne, scoreTwo] = generateRandomScore(probabilityTeamOneWins);

  updateTeamStatus(teamOne, teamTwo, scoreOne, scoreTwo);

  return {
    teamOne: teamOne.name,
    teamTwo: teamTwo.name,
    scoreOne,
    scoreTwo,
  };
}
