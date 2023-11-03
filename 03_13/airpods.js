class Airpods {
  constructor(
    name,
    color,
    caseBattery,
    leftBudBat,
    rightBudBat,
    inUse,
    dateAcquired
  ) {
    this.name = name;
    this.color = color;
    this.caseBattery = caseBattery;
    this.airpodBattery = {
      leftBud: leftBudBat,
      rightBud: rightBudBat,
    };
    this.inUse = inUse;
    this.dateAcquired = dateAcquired;
  }
  inUse(useStatus) {
    this.inUse = useStatus;
    console.log("The AirPods are in use:", this.inUse);
  }
  airpodAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 2));
    return daysSinceAcquired;
  }
}

export default Airpods;
