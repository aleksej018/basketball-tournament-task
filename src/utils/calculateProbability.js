export default function calculateProbability(teamOneRanking, teamTwoRanking) {
  const rankingDifference = teamOneRanking - teamTwoRanking;
  return 1 / (1 + Math.pow(10, rankingDifference / 400));
}
