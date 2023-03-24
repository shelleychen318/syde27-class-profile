import { getLifestyle } from "../../pages/api/lifestyle/index";

export async function getSortedLifestyleData() {
  const data = await getLifestyle();
  const friends = {};

  for (var object in data) {
    if (parseInt(data[object].friends) in friends) {
      friends[parseInt(data[object].friends)] += 1;
    } else if (data[object].friends != "") {
      friends[parseInt(data[object].friends)] = 1;
    }
  }

  const friendscount = Object.keys(friends);
  const friendsValues = Object.values(friends);
  const friendsRespondents = friendsValues.reduce((a, b) => a + b, 0);

  return {
    friendscount,
    friendsValues,
    friendsRespondents,
  };
}
