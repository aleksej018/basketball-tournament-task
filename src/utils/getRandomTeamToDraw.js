export default function getRandomTeamToDraw(teams) {
  const index = Math.floor(Math.random() * teams.length);
  return teams[index];
}
