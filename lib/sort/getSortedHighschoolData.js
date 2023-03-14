import { getHighschool } from '../../pages/api/highschool/index';

export async function getSortedHighschoolData() {
    const data = await getHighschool();
    const average = {};
    const extraNum = {};
    const extraType = {};
    const extraRole = {};
    const enrich = {};
    const postChoices = {};
    const sydeBool = {};
    const topChoice = {};
    const consider = {};
    const decision = {};
    const prepare = {};


    for (var object in data) {
        if (data[object].average in average) { average[data[object].average] += 1 } 
        else if (data[object].average != '') { average[data[object].average] = 1 }

        if (data[object].extraNum in extraNum) { extraNum[data[object].extraNum] += 1 } 
        else if (data[object].extraNum != '') { extraNum[data[object].extraNum] = 1 }

        if (data[object].extraType in extraType) { extraType[data[object].extraType] += 1 } 
        else if (data[object].extraType != '') { extraType[data[object].extraType] = 1 }

        if (data[object].extraRole in extraRole) { extraRole[data[object].extraRole] += 1 } 
        else if (data[object].extraRole != '') { extraRole[data[object].extraRole] = 1 }

        if (data[object].enrich in enrich) { enrich[data[object].enrich] += 1 } 
        else if (data[object].enrich != '') { enrich[data[object].enrich] = 1 }

        if (data[object].postChoices in postChoices) { postChoices[data[object].postChoices] += 1 } 
        else if (data[object].postChoices != '') { postChoices[data[object].postChoices] = 1 }

        if (data[object].sydeBool in sydeBool) { sydeBool[data[object].sydeBool] += 1 } 
        else if (data[object].sydeBool != '') { sydeBool[data[object].sydeBool] = 1 }

        if (data[object].topChoice in topChoice) { topChoice[data[object].topChoice] += 1 } 
        else if (data[object].topChoice != '') { topChoice[data[object].topChoice] = 1 }

        if (data[object].consider in consider) { consider[data[object].consider] += 1 } 
        else if (data[object].consider != '') { consider[data[object].consider] = 1 }

        if (data[object].decision in decision) { decision[data[object].decision] += 1 } 
        else if (data[object].decision != '') { decision[data[object].decision] = 1 }

        if (data[object].prepare in prepare) { prepare[data[object].prepare] += 1 } 
        else if (data[object].prepare != '') { prepare[data[object].prepare] = 1 }
    }
    
    const averages = Object.keys(average)
    const averageValues = Object.values(average)
    const averageRespondents = averageValues.reduce((a, b) => a+b, 0)

    const extracurricularNum = Object.keys(extraNum)
    const extraNumValues = Object.values(extraNum)
    const extraNumRespondents = extraNumValues.reduce((a, b) => a+b, 0)

    const extracurricularType = Object.keys(extraType);
    const extraTypeValues = Object.values(extraType);
    const extraTypeRespondents = extraTypeValues.reduce((a, b) => a + b, 0);

    const extraRoles = Object.keys(extraRole);
    const extraRoleValues = Object.values(extraRole);
    const extraRoleRespondents = extraRoleValues.reduce((a, b) => a + b, 0);

    const enrichs = Object.keys(enrich);
    const enrichValues = Object.values(enrich);
    const enrichRespondents = enrichValues.reduce((a, b) => a + b, 0);

    const postChoice = Object.keys(postChoices);
    const postChoicesValues = Object.values(postChoices);
    const postChoicesRespondents = postChoicesValues.reduce((a, b) => a + b, 0);

    const sydeBools = Object.keys(sydeBool);
    const sydeBoolValues = Object.values(sydeBool);
    const sydeBoolRespondents = sydeBoolValues.reduce((a, b) => a + b, 0);

    const topChoices = Object.keys(topChoice);
    const topChoiceValues = Object.values(topChoice);
    const topChoiceRespondents = topChoiceValues.reduce((a, b) => a + b, 0);

    const considers = Object.keys(consider);
    const considerValues = Object.values(consider);
    const considerRespondents = considerValues.reduce((a, b) => a + b, 0);

    const decisions = Object.keys(decision);
    const decisionValues = Object.values(decision);
    const decisionRespondents = decisionValues.reduce((a, b) => a + b, 0);

    const preparation = Object.keys(prepare);
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
      extraRoles,
      extraRoleValues,
      extraRoleRespondents,
      enrichs,
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