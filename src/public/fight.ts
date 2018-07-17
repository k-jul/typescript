import Fighter from './Fighter';
import ImprovedFighter from './ImprovedFighter';

let roundNumber: number = 1;

export default async function fight(fighter: Fighter, improvedFighter: ImprovedFighter, ...points: number[]): Promise<Fighter> {
    for (let i = 0; i < points.length; i++) {
        if (fighter.health > 0 && improvedFighter.health > 0)
            console.log(
                `------------------------- round № ${roundNumber++} --------------------------------`
            );

        if (fighter.health <= 0) return await fighter.knockout();
        fighter.hit(improvedFighter, points[i]);

        if (improvedFighter.health <= 0) return await improvedFighter.knockout();
        improvedFighter.doubleHit(fighter, points[i]);
    }
    return fight(fighter, improvedFighter, ...points);
}