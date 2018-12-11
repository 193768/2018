import * as Const from "./const.js";
import Resource from "./resources.js"
import Game from "./game.js";
import Data from "./data.js"
import AStar from "./astar.js";
import Emitters from "./emitter.js";

class Tile {
  constructor(t, x, y) {
    this.tile = t;
    this.x = x;
    this.y = y;
    this.dirX = 0;
    this.dirY = 0;
    this.alpha = 1;
    this.partTime = 0;
  }
}

class Pairs extends Game {
  constructor() {
    super();

    this.astar = new AStar();
    this.emiters = new Emitters();

    this.canvas.addEventListener("click", (e) => {
      this.click(e)
    });
    this.canvas.addEventListener("touchstart", (e) => {
      this.click(e)
    });

    this.ctx.imageSmoothingEnabled = false;

    this.board;
    this.selected;
    this.path;
    this.pathIndex;
    this.movingTile = null;

    this.res = new Resource(() => {
      this.load();
      this.loop(0);
    });
  }

  load() {
    this.selected = -1;
    this.board = [];
    this.path = [];

    const pairs = [];
    for (let z = Const.N01; z < 28; z++) {
      for (let w = 0; w < 6; w++)
        pairs.push(z);
    }


    let h = 0;
    for (let r = 0; r < Const.LVL_HEI; r++) {
      for (let c = 0; c < Const.LVL_WID; c++) {
        if (c === 0 || r === 0 || c === Const.LVL_WID - 1 || r === Const.LVL_HEI - 1) {
          this.board.push(new Tile(-1, c, r));
        } else {
          const t = Math.floor(Math.random() * pairs.length);
          this.board.push(new Tile(pairs[t], c * Const.SIZE + c * Const.GAP, r * Const.SIZE + r * Const.GAP));
          pairs.splice(t, 1);
          h++;
        }
      }
    }

    console.log(h)
  }

  stop() {
    this.pathIndex = -1;
    this.movingTile = this.path = null;
    this.board[this.selected].tile = -1;
    this.selected = -1;
    if (this.isGameOver()) {
      this.load();
    }
  }

  setTarget() {
    if (--this.pathIndex < 0) {
      this.stop();
      return;
    }

    this.target = this.path[this.pathIndex];
    this.target.x = this.target.x * Const.SIZE + this.target.x * Const.GAP;
    this.target.y = this.target.y * Const.SIZE + this.target.y * Const.GAP;

    if (this.target.x != this.movingTile.x) {
      this.movingTile.dirX = this.target.x > this.movingTile.x ? 1 : -1;
      this.movingTile.dirY = 0;
    } else {
      this.movingTile.dirX = 0;
      this.movingTile.dirY = this.target.y > this.movingTile.y ? 1 : -1;
    }
  }

  update(dt) {
    this.emiters.update(dt);
    if (this.path && this.pathIndex > -1) {
      this.movingTile.x += dt * 2000 * this.movingTile.dirX;
      this.movingTile.y += dt * 2000 * this.movingTile.dirY;
      this.movingTile.alpha -= dt * 2;

      if (this.movingTile.alpha < 0) {
        this.stop();
        return;
      }

      if ((this.movingTile.partTime -= dt) < 0) {
        this.movingTile.partTime = .01;
        const s = Const.SIZE >> 1;
        this.emiters.start(this.movingTile.x + s, this.movingTile.y + s);
      }

      let next = false;
      if (this.movingTile.dirX != 0) {
        if (this.movingTile.dirX > 0) {
          if (this.movingTile.x > this.target.x) {
            next = true;
          }
        } else {
          if (this.movingTile.x < this.target.x) {
            next = true;
          }
        }
      } else {
        if (this.movingTile.dirY > 0) {
          if (this.movingTile.y > this.target.y) {
            next = true;
          }
        } else {
          if (this.movingTile.y < this.target.y) {
            next = true;
          }
        }
      }
      if (next) {
        this.movingTile.x = this.target.x;
        this.movingTile.y = this.target.y;
        this.setTarget();
      }
    }
  }

  draw() {
    let i = 0;
    for (let ti of this.board) {
      let img = ti.tile;
      if (img > -1) {
        if (i === this.selected) {
          img += 50;
          if (this.movingTile) this.ctx.globalAlpha = this.movingTile.alpha;
        }

        this.ctx.drawImage(this.res.images[img], ti.x, ti.y);
        this.ctx.globalAlpha = 1;
      }
      i++;
    }

    if (this.movingTile) {
      this.ctx.globalAlpha = this.movingTile.alpha;
      this.ctx.drawImage(this.res.images[this.movingTile.tile], this.movingTile.x, this.movingTile.y);
      this.ctx.globalAlpha = 1;
    }

    this.emiters.draw(this.ctx);
  }

  index(a, b) {
    return a + Const.LVL_WID * b;
  }

  idxRev(a) {
    return {
      x: a % Const.LVL_WID,
      y: Math.floor(a / Const.LVL_WID)
    };
  }

  click(e) {
    let x, y;
    if (e.type === "touchstart") {
      x = Math.floor((e.touches[0].clientX - e.srcElement.offsetLeft) / (Const.SIZE + Const.GAP));
      y = Math.floor((e.touches[0].clientY - e.srcElement.offsetTop) / (Const.SIZE + Const.GAP));
      e.preventDefault();
    } else {
      x = Math.floor((e.clientX - e.srcElement.offsetLeft) / (Const.SIZE + Const.GAP));
      y = Math.floor((e.clientY - e.srcElement.offsetTop) / (Const.SIZE + Const.GAP));
    }

    if (x === null || y === null || x >= (Const.LVL_WID - 1) || y >= (Const.LVL_HEI - 1) || x <= 0 || y <= 0) return;
    const idx = this.index(x, y),
      g = idx;
    if (this.selected < 0) {
      this.selected = g;
    } else if (g === this.selected) {
      this.selected = -1;
    } else {
      if (this.hasPath(g)) {
        this.board[this.selected].tile = -1;
        this.selected = g;
      } else {
        this.selected = -1;
      }
    }
  }

  hasPath(g) {
    if (this.board[this.selected].tile != this.board[g].tile) return false;
    const data = new Data();
    data.arr = this.board;
    data.arrBounds = {
      x: Const.LVL_WID,
      y: Const.LVL_HEI
    };
    data.start = this.idxRev(this.selected);
    data.end = this.idxRev(g);

    let r = false;
    if (this.astar.find(data)) {
      this.path = this.astar.route;
      const t = this.board[this.selected];
      this.movingTile = new Tile(t.tile, t.x, t.y);
      this.pathIndex = this.path.length - 1;
      this.setTarget();
      r = true;
    }
    this.astar.clear();
    return r;
  }

  isGameOver() {
    for (let t = 0, l = this.board.length; t < l; t++) {
      if (this.board[t].tile > -1) return false;
    }
    return true;
  }
}

new Pairs();