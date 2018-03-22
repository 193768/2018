

class Menu extends State {
    constructor() {
        super();
        this.floor = R.image(FLOOR);
        this.man = new Hero();
    }

    input(i) {
        window.dispatchEvent(new CustomEvent("stateChange", {
            detail: GAME
        }));
    }

    update(dt) {
        this.man.update(dt);
    }

    draw(ctx) {
        ctx.drawImage(this.floor, 0, 500);
        this.man.draw(ctx);

        ctx.fillStyle = "#222";
		ctx.textAlign = "center";
		ctx.font = "40px Quantico"; 
		ctx.fillText("CLICK TO", WIDTH >> 1, HEIGHT * .35);
		ctx.fillText("PLAY", WIDTH >> 1, HEIGHT * .42);
    }
}