function character (name, profession, age, strength, HitPoints){
    this.name = name;
    this.profession = profession; 
    this.age = age; 
    this.strength= strength; 
    this.HitPoints = HitPoints; 
}

var Hannah = new character ("Hannah", "Developer", 29, 100, 100)
var Mike = new character ("Mike", "Monster", 18, 80, 45)

character.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
    "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHit Points: " + this.HitPoints);
  };


Hannah.printStats();


character.prototype.IsAlive = function(){
    if (this.HitPoints > 0) {
        console.log("you're alive!");
      } else {
        console.log("you're dead!");
      }
}

Hannah.IsAlive()

character.prototype.Attack = function(charOne, charTwo){
    charTwo.strength - charTwo
}

