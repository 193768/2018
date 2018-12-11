class Node {
    constructor() {
        this.pos = {
            x: -1,
            y: -1
        };
        this.parent = {
            x: -1,
            y: -1
        };
        this.turns = 0;
        this.dist = 0;
        this.dir = -1;
    }
}

export default class AStar {
    constructor() {
        this.open;
        this.closed;
        this.route;
        this.data;
        this.clear();
    }

    clear() {
        this.open = [];
        this.closed = [];
        this.route = [];
    }

    find(data) {
        this.data = data;
        const f = new Node();
        f.pos.x = data.start.x;
        f.pos.y = data.start.y;
        this.open.push(f);

        let node;
        while (this.open.length) {
            node = this.open.pop();
            this.closed.push(node);
            if (node.pos.x === this.data.end.x && node.pos.y === this.data.end.y) {
                this.path();
                return true;
            }
            this.explore(node)
        }
        return false;
    }

    inside(x, y) {
        return x > -1 && y > -1 && x < this.data.arrBounds.x && y < this.data.arrBounds.y;
    }

    explore(node) {
        const dir = [1, 0, -1, 0, 0, 1, 0, -1];
        for (let d = 0; d < 8; d += 2) {
            const x = node.pos.x + dir[d],
                y = node.pos.y + dir[d + 1];

            if (!this.inside(x, y)) continue;
            let turn = node.turns + (node.dir != d ? 1 : 0);
            if (((x === this.data.end.x && y === this.data.end.y) || this.data.arr[x + y * this.data.arrBounds.x].tile === -1) && turn < 4) {
                const dst = Math.abs(x - this.data.end.x) + Math.abs(y - this.data.end.y);
                if (!this.inLists(x, y, dst + turn)) {
                    const n = new Node();
                    n.dir = d;
                    n.turns = turn;
                    n.dist = dst
                    n.pos = {
                        x,
                        y
                    };
                    n.parent = {
                        x: node.pos.x,
                        y: node.pos.y
                    };
                    this.open.push(n);
                }
            }
        }
        this.open.sort((n1, n2) => {
            return (n2.dist + n2.turns) - (n1.dist + n1.turns)
        })
        return false;
    }

    inLists(x, y, cost) {
        for (let l = this.open.length - 1, m = l; m > -1; m--) {
            const n = this.open[m];
            if (n.pos.x === x && n.pos.y === y) {
                if (cost > n.dist + n.turns) return true;
                else {
                    this.open.splice(m, 1);
                    return false;
                }
            }
        }
        return false;
    }

    path() {
        let n, x, y, n0 = this.closed.pop();
        this.route.push({
            x: n0.pos.x,
            y: n0.pos.y
        });
        while (this.closed.length) {
            n = this.closed.pop();
            if (n0.parent.x === n.pos.x && n0.parent.y === n.pos.y) {
                x = n.pos.x;
                y = n.pos.y;
                this.route.push({
                    x,
                    y
                });
                n0 = n;
            }
        }
    }
}