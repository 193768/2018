
class Level {
	constructor() {
		this.start = SIZE >> 1;
		this.stretch = 0;
		this.arr = [];

		for(let c = 0; c < 8; c++) {
			this.arr.push({y:this.start, type:NORMAL});
		}

		this.fill();
	}

	slice() { this.arr = this.arr.slice(1); }

	getTile(n) { return this.arr[n]; }

	fill() {
		let dir = Math.random() > 0.5 ? 1 : -1;
		let min = SIZE / 3,
			max = SIZE - min;
			
		for(let c = 0; c < 200 - this.arr.length; c++) {
			let t = {y:this.start, type:NORMAL};
			let r = Math.random();
			if(r < 0.1) t.type = TNT;
			else if(r < 0.3) t.type = SPIKE;
			else if(r < 0.5) t.type = BREAKABLE;
			this.arr.push(t);
			this.stretch++;
			if(this.stretch > 3 && this.stretch / 10 > Math.random()) {
				this.start += (TILE_SIZE) * dir;
				this.stretch = 0;
				dir = Math.random() > 0.6 ? -dir : dir;
				if(this.start > max) dir = -1;
				if(this.start < min) dir = 1;
			}
		}
	}

	draw(ctx, lx) {
		if(this.arr.length < 100) {
			this.fill();
		}
		let fs;
		for(let c = 0; c < SIZE / TILE_SIZE + 1; c++) {
			let t = this.arr[c];
			switch(t.type) {
				case NORMAL: fs = "dodgerBlue"; break;
				case BREAKABLE: fs = "indigo"; break;
				case TNT: fs = "#e60000"; break;
				case SPIKE: fs = "gray"; break;
			}
			
			ctx.fillStyle = fs;
			ctx.fillRect(c * TILE_SIZE - lx, t.y, TILE_SIZE, TILE_SIZE);
			ctx.fillStyle = "black";
			ctx.strokeRect(c * TILE_SIZE - lx, t.y, TILE_SIZE, TILE_SIZE);
		}
	}
}