import Fighter from './Fighter';

export default class ImprovedFighter extends Fighter {
    constructor(name: string, health: number = 2000, power: number = 10) {
        super(name, health, power);
      }
    
      doubleHit(enemy: Fighter, point): void {
        super.hit(enemy, point * 2);
      }
    }