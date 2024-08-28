const TeamModel = (name, isoCode, fibaRank) => {
  return {
    name,
    isoCode,
    fibaRank,
    points: 0,
    wins: 0,
    losses: 0,
    concededPoints: 0,
    pointsFor: 0,
    pointsAgainst: 0,
    pointsDifference: 0,
  };
};

export default TeamModel;
