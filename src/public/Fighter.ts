// Create class Fighter
import FighterInterface from './FighterInterface';

export default class Fighter implements FighterInterface {

    name: string;
    health: number;
    power: number;
    
    constructor(name: string, health: number, power: number) {

      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    setDamage(damage: number): void {
      this.health -= damage;
      console.log(`${this.name}'s health: ${this.health}`);
    }
  
    hit(enemy: Fighter, point: any): void {
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
  