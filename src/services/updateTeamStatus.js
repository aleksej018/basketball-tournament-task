export default function updateTeamStatus(teamOne, teamTwo, scoreOne, scoreTwo) {
  teamOne.pointsFor += scoreOne;
  teamOne.pointsAgainst += scoreTwo;
  teamOne.pointsDifference = teamOne.pointsFor - teamOne.pointsAgainst;

  teamTwo.pointsFor += scoreTwo;
  teamTwo.pointsAgainst += scoreOne;
  teamTwo.pointsDifference = teamTwo.pointsFor - teamTwo.pointsAgainst;

  scoreOne > scoreTwo
    ? (teamOne.wins++,
      teamTwo.losses++,
      (teamOne.points += 2),
      (teamTwo.points += 1))
    : (teamTwo.wins++,
      teamOne.losses++,
      (teamTwo.points += 2),
      (teamOne.points += 1));
}
