import { getLife } from '../../pages/api/lifestyle/index';

export async function getSortedLifeData() {
    const data = await getLife();
    const friends = {};

    for (var object in data) {
        if (data[object].friends == '') { console.log('0'); }
        else {
            if (parseInt(data[object].friends) in friends) { friends[parseInt(data[object].friends)] += 1 }
            else if (data[object].friends != '') { friends[parseInt(data[object].friends)] = 1 }
        }
    }

    const friend = Object.keys(friends)
    const friendsValues = Object.values(friends)
    const friendsRespondents = friendsValues.reduce((a, b) => a + b, 0);

    return {
        friend,
        friendsValues,
        friendsRespondents,
    };
}