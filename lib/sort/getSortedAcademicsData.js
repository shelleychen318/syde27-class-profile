import { getAcademics } from "../../pages/api/academics/index";
import {
  sortByDescendingValue,
  createBoxPlotData,
  concatenateStringToKeys,
  sortByAscendingKey,
  insertMissingKeys,
} from "./sortFunctions";

export async function getSortedAcademicsData() {
  const data = await getAcademics();
  const uniAverage = {};
  const uniAverageRanges = [
    { min: 50, max: 54 },
    { min: 55, max: 59 },
    { min: 60, max: 64 },
    { min: 65, max: 69 },
    { min: 70, max: 74 },
    { min: 75, max: 79 },
    { min: 80, max: 84 },
    { min: 85, max: 89 },
    { min: 90, max: 94 },
    { min: 95, max: 100 },
  ];
  const enrich = {};
  const enrichUnique = {};
  const highschoolAverage = {};
  const highschoolAverageRanges = [
    // { min: 89, max: 90 },
    { min: 91, max: 92 },
    { min: 93, max: 94 },
    { min: 95, max: 96 },
    { min: 97, max: 98 },
    { min: 99, max: 100 },
  ];
  const averageDropoff = {};
  const favCourse = {};
  const leastFavCourse = {};
  const usefulCourse = {};
  const difficultCourse = {};
  const lecture = {
    10: 0,
    20: 0,
    30: 0,
    40: 0,
    50: 0,
    60: 0,
    70: 0,
    80: 0,
    90: 0,
    100: 0,
  };

  for (var object in data) {
    for (let i = 0; i < uniAverageRanges.length; i++) {
      const range = uniAverageRanges[i];
      if (
        data[object].uniAverage &&
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

    for (let i = 0; i < data[object].enrich.split(", ").length; i++) {
      if (data[object].enrich && data[object].uniAverage) {
        if (data[object].enrich.split(", ")[i] in enrichUnique) {
          enrichUnique[data[object].enrich.split(", ")[i]].push(
            parseInt(data[object].uniAverage)
          );
        } else if (data[object].enrich.split(", ")[i]) {
          enrichUnique[data[object].enrich.split(", ")[i]] = [
            parseInt(data[object].uniAverage),
          ];
        }
      }
    }

    if (data[object].enrich && data[object].uniAverage) {
      if (data[object].enrich in enrich) {
        enrich[data[object].enrich].push(parseInt(data[object].uniAverage));
      } else if (data[object].enrich != "") {
        enrich[data[object].enrich] = [parseInt(data[object].uniAverage)];
      }
    }

    // check if high school and 1A average exist in the entry
    if (data[object].highschoolAverage && data[object].uniAverage) {
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

    if (data[object].highschoolAverage && data[object].uniAverage) {
      const dropoff =
        parseInt(data[object].uniAverage) -
        parseInt(data[object].highschoolAverage);
      if (dropoff in averageDropoff) {
        averageDropoff[dropoff] += 1;
      } else {
        averageDropoff[dropoff] = 1;
      }
    }

    if (data[object].favCourse in favCourse) {
      favCourse[data[object].favCourse] += 1;
    } else if (data[object].favCourse) {
      favCourse[data[object].favCourse] = 1;
    }

    if (data[object].leastFavCourse in leastFavCourse) {
      leastFavCourse[data[object].leastFavCourse] += 1;
    } else if (data[object].leastFavCourse) {
      leastFavCourse[data[object].leastFavCourse] = 1;
    }

    if (data[object].usefulCourse in usefulCourse) {
      usefulCourse[data[object].usefulCourse] += 1;
    } else if (data[object].usefulCourse) {
      usefulCourse[data[object].usefulCourse] = 1;
    }

    if (data[object].difficultCourse in difficultCourse) {
      difficultCourse[data[object].difficultCourse] += 1;
    } else if (data[object].difficultCourse) {
      difficultCourse[data[object].difficultCourse] = 1;
    }

    if (parseFloat(data[object].lecture)) {
      lecture[parseFloat(data[object].lecture) * 100] += 1;
    }
  }

  const uniAverageObject = {
    "50-54": uniAverage[50],
    "55-59": uniAverage[55],
    "60-64": uniAverage[60],
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
  }
  for (let key in enrichUnique) {
    enrichUnique[key] = createBoxPlotData(enrichUnique[key]);
  }
    console.log(enrichUnique);


  let highschoolAverageRespondents = 0;
  for (let key in highschoolAverage) {
    highschoolAverageRespondents += highschoolAverage[key].length;
    highschoolAverage[key] = createBoxPlotData(highschoolAverage[key]);
  }

  insertMissingKeys(averageDropoff);
  const averageDropoffs = Object.keys(sortByAscendingKey(averageDropoff));
  const averageDropoffValues = Object.values(
    sortByAscendingKey(averageDropoff)
  );
  const averageDropoffRespondents = averageDropoffValues.reduce(
    (a, b) => a + b,
    0
  );

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

  const usefulCourses = Object.keys(sortByDescendingValue(usefulCourse));
  const usefulCourseValues = Object.values(sortByDescendingValue(usefulCourse));
  const usefulCourseRespondents = usefulCourseValues.reduce((a, b) => a + b, 0);

  const difficultCourses = Object.keys(sortByDescendingValue(difficultCourse));
  const difficultCourseValues = Object.values(
    sortByDescendingValue(difficultCourse)
  );
  const difficultCourseRespondents = difficultCourseValues.reduce(
    (a, b) => a + b,
    0
  );

  const lectures = Object.keys(concatenateStringToKeys(lecture, "%"));
  const lectureValues = Object.values(lecture);
  const lectureRespondents = lectureValues.reduce((a, b) => a + b, 0);

  return {
    uniAverages,
    uniAverageValues,
    uniAverageRespondents,
    enrichUnique,
    enrichRespondents,
    highschoolAverage,
    highschoolAverageRespondents,
    averageDropoffs,
    averageDropoffValues,
    averageDropoffRespondents,
    favCourses,
    favCourseValues,
    leastFavCourses,
    leastFavCourseValues,
    leastFavCourseRespondents,
    favCourseRespondents,
    usefulCourses,
    usefulCourseValues,
    usefulCourseRespondents,
    difficultCourses,
    difficultCourseValues,
    difficultCourseRespondents,
    lectures,
    lectureValues,
    lectureRespondents,
  };
}
