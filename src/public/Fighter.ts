// Create class Fighter
import FighterInterface from './FighterInterface';

export default class Fighter implements FighterInterface {

    readonly name: string;
    health: number;
    power: number;
    
    constructor(name: string, health: number, power: number) {

      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    private setDamage(damage: number): void {
      this.health -= damage;
      console.log(`${this.name}'s health: ${this.health}`);
    }
  
    hit(enemy: Fighter, point: number): void {
      let damage = point * this.power;
      enemy.setDamage(damage);
    }
  
    knockout(): Promise<Fighter> {
      console.log(`${this.name} in knockout`);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("time is over");
          resolve(this);
        }, 500);
      });
    }
  }
  