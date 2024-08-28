const GroupModel = (name, team) => {
  return {
    name,
    teams: [],

    addTeam(team) {
      if (team?.name) {
        this.teams.push(team);
      } else {
        throw new Error("Error");
      }
    },
  };
};

export default GroupModel;
