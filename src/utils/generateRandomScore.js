export default function generateRandomScore(probability) {
  const baseScoreTeam1 = Math.floor(Math.random() * 30) + 80;
  const baseScoreTeam2 = Math.floor(Math.random() * 15) + 63;

  const scoreAdjustment = Math.floor(
    Math.random() * 10 * (1 - Math.abs(0.5 - probability))
  );

  const finalScoreTeam1 = baseScoreTeam1 + scoreAdjustment;
  const finalScoreTeam2 = baseScoreTeam2 + scoreAdjustment;

  if (Math.random() < 0.3 && probability > 0.4 && probability < 0.6) {
    return [finalScoreTeam2, finalScoreTeam1];
  } else {
    return [finalScoreTeam1, finalScoreTeam2];
  }
}
