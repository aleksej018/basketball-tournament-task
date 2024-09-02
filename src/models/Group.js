class GroupModel {
  constructor(data) {
    this.name = data.name;
    this.teams = [];
  }

  addTeam(team) {
    if (!team?.name) {
      throw new Error("Error: Invalid team");
    }
    this.teams.push(team);
  }
}

export default GroupModel;
