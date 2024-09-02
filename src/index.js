import { groupData, exhibitionsData } from "./data/index.js";
import { TeamModel, GroupModel } from "./models/index.js";
import {
  groupPhaseSimulate,
  assignRanks,
  drawPhaseSimulate,
  eliminationPhaseSimulate,
} from "./services/index.js";
import { showGroupResults } from "./utils/utils.js";

const groups = Object.entries(groupData).map(([groupName, teams]) => {
  const group = new GroupModel({ name: groupName });

  teams.forEach((teamData) => {
    teamData.group = groupName;
    const team = new TeamModel(teamData);

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
