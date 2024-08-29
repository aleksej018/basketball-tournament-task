import { groupData, exhibitionsData } from "./data/index.js";
import { TeamModel, GroupModel } from "./models/index.js";
import {
  groupPhaseSimulate,
  assignRanks,
  drawPhaseSimulate,
  eliminationPhaseSimulate,
} from "./services/index.js";
import { showGroupResults } from "./utils/index.js";

const groups = Object.entries(groupData).map(([groupName, teams]) => {
  const group = GroupModel(groupName);

  teams.forEach((teamData) => {
    const team = TeamModel(
      teamData.Team,
      teamData.ISOCode,
      teamData.FIBARanking,
      (teamData.group = groupName)
    );
    group.addTeam(team);
  });

  return group;
});

groups.forEach((group) => {
  groupPhaseSimulate(group);
});

showGroupResults(groups);
console.log(
  "-------------------------------------------------------------------------------"
);
const teamsForDraw = assignRanks(groups);
const matchesToSimulate = drawPhaseSimulate(teamsForDraw);
console.log(
  "-------------------------------------------------------------------------------"
);
eliminationPhaseSimulate(matchesToSimulate);
