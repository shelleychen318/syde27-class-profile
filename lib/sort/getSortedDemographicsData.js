import { getDemographics } from '../../pages/api/demographics/index';

export async function getSortedDemographicsData() {
    const data = await getDemographics();
    const gender = {};
    const sexuality = {};
    const ethnicity = {};
    const religion = {};
    const hometown = {};

    for (var object in data) {
        if (data[object].gender in gender) { gender[data[object].gender] += 1 } 
        else if (data[object].gender != '') { gender[data[object].gender] = 1 }

        if (data[object].sexuality in sexuality) { sexuality[data[object].sexuality] += 1 } 
        else if (data[object].sexuality != '') { sexuality[data[object].sexuality] = 1 }

        if (data[object].ethnicity in ethnicity) { ethnicity[data[object].ethnicity] += 1 } 
        else if (data[object].ethnicity != '') { ethnicity[data[object].ethnicity] = 1 }

        if (data[object].religion in religion) { religion[data[object].religion] += 1 } 
        else if (data[object].religion != '') { religion[data[object].religion] = 1 }

        if (data[object].hometown in hometown) { hometown[data[object].hometown] += 1 } 
        else if (data[object].hometown != '') { hometown[data[object].hometown] = 1 }
    }
    
    const genders = Object.keys(gender)
    const genderValues = Object.values(gender)
    const genderRespondents = genderValues.reduce((a, b) => a+b, 0)

    const sexualities = Object.keys(sexuality)
    const sexualityValues = Object.values(sexuality)
    const sexualityRespondents = sexualityValues.reduce((a, b) => a+b, 0)

    const ethnicities = Object.keys(ethnicity);
    const ethnicityValues = Object.values(ethnicity);
    const ethnicityRespondents = ethnicityValues.reduce((a, b) => a + b, 0);

    const religions = Object.keys(religion);
    const religionValues = Object.values(religion);
    const religionRespondents = religionValues.reduce((a, b) => a + b, 0);

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
      ethnicities,
      ethnicityValues,
      ethnicityRespondents,
      religions,
      religionValues,
      religionRespondents,
      hometowns,
      hometownValues,
      hometownRespondents,
    };
}