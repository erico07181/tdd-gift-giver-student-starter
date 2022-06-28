const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static async pairs(names) {
    console.log("here");

    if (names.length % 2 === 1) {
      throw new BadRequestError("Names array must be even");
    }
    const namedPairs = [];
    while (names.length) {
      const currentPair = [];
      while (currentPair.length < 2 && names.length > 0) {
        const selectedNameIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[selectedNameIndex];
        names.splice(selectedNameIndex, 1);
        currentPair.push(selectedName);
      }
      namedPairs.push(currentPair);
    }
    return namedPairs;
  }
  static async traditional(names) {
    let nameArr = names.names;
    let newArray = [];
    let firstIndex = Math.floor(Math.random() * nameArr.length);
    let firstName = nameArr[firstIndex];
    let lastChosen = firstName;
    nameArr.splice(firstIndex, 1);
    while (nameArr.length > 0) {
      let newInd = Math.floor(Math.random() * nameArr.length);
      let newChosen = nameArr[newInd];
      newArray.push(`${lastChosen} is giving a gift to ${newChosen}`);
      lastChosen = newChosen;
      nameArr.splice(newInd, 1);
    }
    newArray.push(`${lastChosen} is giving a gift to ${firstName}`);
    return newArray;
  }
}
module.exports = GiftExchange;
