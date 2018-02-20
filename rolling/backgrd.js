
class Background {
    constructor() {
        let c = document.createElement("canvas"),
            d = document.createElement("canvas");
        
        c.width  = d.width  = 4 * SIZE;
        c.height = d.height = SIZE;

        let t1 = c.getContext("2d"),
            t2 = d.getContext("2d");
        
        this.generate(t1);
        
        this.img1 = new Image();
        this.img2 = new Image();

        this.img1.src = c.toDataURL();
        this.img2.src = d.toDataURL();

        this.x1 = 0;
        this.x2 = 0;
    }

    generate(cx) {
        let h = [], mx = SIZE / 3, a = Math.random() * mx, dis = 20;
        h.push(a);
        h.push(a - dis);
        h.push(a);

        while(true) {
            dis *= .8;
            if(dis < 2) break;
            let e = h.length;
            let r = 0;
            do {
                let d = (h[r] + h[r+1]) / 2;
                d += Math.random() < .5 ? -dis : dis;
                h.splice(r+1, 0, d);
                r += 2;
                if(r >= e) break;
            } while(true);
        }

        let xtep = (4 * SIZE) / h.length, x = 0;

        cx.moveTo(x, h[0]);
        for(let r = 1; r < h.length; r++) {
            x += xtep;
            cx.lineTo(xtep, SIZE - 2 * h[r]);
        }
        cx.lineTo(x, SIZE);
        cx.lineTo(0, SIZE);
        cx.lineTo(0, h[0]);
        cx.fillStyle = "red";
        cx.fill();
    }

    draw(ctx, p) {
        this.x1 += (p >> 1);
        if(this.x1 < -SIZE * 4) this.x1 = 0;

        this.x2 += (p >> 2);
        if(this.x2 < -SIZE * 4) this.x2 = 0;

        ctx.drawImage(this.img1, this.x1, 0);
        ctx.drawImage(this.img2, this.x2, 0);

        if(this.x1 < SIZE * 3) {
            ctx.drawImage(this.img1, this.x1 + SIZE * 4, 0);
        }

        if(this.x2 < SIZE * 3) {
            ctx.drawImage(this.img2, this.x2 + SIZE * 4, 0);
        }
    } 
}