import { getLifestyle } from "../../pages/api/lifestyle";

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
  const stress = {};
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

    if (parseInt(data[object].stress) in stress) {
      stress[parseInt(data[object].stress)] += 1;
    } else if (data[object].stress != "") {
      stress[parseInt(data[object].stress)] = 1;
    }

    if (parseInt(data[object].friends) in friends) {
      friends[parseInt(data[object].friends)] += 1;
    } else if (data[object].friends != "") {
      friends[parseInt(data[object].friends)] = 1;
    }

    if (parseInt(data[object].homeTime) in homeTime) {
      homeTime[parseInt(data[object].homeTime)] += 1;
    } else if (data[object].homeTime != "") {
      homeTime[parseInt(data[object].homeTime)] = 1;
    }

    for (let i = 0; i < purityRanges.length; i++) {
      const range = purityRanges[i];
      if (
        data[object].purity != "" &&
        data[object].purity >= range.min &&
        data[object].purity <= range.max
      ) {
        if (!purity[range.min]) {
          purity[range.min] = 0;
        }
        purity[range.min]++;
        break;
      }
    }

    // if there are no values for a specific range, set it to zero
    for (let i = 0; i < purityRanges.length; i++) {
      const range = purityRanges[i];
      if (purity[range.min] == null) {
        purity[range.min] = 0;
      }
    }
  }

  const studyObject = {
    "1-2": studyTime[1],
    "3-4": studyTime[3],
    "5-6": studyTime[5],
    "7-8": studyTime[7],
    "9+": studyTime[9],
  };
  const studyTimes = Object.keys(studyObject);
  const studyTimeValues = Object.values(studyObject);
  const studyTimeRespondents = studyTimeValues.reduce((a, b) => a + b, 0);

  const sleepObject = {
    "3-4": sleepTime[3],
    "5-6": sleepTime[5],
    "7-8": sleepTime[7],
    "9+": sleepTime[9],
  };
  const sleepTimes = Object.keys(sleepObject);
  const sleepTimeValues = Object.values(sleepObject);
  const sleepTimeRespondents = sleepTimeValues.reduce((a, b) => a + b, 0);

  const stressLevels = Object.keys(stress);
  const stressLevelValues = Object.values(stress);
  const stressLevelRespondents = stressLevelValues.reduce((a, b) => a + b, 0);

  const friendsCount = Object.keys(friends);
  const friendsValues = Object.values(friends);
  const friendsRespondents = friendsValues.reduce((a, b) => a + b, 0);

  const homeTimes = Object.keys(homeTime);
  const homeTimeValues = Object.values(homeTime);
  const homeTimeRespondents = homeTimeValues.reduce((a, b) => a + b, 0);

  const purityObject = {
    "0-10": purity[0],
    "11-20": purity[11],
    "21-30": purity[21],
    "31-40": purity[31],
    "41-50": purity[41],
    "51-60": purity[51],
    "61-70": purity[61],
    "71-80": purity[71],
    "81-90": purity[81],
    "91-100": purity[91],
  };
  const purities = Object.keys(purityObject);
  const purityValues = Object.values(purityObject);
  const purityRespondents = purityValues.reduce((a, b) => a + b, 0);

  return {
    studyTimes,
    studyTimeValues,
    studyTimeRespondents,
    sleepTimes,
    sleepTimeValues,
    sleepTimeRespondents,
    stressLevels,
    stressLevelValues,
    stressLevelRespondents,
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
