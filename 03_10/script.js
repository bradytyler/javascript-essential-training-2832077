/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const secondaryPack = new Backpack(
  "Secondary Backpack",
  40,
  "aqua",
  30,
  15,
  15,
  true
);

console.log("The everydayPack object:", everydayPack);
console.log("The secondaryPack object:", secondaryPack);

//console.log("The pocketNum value:", everydayPack.pocketNum);
