import { getLifestyle } from "../../pages/api/lifestyle";

export async function getSortedLifestyleData() {
  const data = await getLifestyle();
  const studyTimeCounts = {};
  const studyTimeRanges = [
    { min: 1, max: 2 },
    { min: 3, max: 4 },
    { min: 5, max: 6 },
    { min: 7, max: 8 },
    { min: 9, max: 10 },
  ];
  const sleepTimeCounts = {};
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

  for (var object in data) {

    for (let i = 0; i < studyTimeRanges.length; i++) {
      const range = studyTimeRanges[i];
      if (
        parseInt(data[object].studyTime) >= range.min &&
        parseInt(data[object].studyTime) <= range.max
      ) {
        if (!studyTimeCounts[range.min]) {
          studyTimeCounts[range.min] = 0;
        }
        studyTimeCounts[range.min]++;
        break;
      }
    }

    for (let i = 0; i < sleepTimeRanges.length; i++) {
      const range = sleepTimeRanges[i];
      if (
        parseInt(data[object].sleepTime) >= range.min &&
        parseInt(data[object].sleepTime) <= range.max
      ) {
        if (!sleepTimeCounts[range.min]) {
          sleepTimeCounts[range.min] = 0;
        }
        sleepTimeCounts[range.min]++;
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

    if (parseInt(data[object].purity) in purity) {
      purity[parseInt(data[object].purity)] += 1;
    } else if (data[object].purity != "") {
      purity[parseInt(data[object].purity)] = 1;
    }
  }

  const studyObject = {
    "1-2": studyTimeCounts[1],
    "3-4": studyTimeCounts[3],
    "5-6": studyTimeCounts[5],
    "7-8": studyTimeCounts[7],
    "9+": studyTimeCounts[9],
  };
  const studyTimes = Object.keys(studyObject);
  const studyTimeValues = Object.values(studyObject);
  const studyTimeRespondents = studyTimeValues.reduce((a, b) => a + b, 0);

  const sleepObject = {
    "3-4": sleepTimeCounts[3],
    "5-6": sleepTimeCounts[5],
    "7-8": sleepTimeCounts[7],
    "9+": sleepTimeCounts[9],
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

  const purities = Object.keys(purity);
  const purityValues = Object.values(purity);
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
