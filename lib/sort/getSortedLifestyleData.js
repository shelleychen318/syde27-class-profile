import { getLifestyle } from "../../pages/api/lifestyle";

export async function getSortedLifestyleData() {
  const data = await getLifestyle();
  const sleepTime = {};
  const studyTime = {};
  const stress = {};
  const friends = {};
  const homeTime = {};
  const purity = {};

  const counts = {};

  const ranges = [
    { min: 3, max: 4 },
    { min: 5, max: 6 },
    { min: 7, max: 8 },
    { min: 9, max: 10 }
  ];


  for (var object in data) {
    // if (parseInt(data[object].sleepTime) in sleepTime) {
    //   sleepTime[parseInt(data[object].sleepTime)] += 1;
    // } else if (data[object].sleepTime != "") {
    //   sleepTime[parseInt(data[object].sleepTime)] = 1;
    // }

    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i];
      if (parseInt(data[object].sleepTime) >= range.min && parseInt(data[object].sleepTime) <= range.max) {
        if (!counts[range.min]) {
          counts[range.min] = 0;
        }
        counts[range.min]++;
        break;
      }
    }

    if (parseInt(data[object].studyTime) in studyTime) {
      studyTime[parseInt(data[object].studyTime)] += 1;
    } else if (data[object].studyTime != "") {
      studyTime[parseInt(data[object].studyTime)] = 1;
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

  const myObject = { "3-4": counts[3], "5-6": counts[5], "7-8": counts[7], "9+": counts[9]};

  const sleepTimes = Object.keys(myObject);
  const sleepTimeValues = Object.values(myObject);
  const sleepTimeRespondents = sleepTimeValues.reduce((a, b) => a + b, 0);

  // const sleepTimes = Object.keys(sleepTime);
  // const sleepTimeValues = Object.values(sleepTime);
  // const sleepTimeRespondents = sleepTimeValues.reduce((a, b) => a + b, 0);

  const studyTimes = Object.keys(studyTime);
  const studyTimeValues = Object.values(studyTime);
  const studyTimeRespondents = studyTimeValues.reduce((a, b) => a + b, 0);

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
    sleepTimes,
    sleepTimeValues,
    sleepTimeRespondents,
    studyTimes,
    studyTimeValues,
    studyTimeRespondents,
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
