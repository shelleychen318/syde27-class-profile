import { getAcademics } from "../../pages/api/academics/index";
import { createBoxPlotData } from "./sortFunctions";

export async function getSortedAcademicsData() {
  const data = await getAcademics();
  const uniAverage = {};
  const uniAverageRanges = [
    { min: 65, max: 69 },
    { min: 70, max: 74 },
    { min: 75, max: 79 },
    { min: 80, max: 84 },
    { min: 85, max: 89 },
    { min: 90, max: 94 },
    { min: 95, max: 100 },
  ];
  const enrich = {};

  for (var object in data) {
    for (let i = 0; i < uniAverageRanges.length; i++) {
      const range = uniAverageRanges[i];
      if (
        data[object].uniAverage != "" &&
        data[object].uniAverage >= range.min &&
        data[object].uniAverage <= range.max
      ) {
        if (!uniAverage[range.min]) {
          uniAverage[range.min] = 0;
        }
        uniAverage[range.min]++;
        break;
      }
      if (uniAverage[range.min] == null) {
        uniAverage[range.min] = 0;
      }
    }

    if (data[object].enrich != "" && data[object].uniAverage != "") {
      if (data[object].enrich in enrich) {
        enrich[data[object].enrich].push(parseInt(data[object].uniAverage));
      } else if (data[object].enrich != "") {
        enrich[data[object].enrich] = [parseInt(data[object].uniAverage)];
      }
    }
  }

  const uniAverageObject = {
    "65-69": uniAverage[65],
    "70-74": uniAverage[70],
    "75-79": uniAverage[75],
    "80-84": uniAverage[80],
    "85-89": uniAverage[85],
    "90-94": uniAverage[90],
    "95-100": uniAverage[95],
  };
  const uniAverages = Object.keys(uniAverageObject);
  const uniAverageValues = Object.values(uniAverageObject);
  const uniAverageRespondents = uniAverageValues.reduce((a, b) => a + b, 0);

  let enrichRespondents = 0;
  for (let key in enrich) {
    enrichRespondents += enrich[key].length;
    enrich[key] = createBoxPlotData(enrich[key]);
    console.log(key, enrich[key])
  }

  return {
    uniAverages,
    uniAverageValues,
    uniAverageRespondents,
    enrich,
    enrichRespondents,
  };
}
