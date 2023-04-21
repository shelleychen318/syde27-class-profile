import { getCoop } from "../../pages/api/co-op";
import { sortByDescendingValue, createBoxPlotData } from "./sortFunctions";

export async function getSortedCoopData() {
  const data = await getCoop();
  const round = {};
  const jobPlatform = {};
  const jobType = {};
  const location = {};
  const pay = [];
  // const payRanges = [
  //   { min: 17.0, max: 19.99 },
  //   { min: 20.0, max: 22.99 },
  //   { min: 23.0, max: 25.99 },
  //   { min: 26.0, max: 28.99 },
  //   { min: 29.0, max: 31.99 },
  //   { min: 32.0, max: 34.99 },
  // ];

  for (var object in data) {
    if (data[object].round in round) {
      round[data[object].round] += 1;
    } else if (data[object].round) {
      round[data[object].round] = 1;
    }

    if (data[object].jobPlatform in jobPlatform) {
      jobPlatform[data[object].jobPlatform] += 1;
    } else if (data[object].jobPlatform) {
      jobPlatform[data[object].jobPlatform] = 1;
    }

    if (data[object].jobType in jobType) {
      jobType[data[object].jobType] += 1;
    } else if (data[object].jobType) {
      jobType[data[object].jobType] = 1;
    }

    if (data[object].location in location) {
      location[data[object].location] += 1;
    } else if (data[object].location) {
      location[data[object].location] = 1;
    }

    // only count paid jobs
    // if (
    //   data[object].pay &&
    //   data[object].pay != 0 &&
    //   data[object].satisfaction
    // ) {
    //   for (let i = 0; i < payRanges.length; i++) {
    //     const range = payRanges[i];
    //     if (data[object].pay >= range.min && data[object].pay <= range.max) {
    //       // if range doesn't exist yet, insert the first value
    //       if (!pay[range.min]) {
    //         pay[range.min] = [data[object].satisfaction];
    //       }
    //       // if range already exists, append the value to the array
    //       else {
    //         pay[range.min].push(data[object].satisfaction);
    //       }
    //     }
    //     if (pay[range.min] == null) {
    //       pay[range.min] = 0;
    //     }
    //   }
    // }

    if (
      data[object].pay &&
      data[object].pay != 0 &&
      data[object].satisfaction
    ) {
      pay.push([data[object].pay, parseInt(data[object].satisfaction)]);
    }
  }

  const rounds = Object.keys(sortByDescendingValue(round));
  const roundValues = Object.values(sortByDescendingValue(round));
  const roundRespondents = roundValues.reduce((a, b) => a + b, 0);

  const jobPlatforms = Object.keys(sortByDescendingValue(jobPlatform));
  const jobPlatformValues = Object.values(sortByDescendingValue(jobPlatform));
  const jobPlatformRespondents = jobPlatformValues.reduce((a, b) => a + b, 0);

  const jobTypes = Object.keys(sortByDescendingValue(jobType));
  const jobTypeValues = Object.values(sortByDescendingValue(jobType));
  const jobTypeRespondents = jobTypeValues.reduce((a, b) => a + b, 0);

  const locations = Object.keys(sortByDescendingValue(location));
  const locationValues = Object.values(sortByDescendingValue(location));
  const locationRespondents = locationValues.reduce((a, b) => a + b, 0);

  const payRespondents = pay.length;
  console.log(pay);

  return {
    rounds,
    roundValues,
    roundRespondents,
    jobPlatforms,
    jobPlatformValues,
    jobPlatformRespondents,
    jobTypes,
    jobTypeValues,
    jobTypeRespondents,
    locations,
    locationValues,
    locationRespondents,
    pay,
    payRespondents,
  };
}
