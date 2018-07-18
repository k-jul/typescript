import Fighter from './Fighter';

export default class ImprovedFighter extends Fighter {

    constructor(readonly name: string, health: number = 2000, power: number = 10) {
        super(name, health, power);
      }
    
      doubleHit(enemy: Fighter, point: number): void {
        super.hit(enemy, point * 2);
      }
    }