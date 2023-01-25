export class Perso {
    constructor(
    public life: number,
    public speed: number,
    public power: number,
    public accuracy: number,
    public imgUrl: string
    ) {}

    isAlive() {
        this.life > 0;
      }

    damage() {
        this.life -= 10;
    }
}
