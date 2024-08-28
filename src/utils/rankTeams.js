export default function rankTeams(teams) {
  return teams.sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    if (a.pointsDifference !== b.pointsDifference)
      return b.pointsDifference - a.pointsDifference;
    return b.pointsFor - a.pointsFor;
  });
}
