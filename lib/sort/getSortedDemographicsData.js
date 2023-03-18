import { getDemographics } from '../../pages/api/demographics/index';

export async function getSortedDemographicsData() {
  const data = await getDemographics();
  const gender = {};
  const sexuality = {};
  const ethnicity = {};
  const ethnicityUnique = {};
  
  const religion = {};
  const religionUnique = {};
  const hometown = {};

  for (var object in data) {

    if (data[object].gender in gender) { gender[data[object].gender] += 1 }
    else if (data[object].gender != '') { gender[data[object].gender] = 1 }

    if (data[object].sexuality in sexuality) { sexuality[data[object].sexuality] += 1 }
    else if (data[object].sexuality != '') { sexuality[data[object].sexuality] = 1 }

    for (let i = 0; i < data[object].ethnicity.split(", ").length; i++) {
      if (data[object].ethnicity.split(", ")[i] in ethnicityUnique) {
        ethnicityUnique[data[object].ethnicity.split(", ")[i]] += 1;
      } else if (data[object].ethnicity.split(", ")[i] != "") {
        ethnicityUnique[data[object].ethnicity.split(", ")[i]] = 1;
      }
    }

    for (let i = 0; i < data[object].religion.split(", ").length; i++) {
      if (data[object].religion.split(", ")[i] in religionUnique) {
        religionUnique[data[object].religion.split(", ")[i]] += 1;
      } else if (data[object].religion.split(", ")[i] != "") {
        religionUnique[data[object].religion.split(", ")[i]] = 1;
      }
    }
    if (data[object].ethnicity in ethnicity) { ethnicity[data[object].ethnicity] += 1 }
    else if (data[object].ethnicity != '') { ethnicity[data[object].ethnicity] = 1 }

    if (data[object].religion in religion) { religion[data[object].religion] += 1 }
    else if (data[object].religion != '') { religion[data[object].religion] = 1 }

    if (data[object].hometown in hometown) { hometown[data[object].hometown] += 1 }
    else if (data[object].hometown != '') { hometown[data[object].hometown] = 1 }
  }

  const genders = Object.keys(gender)
  const genderValues = Object.values(gender)
  const genderRespondents = genderValues.reduce((a, b) => a + b, 0)

  const sexualities = Object.keys(sexuality)
  const sexualityValues = Object.values(sexuality)
  const sexualityRespondents = sexualityValues.reduce((a, b) => a + b, 0)

  const ethnicityUniques = Object.keys(ethnicityUnique);
  const ethnicityValues = Object.values(ethnicityUnique);
  const ethnicityValue = Object.values(ethnicity);
  const ethnicityRespondents = ethnicityValue.reduce((a, b) => a + b, 0);

  const religionUniques = Object.keys(religionUnique);
  const religionValue = Object.values(religion);
  const religionValues = Object.values(religionUnique);
  const religionRespondents = religionValue.reduce((a, b) => a + b, 0);

  const hometowns = Object.keys(hometown);
  const hometownValues = Object.values(hometown);
  const hometownRespondents = hometownValues.reduce((a, b) => a + b, 0);

  return {
    genders,
    genderValues,
    genderRespondents,
    sexualities,
    sexualityValues,
    sexualityRespondents,
    ethnicityValues,
    ethnicityUniques,
    ethnicityRespondents,
    religionValues,
    religionUniques,
    religionRespondents,
    hometowns,
    hometownValues,
    hometownRespondents,
  };
}