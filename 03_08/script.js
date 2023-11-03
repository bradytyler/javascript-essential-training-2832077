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
    console.log("The lid open status is now", backpack.lidOpen);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log(
  "Before Values - Left Strap:",
  backpack.strapLength.left,
  "| Right Strap:",
  backpack.strapLength.right
);

backpack.newStrapLength(13, 15);

console.log(
  "After Values - Left Strap:",
  backpack.strapLength.left,
  "| Right Strap:",
  backpack.strapLength.right
);
