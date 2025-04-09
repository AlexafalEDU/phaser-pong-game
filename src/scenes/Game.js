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
        this.ballInMotion = false;
        this.cursors = null;
        this.wasd = null;
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
        // this.add.image(WIDTH/2, HEIGHT/2, 'ball').setScale(0.05, 0.05);
        this.leftPaddle = this.add.image(50, 384, "paddle");
        this.rightPaddle = this.add.image(974, 384, "paddle");
        this.ball = this.physics.add.image(WIDTH/2, HEIGHT/2, 'ball').setScale(0.05, 0.05).refreshBody();
        this.ball.setCollideWorldBounds(true); //true, bounce when hit boundaries
        this.ball.setBounce(1,1); // 1, retains its full velocity after rebound

        // listen for "SPACE bar pressed", call startBall function upon press
        this.input.keyboard.on('keydown-SPACE', this.startBall, this);
        
        // assigns U D L R keys to the cursors variable
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // assigns W/S keys to wasd variable
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
        });

        

    }

    update() {
        // game logic
        // leftPaddle movement
        if (this.wasd.up.isDown) {
            this.leftPaddle.y -= 5;
        } else if (this.wasd.down.isDown) {
            this.leftPaddle.y += 5;
        }

        // Try rightPaddle movement
        if (this.cursors.up.isDown) {
            this.rightPaddle.y -= 5;
        } else if (this.cursors.down.isDown){
            this.rightPaddle.y += 5
        }
    }

    startBall() {
        // if (not ballInMotion), if the ball is not moving
        // when game start, if (not FALSE), if (TRUE)
        if (!this.ballInMotion) {
            this.ballInMotion = true;
            this.ball.setVelocity(200, 200);

        }
    }
}
