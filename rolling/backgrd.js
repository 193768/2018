
class Background {
    constructor() {
        this.width = 4 * SIZE;
        let c = document.createElement("canvas"),
            d = document.createElement("canvas");
        
        c.width  = d.width  = this.width;
        c.height = d.height = SIZE;

        let t1 = c.getContext("2d"),
            t2 = d.getContext("2d");
        
        t1.fillStyle = "#2f0a7c";
        t2.fillStyle = "#060225";

        this.generate(t1, 350, 350, true);
        this.generate(t1, 350, 350, false);
        this.generate(t2, 420, 420, true);
        this.generate(t2, 420, 420, false);
        
        this.img1 = new Image();
        this.img2 = new Image();

        this.img1.src = c.toDataURL();
        this.img2.src = d.toDataURL();

        this.x1 = 0;
        this.x2 = 0;
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

    draw(ctx, p) {
        let pp = p / 4;
        this.x1 += pp;
        if(this.x1 < -SIZE * 4) this.x1 = 0;

        ctx.drawImage(this.img1, this.x1, 0);
        if(this.x1 < SIZE * 3) {
            ctx.drawImage(this.img1, this.x1 + SIZE * 4, 0);
        }

        pp = p / 2;
        this.x2 += pp;
        if(this.x2 < -SIZE * 4) this.x2 = 0;

        ctx.drawImage(this.img2, this.x2, 0);
        if(this.x2 < SIZE * 3) {
            ctx.drawImage(this.img2, this.x2 + SIZE * 4, 0);
        }
    } 
}