import { getAcademics } from '../../pages/api/academics/index';

export async function getSortedAcademicsData() {
    const data = await getAcademics();
    const average = {};

    for (var object in data) {
        if (data[object].average == '') { console.log('0'); }
        else {
            if (parseInt(data[object].average) in average) { average[parseInt(data[object].average)] += 1 }
            else if (data[object].average != '') { average[parseInt(data[object].average)] = 1 }
        }
    }

    const averages = Object.keys(average)
    const averageValues = Object.values(average)
    const averageRespondents = averageValues.reduce((a, b) => a + b, 0)

    return {
        averages,
        averageValues,
        averageRespondents,
    };
}