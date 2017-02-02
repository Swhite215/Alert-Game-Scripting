var heroName = prompt("Welcome to Tranquility's Genesis! What is your heroes name?");

alert("Our is " + heroName + " with 15Hp tasked with defeating the dreaded 30hp Ogre!");

var ready = prompt("Are you ready to fight? Yes or No");

if (ready === "Yes") {
  var heroHp = 15;
  var enemyHp = 30;
  while (ready === "Yes") {
    while (heroHp > 0 && enemyHp > 0) {
      var action = prompt("Will you attack or defend?");
      if (action === "attack") {
        var chance = Math.floor(Math.random()*4 + 1);
        if (chance <= 3) {
          var chance = Math.floor(Math.random()*4 + 1);
          if (chance >= 3) {
           enemyHp -= 6;
           heroHp -= 3;
           alert("You did 6 damage and the Ogre is at " + enemyHp + "health");
           alert("The ogre attacks you, dealing 3 damage! Your health is now " + heroHp);
          } else {
          enemyHp -= 3;
          heroHp -= 3;
          alert("You did 3 damage and the Ogre is at " + enemyHp + "health");
          alert("The ogre attacks you, dealing 3 damage! Your health is now " + heroHp);
          }
        } else {
          heroHp -= 3;
          alert("You missed and the Ogre is at " + enemyHp + "health");
          alert("The ogre attacks you, dealing 3 damage! Your health is now " + heroHp);
        }
      } else if (action === "defend") {
        heroHp -= 1.5;
        alert("The ogre attacks you, dealing only 1.5 damage. Your health is now " + heroHp);
      } else if (action === "super") {
        enemyHp = 0;
        alert("You do your ultimate strike and drive your blade into the heart of your enemy.");
    }
  }
  }
  if (enemyHp === 0) {
    console.log(heroName + " has slayed the Ogre and receives all the riches!");
  } else if (heroHp === 0) {
    console.log(heroName + " has fallen. This is a sad day for the world. Pick up your swords warriors and try again!");
  }
} else {
  console.log("Come back when you are ready")
}
