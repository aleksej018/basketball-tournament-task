export function showResult(result) {
  console.log(
    `      ${result.teamOne} - ${result.teamTwo} (${result.scoreOne}:${result.scoreTwo})`
  );
}

export function calculateProbability(teamOneRanking, teamTwoRanking) {
  const rankingDifference = teamOneRanking - teamTwoRanking;
  return 1 / (1 + Math.pow(10, rankingDifference / 400));
}

export function generateRandomScore(probability) {
  const baseScoreTeam1 = Math.floor(Math.random() * 30) + 80;
  const baseScoreTeam2 = Math.floor(Math.random() * 15) + 63;

  const scoreAdjustment = Math.floor(
    Math.random() * 10 * (1 - Math.abs(0.5 - probability))
  );

  const finalScoreTeam1 = baseScoreTeam1 + scoreAdjustment;
  const finalScoreTeam2 = baseScoreTeam2 + scoreAdjustment;

  if (Math.random() < 0.3 && probability > 0.4 && probability < 0.6) {
    return [finalScoreTeam2, finalScoreTeam1];
  }

  return [finalScoreTeam1, finalScoreTeam2];
}

export function updateTeamStatus(teamOne, teamTwo, scoreOne, scoreTwo) {
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

export function simulateMatch(teamOne, teamTwo) {
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

export function sortTeamsByPoints(teams) {
  return teams.sort(
    (a, b) => b.points - a.points || b.pointsDifference - a.pointsDifference
  );
}

export function showGroupResults(groups) {
  groups.forEach((group) => {
    console.log(
      `Grupa ${group.name} (Ime   -    pobede/porazi/bodovi/postignuti koševi/primljeni koševi/koš razlika):`
    );

    group.teams.forEach((team, index) => {
      console.log(
        `\t${index + 1}. ${team.name.padEnd(12, " ")}                    ${
          team.wins
        } / ${team.losses} / ${team.points} / ${team.pointsFor} / ${
          team.pointsAgainst
        } / ${team.pointsFor - team.pointsAgainst}`
      );
    });

    console.log("");
  });
}

export function showHats(hatsForDraw) {
  console.log("Sesiri:");

  hatsForDraw.forEach((hat) => {
    console.log(`  Sesir ${hat.hatName}`);
    hat.teams.forEach((team) => {
      console.log("     ", team.name);
    });
  });
}

export function getRandomTeamToDraw(teams) {
  const index = Math.floor(Math.random() * teams.length);
  return teams[index];
}

export function rankTeams(teams) {
  return teams.sort(
    (a, b) =>
      b.points - a.points ||
      b.pointsDifference - a.pointsDifference ||
      b.pointsFor - a.pointsFor
  );
}

export function formQuarterFinalPairs(hatA, hatB) {
  const quarterFinals = [];
  while (hatA.teams.length > 0 && hatB.teams.length > 0) {
    const teamA = getRandomTeamToDraw(hatA.teams);
    let teamB = getRandomTeamToDraw(hatB.teams);

    while (teamA.group === teamB.group && hatB.teams.length > 0) {
      teamB = getRandomTeamToDraw(hatB.teams);
    }

    quarterFinals.push({ teamA, teamB });

    hatA.teams = hatA.teams.filter((team) => team !== teamA);
    hatB.teams = hatB.teams.filter((team) => team !== teamB);
  }

  return quarterFinals;
}
