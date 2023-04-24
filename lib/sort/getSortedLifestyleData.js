import { getLifestyle } from "../../pages/api/lifestyle";
import { sortByDescendingValue, insertMissingKeys } from "./sortFunctions";

export async function getSortedLifestyleData() {
  const data = await getLifestyle();
  const studyTime = {};
  const studyTimeRanges = [
    { min: 1, max: 2 },
    { min: 3, max: 4 },
    { min: 5, max: 6 },
    { min: 7, max: 8 },
    { min: 9, max: 10 },
  ];
  const sleepTime = {};
  const sleepTimeRanges = [
    { min: 3, max: 4 },
    { min: 5, max: 6 },
    { min: 7, max: 8 },
    { min: 9, max: 10 },
  ];
  const stress1A = {};
  const stressCoop = {};
  const exercise1A = {};
  const exerciseCoop = {};
  const residence = {};
  const friends = {};
  const homeTime = {};
  const purity = {};
  const purityRanges = [
    { min: 0, max: 10 },
    { min: 11, max: 20 },
    { min: 21, max: 30 },
    { min: 31, max: 40 },
    { min: 41, max: 50 },
    { min: 51, max: 60 },
    { min: 61, max: 70 },
    { min: 71, max: 80 },
    { min: 81, max: 90 },
    { min: 91, max: 100 },
  ];

  for (var object in data) {
    for (let i = 0; i < studyTimeRanges.length; i++) {
      const range = studyTimeRanges[i];
      if (
        data[object].studyTime >= range.min &&
        data[object].studyTime <= range.max
      ) {
        if (!studyTime[range.min]) {
          studyTime[range.min] = 0;
        }
        studyTime[range.min]++;
        break;
      }
    }

    for (let i = 0; i < sleepTimeRanges.length; i++) {
      const range = sleepTimeRanges[i];
      if (
        data[object].sleepTime >= range.min &&
        data[object].sleepTime <= range.max
      ) {
        if (!sleepTime[range.min]) {
          sleepTime[range.min] = 0;
        }
        sleepTime[range.min]++;
        break;
      }
    }

    if (data[object].residence in residence) {
      residence[data[object].residence] += 1;
    } else if (data[object].residence) {
      residence[data[object].residence] = 1;
    }

    if (parseInt(data[object].stress1A) in stress1A) {
      stress1A[parseInt(data[object].stress1A)] += 1;
    } else if (data[object].stress1A) {
      stress1A[parseInt(data[object].stress1A)] = 1;
    }

    if (parseInt(data[object].stressCoop) in stressCoop) {
      stressCoop[parseInt(data[object].stressCoop)] += 1;
    } else if (data[object].stressCoop) {
      stressCoop[parseInt(data[object].stressCoop)] = 1;
    }

    if (data[object].exercise1A in exercise1A) {
      exercise1A[data[object].exercise1A] += 1;
    } else if (data[object].exercise1A) {
      exercise1A[data[object].exercise1A] = 1;
    }

    if (data[object].exerciseCoop in exerciseCoop) {
      exerciseCoop[data[object].exerciseCoop] += 1;
    } else if (data[object].exerciseCoop) {
      exerciseCoop[data[object].exerciseCoop] = 1;
    }

    if (parseInt(data[object].friends) in friends) {
      friends[parseInt(data[object].friends)] += 1;
    } else if (data[object].friends) {
      friends[parseInt(data[object].friends)] = 1;
    }

    if (parseInt(data[object].homeTime) in homeTime) {
      homeTime[parseInt(data[object].homeTime)] += 1;
    } else if (data[object].homeTime) {
      homeTime[parseInt(data[object].homeTime)] = 1;
    }

    for (let i = 0; i < purityRanges.length; i++) {
      const range = purityRanges[i];
      if (
        data[object].purity &&
        data[object].purity >= range.min &&
        data[object].purity <= range.max
      ) {
        if (!purity[range.min]) {
          purity[range.min] = 0;
        }
        purity[range.min]++;
        break;
      }
      // if there are no values for a specific range, set it to zero
      if (purity[range.min] == null) {
        purity[range.min] = 0;
      }
    }
  }

  console.log(exercise1A);
  console.log(exerciseCoop);
  console.log(sleepTime);

  const studyTimes = ["1-2", "3-4", "5-6", "7-8", "9+"];
  const studyTimeValues = Object.values(studyTime);
  const studyTimeRespondents = studyTimeValues.reduce((a, b) => a + b, 0);

  const sleepTimes = ["3-4", "5-6", "7-8", "9+"];
  const sleepTimeValues = Object.values(sleepTime);
  const sleepTimeRespondents = sleepTimeValues.reduce((a, b) => a + b, 0);

  insertMissingKeys(stress1A, 1, Math.max(...Object.keys(stress1A)));
  const stressLevels1A = Object.keys(stress1A);
  const stressLevel1AValues = Object.values(stress1A);
  const stressLevel1ARespondents = stressLevel1AValues.reduce(
    (a, b) => a + b,
    0
  );

  const stressLevelsCoop = Object.keys(stressCoop);
  const stressLevelCoopValues = Object.values(stressCoop);
  const stressLevelCoopRespondents = stressLevelCoopValues.reduce(
    (a, b) => a + b,
    0
  );

  const residences = Object.keys(sortByDescendingValue(residence));
  const residenceValues = Object.values(sortByDescendingValue(residence));
  const residenceRespondents = residenceValues.reduce((a, b) => a + b, 0);

  const friendsCount = Object.keys(friends);
  const friendsValues = Object.values(friends);
  const friendsRespondents = friendsValues.reduce((a, b) => a + b, 0);

  const homeTimes = Object.keys(homeTime);
  const homeTimeValues = Object.values(homeTime);
  const homeTimeRespondents = homeTimeValues.reduce((a, b) => a + b, 0);

  const purities = [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
  ];
  const purityValues = Object.values(purity);
  const purityRespondents = purityValues.reduce((a, b) => a + b, 0);

  return {
    studyTimes,
    studyTimeValues,
    studyTimeRespondents,
    sleepTimes,
    sleepTimeValues,
    sleepTimeRespondents,
    stressLevels1A,
    stressLevel1AValues,
    stressLevel1ARespondents,
    stressLevelsCoop,
    stressLevelCoopValues,
    stressLevelCoopRespondents,
    residences,
    residenceValues,
    residenceRespondents,
    friendsCount,
    friendsValues,
    friendsRespondents,
    homeTimes,
    homeTimeValues,
    homeTimeRespondents,
    purities,
    purityValues,
    purityRespondents,
  };
}
