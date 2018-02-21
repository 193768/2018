

class Player {
	constructor(lvl) {
		this.img = new Image();
		this.ang = 0;
		this.jumped = false;
		this.lvl = lvl;

		let c = document.createElement('canvas');
		c.width = TILE_SIZE;
		c.height = TILE_SIZE;
		let tt = c.getContext("2d");
	
		tt.fillStyle = "yellow";
		tt.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
		tt.fillStyle = "black";
		tt.lineWidth = 2;
		tt.strokeRect(0, 0, TILE_SIZE, TILE_SIZE);

		this.img.src = c.toDataURL();
		this.x = TILE_SIZE * 4;
		this.y = this.lvl.getTile(4).y - TILE_SIZE - 0.5;
	}

	draw(ctx) {
		let hst = TILE_SIZE >> 1;
		ctx.save();
		ctx.translate(this.x + hst, this.y + hst);
		ctx.rotate(this.ang);
		ctx.drawImage(this.img, -hst, -hst);
		ctx.restore();
	}

	update(s) {
		if(this.jumped) {
			this.y = this.lvl.getTile(5).y - TILE_SIZE - 0.5;
		}
		this.ang += STEP * s; 
		if(this.ang > HALF_PI) {
			this.ang = 0;
			this.jumped = false;
			if(this.lvl.getTile(5).y - TILE_SIZE < ~~this.y) {
				this.jumped = true;
				this.y = this.lvl.getTile(4).y - ROT_OFFSET * Math.sin(2 * this.ang) - TILE_SIZE - 0.5;
				return;
			}
		}
		let t = this.jumped ? 5 : 4;
		this.y = this.lvl.getTile(t).y - ROT_OFFSET * Math.sin(2 * this.ang) - TILE_SIZE - 0.5;
	}
}