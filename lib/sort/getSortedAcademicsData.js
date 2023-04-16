import { getAcademics } from "../../pages/api/academics/index";
import {
  sortByDescendingValue, createBoxPlotData,
  getMaxRespondents,
} from "./sortFunctions";

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
  const highschoolAverage = {};
  const highschoolAverageRanges = [
    // { min: 89, max: 90 },
    { min: 91, max: 92 },
    { min: 93, max: 94 },
    { min: 95, max: 96 },
    { min: 97, max: 98 },
    { min: 99, max: 100 },
  ];
  const favCourse = {};
  const leastFavCourse = {};

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

    // check if high school and 1A average exist in the entry
    if (data[object].highschoolAverage != "" && data[object].uniAverage != "") {
      // iterate through highschool average ranges to find correct range for the value
      for (let i = 0; i < highschoolAverageRanges.length; i++) {
        const range = highschoolAverageRanges[i];
        if (
          data[object].highschoolAverage == range.min ||
          data[object].highschoolAverage == range.max
        ) {
          // if range doesn't exist yet, insert the first value
          if (!highschoolAverage[range.min]) {
            highschoolAverage[range.min] = [parseInt(data[object].uniAverage)];
          }
          // if range already exists, append the value to the array
          else {
            highschoolAverage[range.min].push(
              parseInt(data[object].uniAverage)
            );
          }
        }
        if (highschoolAverage[range.min] == null) {
          highschoolAverage[range.min] = 0;
        }
      }
    }

     if (data[object].favCourse in favCourse) {
       favCourse[data[object].favCourse] += 1;
     } else if (data[object].favCourse != "") {
       favCourse[data[object].favCourse] = 1;
     }

     if (data[object].leastFavCourse in leastFavCourse) {
       leastFavCourse[data[object].leastFavCourse] += 1;
     } else if (data[object].leastFavCourse != "") {
       leastFavCourse[data[object].leastFavCourse] = 1;
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
    console.log(key, enrich[key]);
  }

  let highschoolAverageRespondents = 0;
  for (let key in highschoolAverage) {
    highschoolAverageRespondents += highschoolAverage[key].length;
    highschoolAverage[key] = createBoxPlotData(highschoolAverage[key]);
    console.log(key, highschoolAverage[key]);
  }

  const favCourses = Object.keys(sortByDescendingValue(favCourse));
  const favCourseValues = Object.values(sortByDescendingValue(favCourse));
  const favCourseRespondents = favCourseValues.reduce((a, b) => a + b, 0);

  const leastFavCourses = Object.keys(sortByDescendingValue(leastFavCourse));
  const leastFavCourseValues = Object.values(
    sortByDescendingValue(leastFavCourse)
  );
  const leastFavCourseRespondents = leastFavCourseValues.reduce(
    (a, b) => a + b,
    0
  );

  return {
    uniAverages,
    uniAverageValues,
    uniAverageRespondents,
    enrich,
    enrichRespondents,
    highschoolAverage,
    highschoolAverageRespondents,
    favCourses,
    favCourseValues,
    leastFavCourses,
    leastFavCourseValues,
    leastFavCourseRespondents,
    favCourseRespondents,
  };
}
