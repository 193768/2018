import * as Const from "./const.js"

export default class Resources {
    constructor(cb) {
        this.images = new Array(100);

        Promise.all([
            (this.loadImage("./img/01.png")).then((i) => {
                this.images[Const.N01] = i;
            }),
            (this.loadImage("./img/02.png")).then((i) => {
                this.images[Const.N02] = i;
            }),
            (this.loadImage("./img/03.png")).then((i) => {
                this.images[Const.N03] = i;
            }),
            (this.loadImage("./img/04.png")).then((i) => {
                this.images[Const.N04] = i;
            }),
            (this.loadImage("./img/05.png")).then((i) => {
                this.images[Const.N05] = i;
            }),
            (this.loadImage("./img/06.png")).then((i) => {
                this.images[Const.N06] = i;
            }),
            (this.loadImage("./img/07.png")).then((i) => {
                this.images[Const.N07] = i;
            }),
            (this.loadImage("./img/08.png")).then((i) => {
                this.images[Const.N08] = i;
            }),
            (this.loadImage("./img/09.png")).then((i) => {
                this.images[Const.N09] = i;
            }),
            (this.loadImage("./img/10.png")).then((i) => {
                this.images[Const.N10] = i;
            }),
            (this.loadImage("./img/11.png")).then((i) => {
                this.images[Const.N11] = i;
            }),
            (this.loadImage("./img/12.png")).then((i) => {
                this.images[Const.N12] = i;
            }),
            (this.loadImage("./img/13.png")).then((i) => {
                this.images[Const.N13] = i;
            }),
            (this.loadImage("./img/14.png")).then((i) => {
                this.images[Const.N14] = i;
            }),
            (this.loadImage("./img/15.png")).then((i) => {
                this.images[Const.N15] = i;
            }),
            (this.loadImage("./img/16.png")).then((i) => {
                this.images[Const.N16] = i;
            }),
            (this.loadImage("./img/17.png")).then((i) => {
                this.images[Const.N17] = i;
            }),
            (this.loadImage("./img/18.png")).then((i) => {
                this.images[Const.N18] = i;
            }),
            (this.loadImage("./img/19.png")).then((i) => {
                this.images[Const.N19] = i;
            }),
            (this.loadImage("./img/20.png")).then((i) => {
                this.images[Const.N20] = i;
            }),
            (this.loadImage("./img/21.png")).then((i) => {
                this.images[Const.N21] = i;
            }),
            (this.loadImage("./img/22.png")).then((i) => {
                this.images[Const.N22] = i;
            }),
            (this.loadImage("./img/23.png")).then((i) => {
                this.images[Const.N23] = i;
            }),
            (this.loadImage("./img/24.png")).then((i) => {
                this.images[Const.N24] = i;
            }),
            (this.loadImage("./img/25.png")).then((i) => {
                this.images[Const.N25] = i;
            }),
            (this.loadImage("./img/26.png")).then((i) => {
                this.images[Const.N26] = i;
            }),
            (this.loadImage("./img/27.png")).then((i) => {
                this.images[Const.N27] = i;
            }),
            (this.loadImage("./img/28.png")).then((i) => {
                this.images[Const.N28] = i;
            }),
            (this.loadImage("./img/29.png")).then((i) => {
                this.images[Const.N29] = i;
            }),
            (this.loadImage("./img/30.png")).then((i) => {
                this.images[Const.N30] = i;
            }),
            (this.loadImage("./img/31.png")).then((i) => {
                this.images[Const.N31] = i;
            }),
            (this.loadImage("./img/32.png")).then((i) => {
                this.images[Const.N32] = i;
            }),
            (this.loadImage("./img/33.png")).then((i) => {
                this.images[Const.N33] = i;
            }),
            (this.loadImage("./img/34.png")).then((i) => {
                this.images[Const.N34] = i;
            }),
            (this.loadImage("./img/35.png")).then((i) => {
                this.images[Const.N35] = i;
            }),
            (this.loadImage("./img/36.png")).then((i) => {
                this.images[Const.N36] = i;
            }),
            (this.loadImage("./img/37.png")).then((i) => {
                this.images[Const.N37] = i;
            }),
            (this.loadImage("./img/38.png")).then((i) => {
                this.images[Const.N38] = i;
            }),
            (this.loadImage("./img/39.png")).then((i) => {
                this.images[Const.N39] = i;
            }),
            (this.loadImage("./img/40.png")).then((i) => {
                this.images[Const.N40] = i;
            }),
            (this.loadImage("./img/41.png")).then((i) => {
                this.images[Const.N41] = i;
            }),
            (this.loadImage("./img/42.png")).then((i) => {
                this.images[Const.N42] = i;
            }),
            (this.loadImage("./img/43.png")).then((i) => {
                this.images[Const.N43] = i;
            }),
            (this.loadImage("./img/44.png")).then((i) => {
                this.images[Const.N44] = i;
            }),
            (this.loadImage("./img/45.png")).then((i) => {
                this.images[Const.N45] = i;
            }),
            (this.loadImage("./img/51.png")).then((i) => {
                this.images[Const.H01] = i;
            }),
            (this.loadImage("./img/52.png")).then((i) => {
                this.images[Const.H02] = i;
            }),
            (this.loadImage("./img/53.png")).then((i) => {
                this.images[Const.H03] = i;
            }),
            (this.loadImage("./img/54.png")).then((i) => {
                this.images[Const.H04] = i;
            }),
            (this.loadImage("./img/55.png")).then((i) => {
                this.images[Const.H05] = i;
            }),
            (this.loadImage("./img/56.png")).then((i) => {
                this.images[Const.H06] = i;
            }),
            (this.loadImage("./img/57.png")).then((i) => {
                this.images[Const.H07] = i;
            }),
            (this.loadImage("./img/58.png")).then((i) => {
                this.images[Const.H08] = i;
            }),
            (this.loadImage("./img/59.png")).then((i) => {
                this.images[Const.H09] = i;
            }),
            (this.loadImage("./img/60.png")).then((i) => {
                this.images[Const.H10] = i;
            }),
            (this.loadImage("./img/61.png")).then((i) => {
                this.images[Const.H11] = i;
            }),
            (this.loadImage("./img/62.png")).then((i) => {
                this.images[Const.H12] = i;
            }),
            (this.loadImage("./img/63.png")).then((i) => {
                this.images[Const.H13] = i;
            }),
            (this.loadImage("./img/64.png")).then((i) => {
                this.images[Const.H14] = i;
            }),
            (this.loadImage("./img/65.png")).then((i) => {
                this.images[Const.H15] = i;
            }),
            (this.loadImage("./img/66.png")).then((i) => {
                this.images[Const.H16] = i;
            }),
            (this.loadImage("./img/67.png")).then((i) => {
                this.images[Const.H17] = i;
            }),
            (this.loadImage("./img/68.png")).then((i) => {
                this.images[Const.H18] = i;
            }),
            (this.loadImage("./img/69.png")).then((i) => {
                this.images[Const.H19] = i;
            }),
            (this.loadImage("./img/70.png")).then((i) => {
                this.images[Const.H20] = i;
            }),
            (this.loadImage("./img/71.png")).then((i) => {
                this.images[Const.H21] = i;
            }),
            (this.loadImage("./img/72.png")).then((i) => {
                this.images[Const.H22] = i;
            }),
            (this.loadImage("./img/73.png")).then((i) => {
                this.images[Const.H23] = i;
            }),
            (this.loadImage("./img/74.png")).then((i) => {
                this.images[Const.H24] = i;
            }),
            (this.loadImage("./img/75.png")).then((i) => {
                this.images[Const.H25] = i;
            }),
            (this.loadImage("./img/76.png")).then((i) => {
                this.images[Const.H26] = i;
            }),
            (this.loadImage("./img/77.png")).then((i) => {
                this.images[Const.H27] = i;
            }),
            (this.loadImage("./img/78.png")).then((i) => {
                this.images[Const.H28] = i;
            }),
            (this.loadImage("./img/79.png")).then((i) => {
                this.images[Const.H29] = i;
            }),
            (this.loadImage("./img/80.png")).then((i) => {
                this.images[Const.H30] = i;
            }),
            (this.loadImage("./img/81.png")).then((i) => {
                this.images[Const.H31] = i;
            }),
            (this.loadImage("./img/82.png")).then((i) => {
                this.images[Const.H32] = i;
            }),
            (this.loadImage("./img/83.png")).then((i) => {
                this.images[Const.H33] = i;
            }),
            (this.loadImage("./img/84.png")).then((i) => {
                this.images[Const.H34] = i;
            }),
            (this.loadImage("./img/85.png")).then((i) => {
                this.images[Const.H35] = i;
            }),
            (this.loadImage("./img/86.png")).then((i) => {
                this.images[Const.H36] = i;
            }),
            (this.loadImage("./img/87.png")).then((i) => {
                this.images[Const.H37] = i;
            }),
            (this.loadImage("./img/88.png")).then((i) => {
                this.images[Const.H38] = i;
            }),
            (this.loadImage("./img/89.png")).then((i) => {
                this.images[Const.H39] = i;
            }),
            (this.loadImage("./img/90.png")).then((i) => {
                this.images[Const.H40] = i;
            }),
            (this.loadImage("./img/91.png")).then((i) => {
                this.images[Const.H41] = i;
            }),
            (this.loadImage("./img/92.png")).then((i) => {
                this.images[Const.H42] = i;
            }),
            (this.loadImage("./img/93.png")).then((i) => {
                this.images[Const.H43] = i;
            }),
            (this.loadImage("./img/94.png")).then((i) => {
                this.images[Const.H44] = i;
            }),
            (this.loadImage("./img/95.png")).then((i) => {
                this.images[Const.H45] = i;
            })
        ]).then(() => {
            cb();
        });
    }

    loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.src = url;
        });
    }
}