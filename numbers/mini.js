var f="function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,b){c!=Array.prototype&&c!=Object.prototype&&(c[a]=b.value)},g="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function m(){m=function(){};g.Symbol||(g.Symbol=n)}var n=function(){var c=0;return function(a){return"jscomp_symbol_"+(a||"")+c++}}();
function p(){m();var c=g.Symbol.iterator;c||(c=g.Symbol.iterator=g.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&f(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return q(this)}});p=function(){}}function q(c){var a=0;return r(function(){return a<c.length?{done:!1,value:c[a++]}:{done:!0}})}function r(c){p();c={next:c};c[g.Symbol.iterator]=function(){return this};return c}function t(c){p();m();p();var a=c[Symbol.iterator];return a?a.call(c):q(c)}
function u(c,a){if(a){for(var b=g,e=c.split("."),d=0;d<e.length-1;d++){var h=e[d];h in b||(b[h]={});b=b[h]}e=e[e.length-1];d=b[e];h=a(d);h!=d&&null!=h&&f(b,e,{configurable:!0,writable:!0,value:h})}}
u("Promise",function(c){function a(a){this.l=0;this.C=void 0;this.i=[];var b=this.u();try{a(b.resolve,b.reject)}catch(v){b.reject(v)}}function b(){this.h=null}function e(b){return b instanceof a?b:new a(function(a){a(b)})}if(c)return c;b.prototype.D=function(a){null==this.h&&(this.h=[],this.L());this.h.push(a)};b.prototype.L=function(){var a=this;this.F(function(){a.N()})};var d=g.setTimeout;b.prototype.F=function(a){d(a,0)};b.prototype.N=function(){for(;this.h&&this.h.length;){var a=this.h;this.h=
[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(w){this.M(w)}}}this.h=null};b.prototype.M=function(a){this.F(function(){throw a;})};a.prototype.u=function(){function a(a){return function(k){c||(c=!0,a.call(b,k))}}var b=this,c=!1;return{resolve:a(this.V),reject:a(this.B)}};a.prototype.V=function(b){if(b===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof a)this.W(b);else{a:switch(typeof b){case "object":var c=null!=b;break a;case "function":c=!0;
break a;default:c=!1}c?this.U(b):this.H(b)}};a.prototype.U=function(a){var b=void 0;try{b=a.then}catch(v){this.B(v);return}"function"==typeof b?this.X(b,a):this.H(a)};a.prototype.B=function(a){this.J(2,a)};a.prototype.H=function(a){this.J(1,a)};a.prototype.J=function(a,b){if(0!=this.l)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.l);this.l=a;this.C=b;this.O()};a.prototype.O=function(){if(null!=this.i){for(var a=0;a<this.i.length;++a)h.D(this.i[a]);this.i=null}};
var h=new b;a.prototype.W=function(a){var b=this.u();a.o(b.resolve,b.reject)};a.prototype.X=function(a,b){var c=this.u();try{a.call(b,c.resolve,c.reject)}catch(w){c.reject(w)}};a.prototype.then=function(b,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(K){k(K)}}:b}var e,k,h=new a(function(a,b){e=a;k=b});this.o(d(b,e),d(c,k));return h};a.prototype["catch"]=function(a){return this.then(void 0,a)};a.prototype.o=function(a,b){function c(){switch(d.l){case 1:a(d.C);break;case 2:b(d.C);
break;default:throw Error("Unexpected state: "+d.l);}}var d=this;null==this.i?h.D(c):this.i.push(c)};a.resolve=e;a.reject=function(b){return new a(function(a,c){c(b)})};a.race=function(b){return new a(function(a,c){for(var d=t(b),h=d.next();!h.done;h=d.next())e(h.value).o(a,c)})};a.all=function(b){var c=t(b),d=c.next();return d.done?e([]):new a(function(a,b){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}var k=[],l=0;do k.push(void 0),l++,e(d.value).o(h(k.length-1),b),d=c.next();while(!d.done)})};
return a});u("Promise.prototype.finally",function(c){return c?c:function(a){return this.then(function(b){return Promise.resolve(a()).then(function(){return b})},function(b){return Promise.resolve(a()).then(function(){throw b;})})}});var x="function"==typeof Object.create?Object.create:function(c){function a(){}a.prototype=c;return new a},y;
if("function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{var z;a:{var A={K:!0},B={};try{B.__proto__=A;z=B.K;break a}catch(c){}z=!1}y=z?function(c,a){c.__proto__=a;if(c.__proto__!==a)throw new TypeError(c+" is not extensible");return c}:null}var C=y;function D(c){return new Promise(function(a){var b=new Image;b.onload=function(){return a(b)};b.src=c})}function E(c,a){return Math.floor(Math.random()*(a-c)+c)}function F(){}F.prototype.update=function(){};F.prototype.G=function(){};
F.prototype.input=function(){};F.prototype.start=function(){};function G(c){var a=H;return c<a.images.length?a.images[c]:null}function I(){this.dir=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}];this.selected={x:-1,y:-1};this.a=[];this.s=[];this.m=[];J(this)}I.prototype=x(F.prototype);I.prototype.constructor=I;
if(C)C(I,F);else for(var L in F)if("prototype"!=L)if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(F,L);M&&Object.defineProperty(I,L,M)}else I[L]=F[L];I.Y=F.prototype;
function J(c){c.m=[];c.a=[];c.s=[];for(var a=0;4>a;a++){c.a[a]=[];c.s[a]=[];for(var b=0;4>b;b++)c.a[a][b]={c:0,f:!1,b:!1,g:!1},c.s[a][b]=0}for(a=0;12.8>a;a++)for(b=1E3;b;){var e=E(0,4),d=E(0,4),h=E(1,4);a:{if(0===c.a[e][d].c){var k=E(0,8);var l=e+h*c.dir[k].x;k=d+h*c.dir[k].y;if(-1<l&&-1<k&&4>l&&4>k&&0===c.a[l][k].c){c.a[l][k].c=h;l=!0;break a}}l=!1}if(l){c.s[e][d]=h;break}b--}}I.prototype.update=function(){};
I.prototype.G=function(c){for(var a,b=0;4>b;b++)for(var e=0;4>e;e++){var d=this.a[e][b];switch(d.c){case 0:a=G(0);break;case 1:a=d.f?G(13):d.b?G(19):d.g?G(1):G(7);break;case 2:a=d.f?G(14):d.b?G(20):d.g?G(2):G(8);break;case 3:a=d.f?G(15):d.b?G(21):d.g?G(3):G(9);break;case 4:a=d.f?G(16):d.b?G(22):d.g?G(4):G(10);break;case 5:a=d.f?G(17):d.b?G(23):d.g?G(5):G(11);break;case 6:a=d.f?G(18):d.b?G(24):d.g?G(6):G(12)}c.drawImage(a,e*a.width+4*e,b*a.height+4*b)}};
function N(c){for(var a=0;4>a;a++)for(var b=0;4>b;b++){var e=c.a[b][a];e.f&&(e.f=!1,e.g||(e.c=0))}c.selected.x=-1;c.selected.y=-1}
I.prototype.input=function(c){if("touchstart"===c.type){var a=Math.floor(c.touches[0].screenX/64);c=Math.floor(c.touches[0].screenY/64)}else a=Math.floor((c.clientX-c.explicitOriginalTarget.offsetLeft)/64),c=Math.floor((c.clientY-c.explicitOriginalTarget.offsetTop)/64);if(!(4<=a||4<=c)){var b=this.a[a][c];if(!b.g)if(b.b)b.b=!1,N(this);else if(b.f)this.m.push({S:this.selected.x,T:this.selected.y,P:a,R:c}),this.a[this.selected.x][this.selected.y].b=!1,this.a[this.selected.x][this.selected.y].c=0,b.g=
!0,N(this);else if(0!==b.c)for(-1<this.selected.x&&(this.a[this.selected.x][this.selected.y].b=!1,N(this)),b.b=!0,this.selected.x=a,this.selected.y=c,a=b.c,c=0;8>c;c++){b=this.selected.x+a*this.dir[c].x;var e=this.selected.y+a*this.dir[c].y;-1<b&&-1<e&&4>b&&4>e&&0===this.a[b][e].c&&(this.a[b][e].c=a,this.a[b][e].f=!0)}}};
function O(){var c=this;this.canvas=document.createElement("canvas");this.canvas.id="canvas";this.canvas.width=252;this.canvas.height=252;this.v=this.canvas.getContext("2d");this.v.scale(1,1);this.j=this.I=0;this.w=1/60;this.loop=function(a){for(c.j+=(a-c.I)/1E3;c.j>c.w;)c.j-=c.w,c.state.update(Math.min(c.w,.5));c.I=a;c.v.clearRect(0,0,252,252);c.state.G(c.v);requestAnimationFrame(c.loop)};this.state=this.A=new I;P(this);this.state.start();this.canvas.addEventListener("mousedown",function(a){c.state.input(a)});
this.canvas.addEventListener("touchstart",function(a){c.state.input(a)});this.loop(0)}
function P(c){var a=document.getElementById("btns"),b=document.createElement("button"),e=document.createElement("button");document.getElementById("board").appendChild(c.canvas);b.id="undo";b.innerHTML="UNDO";b.addEventListener("mousedown",function(){var a=c.A;if(a.m.length){var b=a.m.splice(a.m.length-1,1)[0],e=a.a[b.S][b.T];a=a.a[b.P][b.R];e.c=a.c;a.c=0;e.f=e.b=e.g=a.f=a.b=a.g=!1}});e.id="new";e.innerHTML="NEW";e.addEventListener("mousedown",function(){J(c.A)});a.appendChild(b);a.appendChild(e)}
var H=new function(c){var a=this;this.images=Array(25);Promise.all([D("./img/cl.png").then(function(b){a.images[0]=b}),D("./img/1G.png").then(function(b){a.images[1]=b}),D("./img/2G.png").then(function(b){a.images[2]=b}),D("./img/3G.png").then(function(b){a.images[3]=b}),D("./img/4G.png").then(function(b){a.images[4]=b}),D("./img/5G.png").then(function(b){a.images[5]=b}),D("./img/6G.png").then(function(b){a.images[6]=b}),D("./img/1R.png").then(function(b){a.images[7]=b}),D("./img/2R.png").then(function(b){a.images[8]=
b}),D("./img/3R.png").then(function(b){a.images[9]=b}),D("./img/4R.png").then(function(b){a.images[10]=b}),D("./img/5R.png").then(function(b){a.images[11]=b}),D("./img/6R.png").then(function(b){a.images[12]=b}),D("./img/1T.png").then(function(b){a.images[13]=b}),D("./img/2T.png").then(function(b){a.images[14]=b}),D("./img/3T.png").then(function(b){a.images[15]=b}),D("./img/4T.png").then(function(b){a.images[16]=b}),D("./img/5T.png").then(function(b){a.images[17]=b}),D("./img/6T.png").then(function(b){a.images[18]=
b}),D("./img/1Y.png").then(function(b){a.images[19]=b}),D("./img/2Y.png").then(function(b){a.images[20]=b}),D("./img/3Y.png").then(function(b){a.images[21]=b}),D("./img/4Y.png").then(function(b){a.images[22]=b}),D("./img/5Y.png").then(function(b){a.images[23]=b}),D("./img/6Y.png").then(function(b){a.images[24]=b})]).then(function(){c()})}(function(){return new O});