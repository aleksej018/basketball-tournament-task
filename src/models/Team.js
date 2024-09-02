class TeamModel {
  constructor(data) {
    this.name = data.Team;
    this.isoCode = data.ISOCode;
    this.fibaRank = data.FIBARanking;
    this.group = data.group;
    this.points = 0;
    this.wins = 0;
    this.losses = 0;
    this.concededPoints = 0;
    this.pointsFor = 0;
    this.pointsAgainst = 0;
    this.pointsDifference = 0;
    this.rank = 0;
  }
}

export default TeamModel;
