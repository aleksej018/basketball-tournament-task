export default function showGroupResults(groups) {
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
