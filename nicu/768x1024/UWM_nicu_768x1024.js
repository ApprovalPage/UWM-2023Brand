(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"UWM_nicu_768x1024_atlas_1", frames: [[0,0,1536,2048],[1538,0,1536,2048],[0,2050,662,234]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.pic768x1024nicu1 = function() {
	this.initialize(ss["UWM_nicu_768x1024_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic768x1024nicu2 = function() {
	this.initialize(ss["UWM_nicu_768x1024_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.UW_Color_HighDegree_Logo = function() {
	this.initialize(ss["UWM_nicu_768x1024_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vignette = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,177.7).s().p("A3bbWMAAAg2rMAu3AAAMAAAA2rg");
	this.shape.setTransform(-0.35,153.2047,1.0076,0.59);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vignette, new cjs.Rectangle(-151.5,50,302.3,206.5), null);


(lib.UWMed_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.UW_Color_HighDegree_Logo();
	this.instance.setTransform(-166,-59,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UWMed_logo, new cjs.Rectangle(-166,-59,331,117), null);


(lib.underline1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32006E").ss(2,1,1).p("AvnAAIfPAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.underline1, new cjs.Rectangle(-101,-1,202,2), null);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC700").s().p("EgleAPtIFj/ZMBFaAAAIljfZg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.9,-100.5,479.8,201.1);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC700").s().p("EgleAPtIFj/ZMBFaAAAIljfZg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.9,-100.5,479.8,201.1);


(lib.PIC2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pic768x1024nicu2();
	this.instance.setTransform(-150,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-150,0,768,1024), null);


(lib.PIC1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pic768x1024nicu1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(0,0,768,1024), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AgNAWQgGgDgEgGQgDgFAAgIQAAgKAIgHQAHgHALAAQAIAAAHADQAFADAEAGQADAGAAAGQAAAHgDAGQgEAGgGADQgGADgIAAQgHAAgGgDg");
	this.shape.setTransform(193.9,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Ag3BKIAAiTIBvAAIAAAjIhFAAIAAAUIA6AAIAAAiIg6AAIAAAXIBFAAIAAAjg");
	this.shape_1.setTransform(183.45,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AATBLIgggxIgKgBIAAAyIgqAAIAAiPQAMgDANgBIAZgCQAiAAARAMQARANAAAZQAAAPgHAJQgGALgNAHIAnA5gAgXgqIAAAkIAOAAQAKAAAGgDQAGgFgBgKQAAgTgVAAIgOABg");
	this.shape_2.setTransform(169.15,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAjIhFAAIAAAUIA6AAIAAAiIg6AAIAAAXIBGAAIAAAjg");
	this.shape_3.setTransform(154.1,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAZBKIAAg5IgxAAIAAA5IgrAAIAAiTIArAAIAAA2IAxAAIAAg2IArAAIAACTg");
	this.shape_4.setTransform(138.45,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AATBLIgggxIgJgBIAAAyIgrAAIAAiPQALgDAOgBIAagCQAhAAARAMQARANAAAZQAAAPgGAJQgIALgMAHIAnA5gAgWgqIAAAkIANAAQAKAAAGgDQAFgFABgKQAAgTgXAAIgMABg");
	this.shape_5.setTransform(116.9,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAjIhDAAIAAAUIA5AAIAAAiIg5AAIAAAXIBEAAIAAAjg");
	this.shape_6.setTransform(101.85,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgqA5QgWgSAAgnQAAgkAXgTQAYgUArAAQASAAAQADIAAAkQgPgDgOAAQgTgBgLAFQgJAEgGAKQgFAIAAAOQAAAUAKAKQAKAKAVAAIADAAIAAgnIAoAAIAABGQgWAEgSAAQgsAAgXgTg");
	this.shape_7.setTransform(86.55,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AAZBKIg0hSIAABSIgpAAIAAiTIAsAAIA0BSIAAhSIApAAIAACTg");
	this.shape_8.setTransform(70.425,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgnBEQgRgJgJgRQgJgSAAgYQAAgXAJgSQAJgRARgIQARgJAWAAQAXAAARAJQARAIAJARQAJASAAAXQAAAYgJASQgJAQgRAKQgRAIgXAAQgWAAgRgIgAgWgeQgIAJAAAVQAAAVAIAKQAIALAOAAQAPgBAIgJQAIgLAAgUQAAgVgIgKQgIgLgPAAQgOAAgIALg");
	this.shape_9.setTransform(53.225,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AATBLIgggxIgKgBIAAAyIgqAAIAAiPQAMgDANgBIAagCQAgAAASAMQARANAAAZQAAAPgGAJQgIALgLAHIAmA5gAgXgqIAAAkIAOAAQAKAAAGgDQAFgFABgKQAAgTgXAAIgNABg");
	this.shape_10.setTransform(37.45,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgVBKIAAhvIgsAAIAAgkICEAAIAAAkIgtAAIAABvg");
	this.shape_11.setTransform(21.95,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AgeBKIgVgEIAAgjQAJACAMACQANADAKAAQALAAAFgEQAEgCAAgFIgBgFIgFgDIgJgEIgNgDQgUgFgKgLQgLgJAAgSQAAgXARgNQARgMAhAAQAVAAAQAEIAAAjIgQgDIgSgCQgOABgGADQgGACAAAGIABADQABACADACIAHADIANADQAXAFAKALQALAKAAASQAAAOgIALQgIAMgOAFQgPAGgTAAQgMAAgLgCg");
	this.shape_12.setTransform(8.075,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AATBLIgggyIgJAAIAAAyIgrAAIAAiPQALgDAOgCIAZgBQAhAAASAMQARAMAAAaQAAAPgHAJQgGAMgNAFIAnA6gAgWgpIAAAjIANABQAKAAAGgFQAGgEAAgKQAAgSgWAAIgNABg");
	this.shape_13.setTransform(125.7,-10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhEAAIAAAVIA6AAIAAAhIg6AAIAAAZIBFAAIAAAig");
	this.shape_14.setTransform(110.65,-10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AAZBKIAAg5IgxAAIAAA5IgrAAIAAiTIArAAIAAA1IAxAAIAAg1IArAAIAACTg");
	this.shape_15.setTransform(95,-10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AgeBLIgVgGIAAgjQAJAEAMACQANABAKAAQALAAAFgCQAEgDAAgFIgBgFIgFgEIgJgCIgNgEQgUgFgKgLQgLgKAAgRQAAgXARgNQARgMAhAAQAVAAAQAFIAAAiIgQgDIgSgBQgOAAgGACQgGADAAAFIABAFQABABADACIAHADIANADQAXAGAKAKQALAKAAASQAAAPgIAKQgIALgOAGQgPAGgTAAQgMAAgLgBg");
	this.shape_16.setTransform(73.925,-10.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAiIhFAAIAAAVIA6AAIAAAhIg6AAIAAAZIBGAAIAAAig");
	this.shape_17.setTransform(60.5,-10.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#32006E").s().p("AAUBKIgig5IgJAAIAAA5IgrAAIAAiTIArAAIAAA1IAJAAIAgg1IAtAAIgsBHIAwBMg");
	this.shape_18.setTransform(46.675,-10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#32006E").s().p("AAiBKIgJgiIgxAAIgJAiIgqAAIAsiTIA/AAIAsCTgAAPAGIgPg2IgPA2IAeAAg");
	this.shape_19.setTransform(30.2,-10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#32006E").s().p("AAuBKIAAhaIgcBEIgiAAIgdhBIAABXIgpAAIAAiTIA2AAIAhBQIAghQIA1AAIAACTg");
	this.shape_20.setTransform(11.8,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,-26,217.6,52), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAjIhEAAIAAAUIA6AAIAAAiIg6AAIAAAXIBFAAIAAAjg");
	this.shape.setTransform(136.75,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AATBLIgggxIgKgBIAAAyIgqAAIAAiPQALgDAOgBIAZgCQAhAAASAMQARANAAAZQAAAPgHAJQgGALgNAHIAnA5gAgXgqIAAAkIAOAAQAKAAAGgDQAGgFgBgKQABgTgWAAIgOABg");
	this.shape_1.setTransform(122.45,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAjIhEAAIAAAUIA6AAIAAAiIg6AAIAAAXIBFAAIAAAjg");
	this.shape_2.setTransform(107.4,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AAZBKIAAg5IgxAAIAAA5IgrAAIAAiTIArAAIAAA2IAxAAIAAg2IArAAIAACTg");
	this.shape_3.setTransform(91.75,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAYBKIAAg5IgvAAIAAA5IgsAAIAAiTIAsAAIAAA2IAvAAIAAg2IAsAAIAACTg");
	this.shape_4.setTransform(68.85,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("Ag6AAQAAgXAKgRQAKgRATgJQATgJAbAAQARAAAPADIAAAkQgPgDgNAAQgQgBgJAFQgJAEgFAJQgEAJAAANQAAAOAEAJQAFAJAIAEQAKAFAPAAQAMgBARgEIAAAkIgQADIgSABQhTAAAAhMg");
	this.shape_5.setTransform(53.575,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAhBKIgJgiIgvAAIgKAiIgqAAIAsiTIA/AAIAsCTgAAPAGIgPg1IgOA1IAdAAg");
	this.shape_6.setTransform(38.35,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAjIhEAAIAAAUIA6AAIAAAiIg6AAIAAAXIBFAAIAAAjg");
	this.shape_7.setTransform(23.35,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgVBKIAAhvIgsAAIAAgkICEAAIAAAkIgtAAIAABvg");
	this.shape_8.setTransform(8.8,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAiIhFAAIAAAVIA6AAIAAAhIg6AAIAAAZIBGAAIAAAig");
	this.shape_9.setTransform(112.25,-10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AAZBKIgZhiIgYBiIg4AAIgliTIArAAIAaBpIAbhpIAuAAIAaBrIAahrIApAAIgmCTg");
	this.shape_10.setTransform(92.6,-10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgVBKIAAhvIgsAAIAAgkICEAAIAAAkIgtAAIAABvg");
	this.shape_11.setTransform(66.75,-10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AAhBKIgJgiIgvAAIgKAiIgqAAIAsiTIA/AAIAsCTgAAPAGIgPg2IgOA2IAdAAg");
	this.shape_12.setTransform(51.3,-10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AAYBKIAAg5IgvAAIAAA5IgsAAIAAiTIAsAAIAAA1IAvAAIAAg1IAsAAIAACTg");
	this.shape_13.setTransform(34.75,-10.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("AAZBKIgYhiIgZBiIg4AAIgliTIArAAIAaBpIAahpIAvAAIAaBrIAahrIApAAIgmCTg");
	this.shape_14.setTransform(13.95,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,-26,240.1,52), null);


(lib.CTAskewbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC700").s().p("A3QJwIDczfMArFAAAIjcTfg");
	this.shape.setTransform(-0.075,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Eg3nAJwIAAzfMBvPAAAIAATfg");
	this.shape_1.setTransform(0,2.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTAskewbox, new cjs.Rectangle(-356,-60.4,712,124.9), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("AgCAwIAagwIgagvIAjAAIAbAvIgbAwgAg7AwIAbgwIgbgvIAjAAIAbAvIgbAwg");
	this.shape.setTransform(87.925,18.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AgsA5IAAgaQASAFAUAAQALAAAFgDQAFgDAAgFQAAgFgDgCQgCgDgGgBIgSgDQgRgDgIgIQgIgIAAgPQAAgMAGgIQAHgJAMgFQANgEASAAIARABIAPACIAAAaQgPgEgQAAQgYAAAAAMQAAAEACADQADACAGABIASAEQARADAIAHQAIAIAAAPQAAAMgHAJQgGAJgMAEQgMAFgQAAQgWAAgRgFg");
	this.shape_1.setTransform(70.625,18.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_2.setTransform(59.125,18.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AgRBXIAAh3IAjAAIAAB3gAgPg2QgGgFAAgJQAAgJAGgEQAFgFAKAAQALAAAFAFQAGAEAAAJQAAAJgGAFQgFAEgLAAQgKAAgFgEg");
	this.shape_3.setTransform(49.925,15.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AgkA9IAAh4IAdAAIACAQIABAAQAFgIAIgFQAIgEALAAIAJABIAAAfIgLgBQgJAAgHAEQgIADgDAGIAABNg");
	this.shape_4.setTransform(43.05,18.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgeA3QgNgHgIgOQgHgOAAgUQAAgeAQgQQAPgPAbAAQAcAAAPAPQAQAQAAAeQAAAUgHAOQgHAOgNAHQgOAHgSAAQgRAAgNgHgAgMggQgFAEgDAIQgCAHAAANQAAANACAIQADAIAFADQAFADAHAAQAIAAAFgDQAFgDADgIQACgIAAgNQAAgMgCgIQgDgIgFgEQgFgDgIAAQgHAAgFADg");
	this.shape_5.setTransform(31.375,18.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AgLBIQgMgLAAgYIAAgwIgUAAIAAgcIAUAAIAGgqIAcAAIAAAqIAfAAIAAAcIgfAAIAAArQAAAIACAFQACAFAEACQAFACAHAAIAMgBIAAAbQgLADgLgBQgVABgLgLg");
	this.shape_6.setTransform(20.05,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgsA5IAAgaQASAFAUAAQALAAAFgDQAFgDAAgFQAAgFgDgCQgCgDgGgBIgSgDQgRgDgIgIQgIgIAAgPQAAgMAGgIQAHgJAMgFQANgEASAAIARABIAPACIAAAaQgPgEgQAAQgYAAAAAMQAAAEACADQADACAGABIASAEQARADAIAHQAIAIAAAPQAAAMgHAJQgGAJgMAEQgMAFgQAAQgWAAgRgFg");
	this.shape_7.setTransform(10.225,18.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgkA9IAAh4IAcAAIADAQIABAAQAFgIAIgFQAIgEAKAAIAKABIAAAfIgLgBQgIAAgJAEQgHADgDAGIAABNg");
	this.shape_8.setTransform(-4.55,18.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgqAyQgLgLAAgZIAAhKIAjAAIAABIQAAAKAEAFQAFAEAHAAQAFAAAGgDQAGgCAEgFIAAhRIAjAAIAAB3IgdAAIgCgMIgCAAQgGAHgJAEQgIADgKAAQgTAAgLgLg");
	this.shape_9.setTransform(-16.325,18.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AgeA3QgNgHgIgOQgHgOAAgUQAAgeAQgQQAPgPAbAAQAcAAAPAPQAQAQAAAeQAAAUgHAOQgHAOgNAHQgOAHgSAAQgRAAgNgHgAgMggQgFAEgDAIQgCAHAAANQAAANACAIQADAIAFADQAFADAHAAQAIAAAFgDQAFgDADgIQACgIAAgNQAAgMgCgIQgDgIgFgEQgFgDgIAAQgHAAgFADg");
	this.shape_10.setTransform(-29.575,18.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AggBUQgLgGgHgOQgGgNgBgVQABgeARgRQAQgQAfAAIAOABIAAg5IAkAAIAACxIgeAAIgDgNIgBAAQgGAHgHAEQgIAEgKAAQgOAAgLgGgAgNABQgIAIAAATQAAASAHAIQAFAIAMgBQAFAAAGgCQAEgCAEgEIAAg6IgOgBQgOgBgHAIg");
	this.shape_11.setTransform(-48.7,15.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AghA6QgJgFgEgHQgFgIAAgKQAAgSAMgJQAMgJAagBIASgCIAAgCQAAgIgCgFQgDgEgFgCQgHgCgJAAIgQABIgRADIAAgaIATgEIAVgBQASAAAMAEQAMAGAGAKQAGAMAAASIAABHIgdAAIgDgMIgBAAQgGAHgHADQgIAEgKAAQgMAAgJgEgAABAJQgJAAgEAEQgEAEgBAHQAAAHAFADQADAEAJAAQAEAAAEgCQAFgCAEgEIAAgWg");
	this.shape_12.setTransform(-61.6,18.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_13.setTransform(-73.525,18.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("AAdBTIgpg8IgCAAIgRgBIAAA9IgkAAIAAifIAZgEQAOgBANAAQAiAAASAMQARAOAAAaQAAARgIAMQgJALgQAGIAuBCgAgfg1IAAAxIARABQARAAAJgGQAIgGAAgOQABgNgJgHQgHgGgRAAQgKAAgJACg");
	this.shape_14.setTransform(-86.65,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-233.4,0,466.9,31.5), null);


(lib.border = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("AXXp1IAATmMgutAAAIAAzm");
	this.shape.setTransform(0,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(-150.5,-63.7,301,127.5), null);


(lib.BKGDskewbox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehf5ATiMAG3gnDMC48AAAMgG3AnDg");
	this.shape.setTransform(613.825,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDskewbox, new cjs.Rectangle(0,-125,1227.7,250), null);


// stage content:
(lib.UWM_nicu_768x1024 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,283];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_283 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(283).call(this.frame_283).wait(1));

	// border
	this.instance = new lib.border();
	this.instance.setTransform(384,872,2.5652,2.4055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284));

	// UWMed logo
	this.instance_1 = new lib.UWMed_logo();
	this.instance_1.setTransform(385.75,873.45,1.8,1.8,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(284));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(363.95,608.35,2.4,2.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({x:123.95,alpha:1},23,cjs.Ease.quintOut).wait(87).to({x:483.95,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(45));

	// underline2
	this.instance_3 = new lib.underline1();
	this.instance_3.setTransform(381.2,675.55,0.048,2.4,0,0,0,3.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({regX:0,scaleX:2.3549,x:368.3},87,cjs.Ease.quadOut).to({scaleX:2.355,x:731.15,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(45));

	// HEAD1
	this.instance_4 = new lib.HEAD1();
	this.instance_4.setTransform(363.95,608.35,2.4,2.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:123.95,alpha:1},22,cjs.Ease.quintOut).wait(87).to({x:339.95,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(165));

	// underline1
	this.instance_5 = new lib.underline1();
	this.instance_5.setTransform(294.15,675.55,0.048,2.4,0,0,0,3.1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({regX:0.1,scaleX:1.675},87,cjs.Ease.quadOut).to({regX:0,x:509,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(165));

	// BKGD skew box
	this.instance_6 = new lib.BKGDskewbox();
	this.instance_6.setTransform(1221.15,1021.55,2.4,2.4,0,0,0,613.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(284));

	// CTA
	this.instance_7 = new lib.CTA();
	this.instance_7.setTransform(623.95,577.55,2.4,2.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(248).to({_off:false},0).to({x:383.95,alpha:1},23,cjs.Ease.quintOut).wait(13));

	// CTA skew box cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC700").s().p("EgleAPtIFj/ZMBFaAAAIljfZg");
	this.shape.setTransform(-169.675,620.525);

	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.setTransform(-169.65,620.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(-249.65,620.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_8}]},229).to({state:[{t:this.instance_9}]},9).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(229).to({_off:false},0).to({_off:true,x:-249.65},9,cjs.Ease.quintIn).wait(46));

	// CTA skew box
	this.instance_10 = new lib.CTAskewbox();
	this.instance_10.setTransform(506.45,666.6,2.6299,2.422,0,0,0,50,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(284));

	// vignette
	this.instance_11 = new lib.vignette();
	this.instance_11.setTransform(383.95,-128,2.544,2.544);
	this.instance_11.alpha = 0.8008;
	this.instance_11.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:0},66).wait(52).to({alpha:0.8008},7).wait(3).to({scaleX:2.56},0).to({scaleX:2.544,alpha:0},64).to({_off:true},1).wait(91));

	// PIC2
	this.instance_12 = new lib.PIC2();
	this.instance_12.setTransform(150.1,0,1,1,0,0,0,0.1,0);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(119).to({_off:false},0).to({alpha:1},9).wait(156));

	// PIC1
	this.instance_13 = new lib.PIC1();
	this.instance_13.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},129).wait(155));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Eg7/BaAMAAAiz/MB3/AAAMAAACz/g");
	this.shape_1.setTransform(384,448);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(284));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg9jhRjMB7HAAAMAAACjHMh7HAAAg");
	this.shape_2.setTransform(384,512);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Eg9jBRkMAAAijHMB7HAAAMAAACjHg");
	this.shape_3.setTransform(384,512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(284));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-177.3,384,2871.7000000000003,937.5999999999999);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 768,
	height: 1024,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/UWM_nicu_768x1024_atlas_1.jpg?1680210994647", id:"UWM_nicu_768x1024_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;