import { getHighschool } from '../../pages/api/highschool/index';

export async function getSortedHighschoolData() {
    const data = await getHighschool();
    const average = {};
    const extraNum = {};
    const extraType = {};
    const extraRole = {};
    const enrich = {};

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
    };
}