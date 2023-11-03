/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";
import Airpods from "./airpods.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const whiteAirpods = new Airpods(
  "Brady's AirPods",
  "white",
  0.75,
  1,
  1,
  false,
  "October 12, 2023 19:12:00 CST"
);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);

console.log("The airpods object:", whiteAirpods);
console.log("I've Had These Since...:", whiteAirpods.airpodAge());
