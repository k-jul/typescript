import Fighter from "./Fighter";
import ImprovedFighter from "./ImprovedFighter"
import fight from "./fight"

const fighter = new Fighter('John', 1000, 10);
const improvedFighter = new ImprovedFighter('Bob', 400);


fight(fighter, improvedFighter, 5, 10, 10, 10)
  .then(looser => {
    const winner = fighter.name === looser.name ? improvedFighter : fighter;
    console.log(`========================= ${winner.name} won! ===============================`);
  })