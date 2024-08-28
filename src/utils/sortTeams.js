export default function sortTeamsByPoints(teams) {
  return teams.sort(
    (a, b) => b.points - a.points || b.pointsDifference - a.pointsDifference
  );
}
