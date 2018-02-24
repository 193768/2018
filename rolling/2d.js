const TILE_SIZE = 30, SIZE = 15 * TILE_SIZE, HALF_PI = Math.PI / 2, STEP = HALF_PI / TILE_SIZE, FPS = 1000 / 60,
	  ROT_OFFSET = TILE_SIZE / 5, NORMAL = 0, BREAKABLE = 1, TNT = 2, SPIKE = 3, DELTA_TIME = 1 / 60;

	  let CONTEXT;

	  let canvas;
class Game {
	constructor() {
		 canvas = document.createElement('canvas');
		canvas.width = canvas.height = SIZE;
		document.body.appendChild(canvas);
		this.ctx = canvas.getContext('2d');
		this.level_x = 0;
		
		Promise.all([
			this.bg = new Background(),
			this.level = new Level(),
			this.player = new Player(this.level),
		]).then(() => {
			this.loop(0);
		});

		this.speed = 230;
		this.moving = false;
		this.lastTime = 0;
		this.accumulator = 0;

		window.addEventListener("keydown", ()=>this.moving = true);
		this.loop = (time) => {
			this.accumulator += (time - this.lastTime) / 1000;
			while(this.accumulator > DELTA_TIME) {
				this.moveFrame();
				this.draw();
				this.accumulator -= DELTA_TIME;
			}
			this.lastTime = time;
			requestAnimationFrame(this.loop);
		}
	}

	moveFrame() {
		if(this.moving) {
			let s = this.speed * DELTA_TIME;
			this.level_x += s;
			if(this.level_x > TILE_SIZE) {
				this.level_x = 0;
				this.level.slice();
				this.moving = false;
			}
			this.player.update(s);
			this.bg.update(-s);
		}
	}
	
	draw() {
		this.ctx.clearRect(0, 0, SIZE, SIZE);
		this.bg.draw(this.ctx);
		this.level.draw(this.ctx, this.level_x);
		this.player.draw(this.ctx);
	}
}