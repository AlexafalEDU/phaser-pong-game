import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');

        // create variable
        this.ball = null;
        this.leftPaddle = null;
        this.rightPaddle = null;
    }

    preload() {
        // load assets like images
        this.load.image('background', 'assets/background.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('paddle', 'assets/paddle.png');
    }

    create() {
        // initialize game
        // this.add.image(x, y, key);
        this.add.image(WIDTH/2, HEIGHT/2, 'background').setScale(0.8, 0.8);
        this.add.image(WIDTH/2, HEIGHT/2, 'ball').setScale(0.05, 0.05);
        this.leftPaddle = this.add.image(50, 384, "paddle");
        this.rightPaddle = this.add.image(974, 384, "paddle");
    }

    update() {
        // game logic
    }

}