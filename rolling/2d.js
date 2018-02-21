const TILE_SIZE = 30, SIZE = 15 * TILE_SIZE, HALF_PI = Math.PI / 2, STEP = HALF_PI / TILE_SIZE, FPS = 1000 / 60,
	  ROT_OFFSET = TILE_SIZE / 5, NORMAL = 0, BREAKABLE = 1, TNT = 2, SPIKE = 3;

class Game {
	constructor() {
		let canvas = document.createElement('canvas');
		canvas.width = canvas.height = SIZE;
		document.body.appendChild(canvas);
		this.ctx = canvas.getContext('2d');
		this.level_x = 0;
		
		this.level = new Level();
		this.player = new Player(this.level);
 		this.bg = new Background();

		this.speed = 0.1;
		this.moving = false;
		this.lastTime = performance.now();

		window.addEventListener("keydown", ()=>this.moving = true);
	}

	loop() {
		let now = performance.now();    
		let delta = (now - this.lastTime);
		let s = 0;
		if(delta > FPS) {
			this.lastTime = now - (delta % FPS);
			if(this.moving) {
				s = this.speed * delta;
				this.level_x += s;
				if(this.level_x > TILE_SIZE) {
					this.level_x = 0;
					this.level.slice();
					this.moving = false;
				}
				this.player.update(s);
			}

			this.ctx.clearRect(0, 0, SIZE, SIZE);

			this.bg.draw(this.ctx, -s);

			this.level.draw(this.ctx, this.level_x);
			this.player.draw(this.ctx);
		}
		requestAnimationFrame(() => this.loop());
	}
}

function init() {
	let game = new Game();
	game.loop();
}