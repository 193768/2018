
class Background {
    constructor() {
        this.width = 4 * SIZE;
        this.roughness = .1;
        let b = document.createElement("canvas"),
            c = document.createElement("canvas"),
            d = document.createElement("canvas");
        
        b.width = SIZE; c.width  = d.width  = this.width;
        b.height = c.height = d.height = SIZE;

        let t0 = b.getContext("2d"),
            t1 = c.getContext("2d"),
            t2 = d.getContext("2d");
        
        t1.fillStyle = "#2a0578";
        t2.fillStyle = "#060225";

        this.create(t0);

        this.generate(t1, 320, 320, true);
        this.generate(t1, 320, 320, false);
        this.generate(t2, 370, 370, true);
        this.generate(t2, 370, 370, false);
        
        this.img0 = new Image();
        this.img1 = new Image();
        this.img2 = new Image();

        this.x0 = this.x1 = this.x2 = 0;

        this.img0.src = b.toDataURL();
        this.img1.src = c.toDataURL();
        this.img2.src = d.toDataURL();
    }

    generate(cx, l, r, top) {
        let disp = 40, rough = .55;
		let h = [];
		h.push(l);
		h.push(((l + r) / 2) + (Math.random() < .5 ? -disp : disp));
		h.push(r);

		while(true) {
			if(disp < 6) break;
			disp *= rough;
			let r = 0;
			while(true) {
				let z = (h[r] + h[r + 1]) / 2;
				z += (Math.random() < .5 ? -disp : disp);
				h.splice(r + 1, 0, z);
				r += 2;
				if(r + 1 >= h.length) break;
			}
		}

        let step = this.width / (h.length - 1), x = 0;
        
        if(top) {
            cx.beginPath();
            cx.moveTo(x, h[0]);
            for(let t = 1; t < h.length; t++) {
                x += step;
                cx.lineTo(x, h[t]);
            }

            cx.lineTo(x, SIZE);
            cx.lineTo(0, SIZE);
            cx.closePath();
            cx.fill();
        } else {
            cx.beginPath();
            cx.moveTo(x, SIZE - h[0]);
            for(let t = 1; t < h.length; t++) {
                x += step;
                cx.lineTo(x, SIZE - h[t]);
            }

            cx.lineTo(x, 0);
            cx.lineTo(0, 0);
            cx.closePath();
            cx.fill();
        }
    }

    fillSqr(h, x1, y1, sz) {
        if(sz < 1) return;

        let x2 = x1 + sz, y2 = y1, x3 = x1, y3 = y1 + sz, x4 = x2, y4 = y3,
            md = (sz >> 1),
            disp = (Math.random() - .5) * (sz*2 / (SIZE * 2 * this.roughness)),
			s = (h[x1][y1] + h[x2][y2] + h[x3][y3] + h[x4][y4]) / 4 + disp,
			x = (x1 + x2) >> 1,
			y = (y1 + y3) >> 1;

		if(s < 0 ) s = 0;
		else if(s > 1) s = 1;
		h[x][y] = s;

        h[x][y1] = (s + h[x1][y1] + h[x2][y2] + h[x ][(y1 - md + SIZE) % SIZE]) / 4;
        h[x1][y] = (s + h[x1][y1] + h[x3][y3] + h[(x1 - md + SIZE) % SIZE][y ]) / 4;
        h[x][y3] = (s + h[x4][y4] + h[x3][y3] + h[x ][(y3 + md + SIZE) % SIZE]) / 4;
        h[x2][y] = (s + h[x4][y4] + h[x2][y2] + h[(x2 + md + SIZE) % SIZE][y ]) / 4;

        sz = sz >> 1;
		this.fillSqr(h, x1, y1, sz);
		this.fillSqr(h,  x, y1, sz);
		this.fillSqr(h, x1, y , sz);
		this.fillSqr(h,  x, y , sz);
	}

    create(cx) {
        let sz = 1 + Math.pow(2, Math.floor(Math.log2(SIZE) + .5));
		let h = Array(sz);
		for(let r = 0; r < sz; r++) {
			h[r] = Array(sz);
			h[r].fill(0);
		}

		sz--;
		h[0][0] = h[sz][0] = h[0][sz] = h[sz][sz] = Math.random();
		this.fillSqr(h, 0, 0, sz);

		for(let r = 0; r < SIZE; r++) {
			for(let c = 0; c < SIZE; c++) {
				let t = (h[c][r] * 200) % 256;
                cx.fillStyle = `rgba(${t}, ${t}, ${t}, .3)`;
                let z = c;
                for(let e = 0; e < 4; e++) {
                    cx.fillRect(z, r, 1, 1);
                    z += SIZE;
                }
			}
		}
    }

    update(st) {
        this.x0 += st / 8;
        this.x1 += st / 4;
        this.x2 += st / 2;
    }

    draw(ctx, p) {
        if(this.x0 < -SIZE) this.x0 = 0;
        ctx.drawImage(this.img0, this.x0, 0);

        if(this.x0 < 0) {
            ctx.drawImage(this.img0, this.x0 + SIZE, 0);
        }

        if(this.x1 < -SIZE * 4) this.x1 = 0;

        ctx.drawImage(this.img1, this.x1, 0);
        if(this.x1 < SIZE * 3) {
            ctx.drawImage(this.img1, this.x1 + SIZE * 4 - 1, 0);
        }
        
        if(this.x2 < -SIZE * 4) this.x2 = 0;

        ctx.drawImage(this.img2, this.x2, 0);
        if(this.x2 < SIZE * 3) {
            ctx.drawImage(this.img2, this.x2 + SIZE * 4 - 1, 0);
        }
    } 
}