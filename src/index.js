import { groupData, exhibitionsData } from "./data/index.js";
import { TeamModel, GroupModel } from "./models/index.js";
import { groupPhaseSimulate } from "./services/index.js";
import { showGroupResults } from "./utils/index.js";

const groups = Object.entries(groupData).map(([groupName, teams]) => {
  const group = GroupModel(groupName);

  teams.forEach((teamData) => {
    const team = TeamModel(
      teamData.Team,
      teamData.ISOCode,
      teamData.FIBARanking
    );
    group.addTeam(team);
  });

  return group;
});

groups.forEach((group) => {
  groupPhaseSimulate(group);
});

showGroupResults(groups);
