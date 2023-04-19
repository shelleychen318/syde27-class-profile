import { getCoop } from "../../pages/api/co-op";
import { sortByDescendingValue } from "./sortFunctions";

export async function getSortedCoopData() {
  const data = await getCoop();
  const round = {};
  const jobPlatform = {};
  const jobType = {};
  const location = {};

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
  };
}
