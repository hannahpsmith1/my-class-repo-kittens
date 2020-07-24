class Character {
    constructor(name, strength, hitpoints){
      if (!name){
        throw new Error("you are missing a name");
      }
      if (!strength){
        throw new Error("you are missing strength");
      }
      if (!hitpoints){
        throw new Error("you are missing hitpoints");
      }
      this.name = name;
      this.stength= strength;
      this.hitpoints = hitpoints;
    }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitpoints <=0){
      console.log (`${this.name} has died`);
      return false;
    }
    return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    console.log( ${this.hitpoints} - ${this.strength});
    opponent.hitpoints -= this.strength;
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
const mike = new Character ("Mike", 78, 7);
const randal = new Character ("Randal", 86, 5);

// Create an interval that alternates attacks every 2000 milliseconds
