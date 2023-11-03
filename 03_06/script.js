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
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

/*
console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Strap length left:", backpack.strapLength.left);

var query = "pocketNum";
console.log("The pocketNum value:", backpack[query]);
*/

// Brady's Objects

const airpods = {
  name: "Brady's AirPod Pro Headphones",
  color: "white",
  caseBattery: 0.8,
  airpodBattery: {
    leftBud: 1,
    rightBud: 0.9,
  },
  inUse: false,
  toggleUse: function (useStatus) {
    this.inUse = useStatus;
  },
};

console.log("AirPod Usage Status:", airpods.inUse);
