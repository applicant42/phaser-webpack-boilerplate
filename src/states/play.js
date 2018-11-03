class statePlay extends Phaser.State {
  constructor(game) {
    super(game);
  }

  create() {
    this.sprite = this.game.add.sprite(100, 100, 'logo');

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN,
      Phaser.Keyboard.SPACEBAR
    ]);
  }

  update() {
    const speed = 10;

    if (this.cursors.up.isDown) {
      this.sprite.y -= speed;
    }
    else if (this.cursors.down.isDown) {
      this.sprite.y += speed;
    }
    else if (this.cursors.left.isDown) {
      this.sprite.x -= speed;
    }
    else if (this.cursors.right.isDown) {
      this.sprite.x += speed;
    }
  }

  render() {

    this.game.debug.cameraInfo(this.camera, 15, 15);
  }
}

export default statePlay;
