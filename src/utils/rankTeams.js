export default function rankTeams(teams) {
  return teams.sort(
    (a, b) =>
      b.points - a.points ||
      b.pointsDifference - a.pointsDifference ||
      b.pointsFor - a.pointsFor
  );
}
