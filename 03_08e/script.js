/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    console.log("The lid status is now", this.lidOpen);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    console.log(
      "New strap lengths just dropped: Left is now",
      this.strapLength.left,
      "and the right is",
      this.strapLength.right
    );
  },
  newVolume: function (volumeResult) {
    this.volume = volumeResult;
    console.log("The volume is now", this.volume);
  },
  newColor: function (colorResult) {
    this.color = colorResult;
    console.log("The color is now", this.color);
  },
  newPocketNum: function (pocketNumResult) {
    this.pocketNum = pocketNumResult;
    console.log("The number of pockets is now", this.pocketNum);
  },
};

console.log("The backpack object:", backpack);

backpack.toggleLid(true);
backpack.newStrapLength(10, 50);
backpack.newVolume(80);
backpack.newColor("aqua");
backpack.newPocketNum(1);

/*
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Left before:", backpack.strapLength.left);

backpack.newStrapLength(10, 15);

console.log("Left after:", backpack.strapLength.left);
*/
