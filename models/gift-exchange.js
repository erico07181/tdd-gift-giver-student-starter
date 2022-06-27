class GiftExchange {
  static async pairs(names) {
    var used = [];
    var picks = [];
    pickpool = names.slice(0);
    if (names.length % 2 != 0) {
      return "Names must be even";
    } else {
      for (var i = 0; i < names.length; i++) {
        var random = Math.floor(Math.random() * pickpool.length);
        if (names[random] == names[i]) {
          picks.push(names[i] + picks[random++]);
          pickpool.splice(random++, 1);
        } else {
          picks.push(names[i] + pickpool[random]);
          pickpool.splice(random, 1);
        }
      }
    }
  }

  static async traditional(names) {}
}
