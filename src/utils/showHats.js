export default function showHats(hatsForDraw) {
  console.log("Sesiri:");

  hatsForDraw.forEach((hat) => {
    console.log(`  Sesir ${hat.hatName}`);
    hat.teams.forEach((team) => {
      console.log("     ", team.name);
    });
  });
}
