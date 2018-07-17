
export default interface FighterInterface {

    name: string;
    health: number;
    power: number;
    setDamage(damage:number);
    hit(enemy: Object, point: number[])
}