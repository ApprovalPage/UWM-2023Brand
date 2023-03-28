(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"UWM_ortho_160x600_atlas_1", frames: [[0,0,600,1200],[602,0,600,1200],[0,1202,662,234]]}
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



(lib.pic300x600ortho1 = function() {
	this.initialize(ss["UWM_ortho_160x600_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic300x600ortho2 = function() {
	this.initialize(ss["UWM_ortho_160x600_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.UW_Color_HighDegree_Logo = function() {
	this.initialize(ss["UWM_ortho_160x600_atlas_1"]);
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
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,94.8).s().p("AsfbWMAAAg2rIY/AAMAAAA2rg");
	this.shape.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vignette, new cjs.Rectangle(-80,0,160,350), null);


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
	this.shape.graphics.f().s("#32006E").ss(2,1,1).p("AzXAAMAmvAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.underline1, new cjs.Rectangle(-125,-1,250,2), null);


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
	this.instance = new lib.pic300x600ortho2();
	this.instance.setTransform(-110,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-110,0,300,600), null);


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
	this.instance = new lib.pic300x600ortho1();
	this.instance.setTransform(-240,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-240,0,300,600), null);


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
	this.shape.graphics.f("#32006E").s().p("AgNAWQgGgDgDgGQgEgFAAgIQAAgKAHgHQAIgHALAAQAJAAAFADQAHAEACAFQAEAFAAAHQAAAHgEAGQgDAGgGADQgGADgIAAQgHAAgGgDg");
	this.shape.setTransform(65.35,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAjIhFAAIAAAUIA6AAIAAAhIg6AAIAAAZIBGAAIAAAig");
	this.shape_1.setTransform(54.9,41.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AATBLIgggyIgKAAIAAAyIgqAAIAAiPQAMgDANgCIAagBQAgAAASAMQARAMAAAaQAAAPgGAJQgIAMgLAFIAmA6gAgXgqIAAAkIAOAAQAKAAAGgEQAFgEAAgKQAAgSgWgBIgNABg");
	this.shape_2.setTransform(40.6,41.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAjIhEAAIAAAUIA5AAIAAAhIg5AAIAAAZIBFAAIAAAig");
	this.shape_3.setTransform(25.55,41.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAYBKIAAg5IgvAAIAAA5IgsAAIAAiTIAsAAIAAA1IAvAAIAAg1IAsAAIAACTg");
	this.shape_4.setTransform(9.9,41.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("Ag1BKIAAiTIArAAIAABvIBAAAIAAAkg");
	this.shape_5.setTransform(105,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("Ag4BKIAAiTIBvAAIAAAiIhDAAIAAAWIA5AAIAAAgIg5AAIAAAYIBFAAIAAAjg");
	this.shape_6.setTransform(91.15,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAiIhFAAIAAAWIA6AAIAAAgIg6AAIAAAYIBGAAIAAAjg");
	this.shape_7.setTransform(77.05,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("Ag3BKIAAiTIBvAAIAAAjIhEAAIAAAZIA6AAIAAAiIg6AAIAAA1g");
	this.shape_8.setTransform(63.3,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgyA6QgQgQAAgiIAAhSIArAAIAABWQABAPAFAGQAGAGALAAQANAAAFgGQAGgGABgPIAAhWIAqAAIAABSQAAAigQAQQgQARgjAAQgiAAgQgRg");
	this.shape_9.setTransform(41.8,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AgnBDQgRgIgJgRQgJgRAAgZQAAgYAJgRQAJgRARgJQARgIAWAAQAXAAARAIQARAKAJAQQAJARAAAYQAAAZgJAQQgJASgRAIQgRAJgXAAQgWAAgRgJgAgWgfQgIALAAAUQAAAVAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgUQAAgVgIgKQgIgLgPAAQgOAAgIAKg");
	this.shape_10.setTransform(24.825,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgUBKIAAg9Ig1hWIAuAAIAdAzIAdgzIArAAIg0BWIAAA9g");
	this.shape_11.setTransform(8.75,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,-20,155,75), null);


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
	this.shape.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAjIhFAAIAAAUIA6AAIAAAhIg6AAIAAAZIBGAAIAAAig");
	this.shape.setTransform(54.9,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AATBLIgggyIgKAAIAAAyIgqAAIAAiPQAMgDANgCIAagBQAgAAASAMQARAMAAAaQAAAPgGAJQgIAMgLAFIAmA6gAgXgqIAAAkIAOAAQAKAAAGgEQAFgEAAgKQAAgSgWgBIgNABg");
	this.shape_1.setTransform(40.6,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAjIhEAAIAAAUIA5AAIAAAhIg5AAIAAAZIBFAAIAAAig");
	this.shape_2.setTransform(25.55,41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AAYBKIAAg5IgvAAIAAA5IgsAAIAAiTIAsAAIAAA1IAvAAIAAg1IAsAAIAACTg");
	this.shape_3.setTransform(9.9,41.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAZBKIg0hSIAABSIgpAAIAAiTIAsAAIA0BSIAAhSIApAAIAACTg");
	this.shape_4.setTransform(113.675,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AATBLIgggyIgKAAIAAAyIgqAAIAAiPQAMgDANgCIAZgBQAhAAASANQARAMAAAZQAAAPgHAKQgGAKgNAHIAnA5gAgXgpIAAAjIAOABQAKAAAGgFQAGgEgBgKQABgSgWAAIgOABg");
	this.shape_5.setTransform(98.15,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAhBKIgJgiIgvAAIgKAiIgqAAIAsiTIA/AAIAsCTgAAPAGIgPg2IgOA2IAdAAg");
	this.shape_6.setTransform(81.8,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAiIhFAAIAAAWIA6AAIAAAgIg6AAIAAAYIBFAAIAAAjg");
	this.shape_7.setTransform(66.8,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("Ag1BKIAAiTIArAAIAABvIBAAAIAAAkg");
	this.shape_8.setTransform(53.55,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhEAAIAAAWIA6AAIAAAgIg6AAIAAAYIBFAAIAAAjg");
	this.shape_9.setTransform(33.6,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AAZBKIgYhiIgZBiIg4AAIgliTIArAAIAaBpIAahpIAvAAIAaBsIAahsIApAAIgmCTg");
	this.shape_10.setTransform(13.95,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgVBKIAAhvIgsAAIAAgkICEAAIAAAkIgtAAIAABvg");
	this.shape_11.setTransform(66.75,-4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AAhBKIgJgiIgvAAIgKAiIgqAAIAsiTIA/AAIAsCTgAAPAGIgPg1IgOA1IAdAAg");
	this.shape_12.setTransform(51.3,-4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AAYBKIAAg5IgvAAIAAA5IgsAAIAAiTIAsAAIAAA2IAvAAIAAg2IAsAAIAACTg");
	this.shape_13.setTransform(34.75,-4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("AAZBKIgYhiIgZBiIg4AAIgliTIArAAIAaBqIAahqIAvAAIAaBrIAahrIApAAIgmCTg");
	this.shape_14.setTransform(13.95,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,-20,170.5,75), null);


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
	this.shape_1.graphics.f("#32006E").s().p("A3bJwIAAzfMAu3AAAIAATfg");
	this.shape_1.setTransform(0,2.05,2.3733,1);

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
	this.shape.setTransform(85.175,43.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AgsA5IAAgaQASAFAUAAQALAAAFgDQAFgDAAgFQAAgFgDgCQgCgDgGgBIgSgDQgRgDgIgIQgIgIAAgPQAAgMAGgIQAHgJAMgFQANgEASAAIARABIAPACIAAAaQgPgEgQAAQgYAAAAAMQAAAEACADQADACAGABIASAEQARADAIAHQAIAIAAAPQAAAMgHAJQgGAJgMAEQgMAFgQAAQgWAAgRgFg");
	this.shape_1.setTransform(67.875,44.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_2.setTransform(56.375,44.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AgRBXIAAh3IAjAAIAAB3gAgPg2QgGgFAAgJQAAgJAGgEQAFgFAKAAQALAAAFAFQAGAEAAAJQAAAJgGAFQgFAEgLAAQgKAAgFgEg");
	this.shape_3.setTransform(47.175,41.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AglA9IAAh4IAdAAIADAQIACAAQADgJAJgDQAIgFAKAAIAKABIAAAgIgMgBQgHgBgJAEQgHADgDAFIAABOg");
	this.shape_4.setTransform(40.3,44.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgeA3QgNgHgIgOQgHgOAAgUQAAgeAQgQQAPgPAbAAQAcAAAPAPQAQAQAAAeQAAAUgHAOQgHAOgNAHQgOAHgSAAQgRAAgNgHgAgMggQgFAEgDAIQgCAHAAANQAAANACAIQADAIAFADQAFADAHAAQAIAAAFgDQAFgDADgIQACgIAAgNQAAgMgCgIQgDgIgFgEQgFgDgIAAQgHAAgFADg");
	this.shape_5.setTransform(28.625,44.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AgMBHQgLgLAAgXIAAgwIgTAAIAAgcIATAAIAHgrIAbAAIAAArIAfAAIAAAcIgfAAIAAArQAAAIACAFQACAEAFACQADADAIAAIANgCIAAAcQgMACgLAAQgVAAgMgLg");
	this.shape_6.setTransform(17.3,42.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgsA5IAAgaQASAFAUAAQALAAAFgDQAFgDAAgFQAAgFgDgCQgCgDgGgBIgSgDQgRgDgIgIQgIgIAAgPQAAgMAGgIQAHgJAMgFQANgEASAAIARABIAPACIAAAaQgPgEgQAAQgYAAAAAMQAAAEACADQADACAGABIASAEQARADAIAHQAIAIAAAPQAAAMgHAJQgGAJgMAEQgMAFgQAAQgWAAgRgFg");
	this.shape_7.setTransform(7.475,44.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgkA9IAAh4IAcAAIADAQIACAAQADgIAJgFQAIgEAKAAIAKABIAAAfIgLgBQgJAAgIAEQgHADgDAGIAABNg");
	this.shape_8.setTransform(92.3,18.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgqAyQgLgLAAgZIAAhKIAjAAIAABIQAAAKAEAFQAFAEAHAAQAFAAAGgDQAGgCAEgFIAAhRIAjAAIAAB3IgdAAIgCgMIgCAAQgGAHgJAEQgIADgKAAQgTAAgLgLg");
	this.shape_9.setTransform(80.525,18.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AgeA3QgNgHgIgOQgHgOAAgUQAAgeAQgQQAPgPAbAAQAcAAAPAPQAQAQAAAeQAAAUgHAOQgHAOgNAHQgOAHgSAAQgRAAgNgHgAgMggQgFAEgDAIQgCAHAAANQAAANACAIQADAIAFADQAFADAHAAQAIAAAFgDQAFgDADgIQACgIAAgNQAAgMgCgIQgDgIgFgEQgFgDgIAAQgHAAgFADg");
	this.shape_10.setTransform(67.275,18.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AggBUQgLgGgHgOQgGgNgBgVQABgeAQgRQARgQAfAAIAOABIAAg5IAkAAIAACxIgeAAIgDgNIgBAAQgGAHgHAEQgJAEgJAAQgOAAgLgGgAgNABQgIAIAAATQAAASAHAIQAFAIAMgBQAFAAAGgCQAEgCAEgEIAAg6IgOgBQgOgBgHAIg");
	this.shape_11.setTransform(48.15,15.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AghA6QgJgFgEgHQgFgIAAgKQAAgSAMgJQAMgJAagBIASgCIAAgCQABgIgDgFQgDgEgFgCQgHgCgJAAIgQABIgRADIAAgaIAUgEIAUgBQASAAAMAEQAMAGAGAKQAGAMAAASIAABHIgdAAIgDgMIgBAAQgGAHgHADQgIAEgKAAQgMAAgJgEgAABAJQgIAAgFAEQgEAEgBAHQAAAHAFADQADAEAIAAQAEAAAFgCQAFgCAEgEIAAgWg");
	this.shape_12.setTransform(35.25,18.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_13.setTransform(23.325,18.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("AAdBTIgpg8IgCAAIgRgBIAAA9IgkAAIAAifIAZgEQANgBAOAAQAiAAASAMQARAOAAAaQAAARgIAMQgJALgQAGIAuBCgAgfg1IAAAxIARABQASAAAIgGQAIgGAAgOQABgNgJgHQgHgGgRAAQgKAAgJACg");
	this.shape_14.setTransform(10.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(0,0,160,57), null);


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
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("AMbp1IAATmI41AAIAAzm");
	this.shape.setTransform(0,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(-80.5,-63.7,161,127.5), null);


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
(lib.UWM_ortho_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(80.3,536.7,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284));

	// UWMed logo
	this.instance_1 = new lib.UWMed_logo();
	this.instance_1.setTransform(80.8,537.35,0.46,0.46,0,0,0,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(284));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(114,384);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({x:14,alpha:1},23,cjs.Ease.quintOut).wait(87).to({x:164,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(45));

	// underline2
	this.instance_3 = new lib.underline1();
	this.instance_3.setTransform(74.05,438,0.02,1,0,0,0,2.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({regX:0.7,scaleX:0.4436,x:74.3},87,cjs.Ease.quadOut).to({regX:0.1,x:222,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(45));

	// HEAD1
	this.instance_4 = new lib.HEAD1();
	this.instance_4.setTransform(114,392);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:14,alpha:1},22,cjs.Ease.quintOut).wait(87).to({x:104,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(165));

	// underline1
	this.instance_5 = new lib.underline1();
	this.instance_5.setTransform(73,448,0.02,1,0,0,0,2.5,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({regX:1,scaleX:0.4637,x:74.45},87,cjs.Ease.quadOut).to({regX:0.1,x:164,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(165));

	// BKGD skew box
	this.instance_6 = new lib.BKGDskewbox();
	this.instance_6.setTransform(428.8,599,1,1,0,0,0,613.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(284));

	// CTA
	this.instance_7 = new lib.CTA();
	this.instance_7.setTransform(130,384);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(248).to({_off:false},0).to({x:26,alpha:1},23,cjs.Ease.quintOut).wait(13));

	// CTA skew box
	this.instance_8 = new lib.CTAskewbox();
	this.instance_8.setTransform(61,411.1,1,1.0092,0,0,0,50,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(284));

	// vignette
	this.instance_9 = new lib.vignette();
	this.instance_9.setTransform(80,0);
	this.instance_9.alpha = 0.8008;
	this.instance_9.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:0},66).wait(52).to({alpha:0.8008},7).wait(3).to({alpha:0},64).to({_off:true},1).wait(91));

	// PIC2
	this.instance_10 = new lib.PIC2();
	this.instance_10.setTransform(40,0);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({_off:false},0).to({alpha:1},9).wait(156));

	// PIC1
	this.instance_11 = new lib.PIC1();
	this.instance_11.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},129).wait(155));

	// BKGD
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32006E").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(284));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgODgwbIcHAAMAAABg3I8HAAg");
	this.shape_1.setTransform(80,300);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("EgODAwcMAAAhg3IcHAAMAAABg3g");
	this.shape_2.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(284));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-265,300,1307.7,424);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/UWM_ortho_160x600_atlas_1.jpg?1680043894386", id:"UWM_ortho_160x600_atlas_1"}
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