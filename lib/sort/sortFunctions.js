export function sortByDescendingValue(obj) {
    const dataArray = Object.entries(obj);
    const sortedArray = dataArray.sort((a, b) => b[1] - a[1]);
    const sortedObj = Object.fromEntries(sortedArray);
    return sortedObj;
}
