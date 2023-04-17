import { getHighschool } from "../../pages/api/highschool";
import { sortByDescendingValue, insertMissingKeys } from "./sortFunctions";

export async function getSortedHighschoolData() {
  const data = await getHighschool();
  const average = {};
  const extraNum = {};
  const extraType = {};
  const extraTypeNum = {};
  const extraRole = {};
  const extraRoleUnique = {};
  const enrich = {};
  const enrichUnique = {};
  const postChoices = {};
  const sydeBool = {};
  const topChoice = {};
  const consider = {};
  const decision = {};
  const prepare = {};

  for (var object in data) {
    if (!isNaN(data[object].average)) {
      if (parseInt(data[object].average) in average) {
        average[parseInt(data[object].average)] += 1;
      } else if (data[object].average) {
        average[parseInt(data[object].average)] = 1;
      }
    }

    if (data[object].extraNum == "") {
    } else if (data[object].extraNum != "5+") {
      if (parseInt(data[object].extraNum) in extraNum) {
        extraNum[parseInt(data[object].extraNum)] += 1;
      } else if (parseInt(data[object].extraNum)) {
        extraNum[parseInt(data[object].extraNum)] = 1;
      }
    } else if (data[object].extraNum == "5+") {
      if (data[object].extraNum in extraNum) {
        extraNum[data[object].extraNum] += 1;
      } else if (data[object].extraNum) {
        extraNum[data[object].extraNum] = 1;
      }
    }

    for (let i = 0; i < data[object].extraType.split(", ").length; i++) {
      if (data[object].extraType.split(", ")[i] in extraType) {
        extraType[data[object].extraType.split(", ")[i]] += 1;
      } else if (data[object].extraType.split(", ")[i]) {
        extraType[data[object].extraType.split(", ")[i]] = 1;
      }
    }

    if (data[object].extraType in extraTypeNum) {
      extraTypeNum[data[object].extraType] += 1;
    } else if (data[object].extraType) {
      extraTypeNum[data[object].extraType] = 1;
    }

    for (let i = 0; i < data[object].extraRole.split(", ").length; i++) {
      if (data[object].extraRole.split(", ")[i] in extraRoleUnique) {
        extraRoleUnique[data[object].extraRole.split(", ")[i]] += 1;
      } else if (data[object].extraRole.split(", ")[i]) {
        extraRoleUnique[data[object].extraRole.split(", ")[i]] = 1;
      }
    }

    if (data[object].extraRole in extraRole) {
      extraRole[data[object].extraRole] += 1;
    } else if (data[object].extraRole) {
      extraRole[data[object].extraRole] = 1;
    }

    for (let i = 0; i < data[object].enrich.split(", ").length; i++) {
      if (data[object].enrich.split(", ")[i] in enrichUnique) {
        enrichUnique[data[object].enrich.split(", ")[i]] += 1;
      } else if (data[object].enrich.split(", ")[i]) {
        enrichUnique[data[object].enrich.split(", ")[i]] = 1;
      }
    }

    if (data[object].enrich in enrich) {
      enrich[data[object].enrich] += 1;
    } else if (data[object].enrich) {
      enrich[data[object].enrich] = 1;
    }

    for (let i = 0; i < data[object].postChoices.split(", ").length; i++) {
      if (data[object].postChoices.split(", ")[i] in postChoices) {
        postChoices[data[object].postChoices.split(", ")[i]] += 1;
      } else if (data[object].postChoices.split(", ")[i]) {
        postChoices[data[object].postChoices.split(", ")[i]] = 1;
      }
    }

    if (data[object].sydeBool in sydeBool) {
      sydeBool[data[object].sydeBool] += 1;
    } else if (data[object].sydeBool) {
      sydeBool[data[object].sydeBool] = 1;
    }

    if (data[object].topChoice in topChoice) {
      topChoice[data[object].topChoice] += 1;
    } else if (data[object].topChoice) {
      topChoice[data[object].topChoice] = 1;
    }

    if (data[object].consider in consider) {
      consider[data[object].consider] += 1;
    } else if (data[object].consider) {
      consider[data[object].consider] = 1;
    }

    if (data[object].decision in decision) {
      decision[data[object].decision] += 1;
    } else if (data[object].decision) {
      decision[data[object].decision] = 1;
    }

    if (parseInt(data[object].prepare) in prepare) {
      prepare[parseInt(data[object].prepare)] += 1;
    } else if (data[object].prepare) {
      prepare[parseInt(data[object].prepare)] = 1;
    }
  }

  insertMissingKeys(average);
  const averages = Object.keys(average);
  const averageValues = Object.values(average);
  const averageRespondents = averageValues.reduce((a, b) => a + b, 0);

  const extracurricularNum = Object.keys(extraNum);
  const extraNumValues = Object.values(extraNum);
  const extraNumRespondents = extraNumValues.reduce((a, b) => a + b, 0);

  const extracurricularType = Object.keys(sortByDescendingValue(extraType));
  const extraTypeValues = Object.values(sortByDescendingValue(extraType));

  const extraTypeValueNum = Object.values(extraTypeNum);
  const extraTypeRespondents = extraTypeValueNum.reduce((a, b) => a + b, 0);

  const extraRoleUniques = Object.keys(sortByDescendingValue(extraRoleUnique));
  const extraRoleValues = Object.values(sortByDescendingValue(extraRole));
  const extraRoleRespondents = extraRoleValues.reduce((a, b) => a + b, 0);

  const enrichUniques = Object.keys(sortByDescendingValue(enrichUnique));
  const enrichValues = Object.values(sortByDescendingValue(enrich));
  const enrichRespondents = enrichValues.reduce((a, b) => a + b, 0);

  const postChoice = Object.keys(postChoices);
  const postChoicesValues = Object.values(postChoices);
  const postChoicesRespondents = postChoicesValues.reduce((a, b) => a + b, 0);

  const sydeBools = Object.keys(sortByDescendingValue(sydeBool));
  const sydeBoolValues = Object.values(sortByDescendingValue(sydeBool));
  const sydeBoolRespondents = sydeBoolValues.reduce((a, b) => a + b, 0);

  const topChoices = Object.keys(topChoice);
  const topChoiceValues = Object.values(topChoice);
  const topChoiceRespondents = topChoiceValues.reduce((a, b) => a + b, 0);

  const considers = Object.keys(consider);
  const considerValues = Object.values(consider);
  const considerRespondents = considerValues.reduce((a, b) => a + b, 0);

  const decisionObject = {
    "Before Grade 9": decision["Before grade 9"],
    "Grade 9": decision["Grade 9"],
    "Grade 10": decision["Grade 10"],
    "Grade 11": decision["Grade 11"],
    "Grade 12": decision["Grade 12"],
  };
  const decisions = Object.keys(decisionObject);
  const decisionValues = Object.values(decisionObject);
  const decisionRespondents = decisionValues.reduce((a, b) => a + b, 0);

  const preparation = Object.keys(prepare).sort();
  const prepareValues = Object.values(prepare);
  const prepareRespondents = prepareValues.reduce((a, b) => a + b, 0);

  return {
    averages,
    averageValues,
    averageRespondents,
    extracurricularNum,
    extraNumValues,
    extraNumRespondents,
    extracurricularType,
    extraTypeValues,
    extraTypeRespondents,
    extraRoleUniques,
    extraRoleValues,
    extraRoleRespondents,
    enrichUniques,
    enrichValues,
    enrichRespondents,
    postChoice,
    postChoicesValues,
    postChoicesRespondents,
    sydeBools,
    sydeBoolValues,
    sydeBoolRespondents,
    topChoices,
    topChoiceValues,
    topChoiceRespondents,
    considers,
    considerValues,
    considerRespondents,
    decisions,
    decisionValues,
    decisionRespondents,
    preparation,
    prepareValues,
    prepareRespondents,
  };
}
