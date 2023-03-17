(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"UWM_cardio_300x250_atlas_1", frames: [[0,0,600,500],[0,502,600,500],[0,1004,662,234]]}
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



(lib.pic300x250cardiorehab = function() {
	this.initialize(ss["UWM_cardio_300x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic300x250cardioscreen = function() {
	this.initialize(ss["UWM_cardio_300x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.UW_Color_HighDegree_Logo = function() {
	this.initialize(ss["UWM_cardio_300x250_atlas_1"]);
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
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,177.7).s().p("A3bPUIAA+nMAu3AAAIAAeng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vignette, new cjs.Rectangle(-150,-98,300,196), null);


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
	this.instance = new lib.pic300x250cardiorehab();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib.pic300x250cardioscreen();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.HEAD3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(78.875,43.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AgLBHQgMgLAAgXIAAgwIgUAAIAAgcIAUAAIAGgrIAcAAIAAArIAgAAIAAAcIggAAIAAArQAAAIACAFQACAEAEACQAFADAHAAIANgCIAAAcQgLACgMAAQgVAAgLgLg");
	this.shape_1.setTransform(62.15,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AATA9IAAhIQAAgLgEgEQgEgEgIAAQgGAAgGADQgGACgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQAHgHAJgDQAIgEALAAQATAAALALQALAMAAAYIAABKg");
	this.shape_2.setTransform(50.925,44.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_3.setTransform(38.125,44.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AA0A9IAAhIQAAgKgEgFQgFgEgHAAQgFAAgFACQgFACgEAEIABAIIAABLIgiAAIAAhIQAAgLgEgEQgDgEgIAAQgFAAgGADQgFACgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQANgOAVAAQAKAAAIAEQAHADAFAJQAHgJAKgDQAJgEAKAAQASAAALALQALAMAAAYIAABKg");
	this.shape_4.setTransform(22.075,44.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgMBHQgLgLAAgXIAAgwIgTAAIAAgcIATAAIAHgrIAbAAIAAArIAfAAIAAAcIgfAAIAAArQAAAIACAFQACAEAFACQADADAIAAIANgCIAAAcQgMACgLAAQgVAAgMgLg");
	this.shape_5.setTransform(7.4,42.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AATA9IAAhIQAAgLgEgEQgEgEgIAAQgGAAgGADQgGACgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQAHgHAJgDQAIgEALAAQATAAALALQALAMAAAYIAABKg");
	this.shape_6.setTransform(-3.825,44.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgRBXIAAh3IAjAAIAAB3gAgPg2QgGgFAAgJQAAgJAGgEQAFgFAKAAQALAAAFAFQAGAEAAAJQAAAJgGAFQgFAEgLAAQgKAAgFgEg");
	this.shape_7.setTransform(-13.625,41.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgeA3QgNgHgIgOQgHgOAAgUQAAgeAQgQQAPgPAbAAQAcAAAPAPQAQAQAAAeQAAAUgHAOQgHAOgNAHQgOAHgSAAQgRAAgNgHgAgMggQgFAEgDAIQgCAHAAANQAAANACAIQADAIAFADQAFADAHAAQAIAAAFgDQAFgDADgIQACgIAAgNQAAgMgCgIQgDgIgFgEQgFgDgIAAQgHAAgFADg");
	this.shape_8.setTransform(-23.325,44.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("Ag4BVIAAioIAdAAIACANIACAAQAFgHAJgEQAHgDAKAAQAOAAALAGQALAGAHANQAGAOAAAUQAAAfgQAQQgRARgfAAIgOgBIAAAvgAgMg2QgGACgDAEIAAA7QAGABAHAAQAPAAAIgIQAHgHAAgTQAAgTgGgHQgHgIgKAAQgGAAgFACg");
	this.shape_9.setTransform(-36.4,46.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("Ag4BVIAAioIAdAAIACANIACAAQAFgHAJgEQAHgDAKAAQAOAAALAGQALAGAHANQAGAOAAAUQAAAfgQAQQgRARgfAAIgOgBIAAAvgAgMg2QgGACgDAEIAAA7QAGABAHAAQAPAAAIgIQAHgHAAgTQAAgTgGgHQgHgIgKAAQgGAAgFACg");
	this.shape_10.setTransform(-49.9,46.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AghA6QgIgEgGgJQgEgHAAgLQAAgRAMgKQAMgIAagBIATgCIAAgBQAAgJgDgFQgDgFgGgCQgFgCgKAAIgQABIgQAEIAAgaIASgEIAUgBQATAAAMAFQANAFAFAKQAGALAAAUIAABGIgdAAIgCgMIgCAAQgFAHgJAEQgHADgKAAQgMAAgJgEgAACAJQgKAAgEAFQgFADABAHQAAAHADADQAEAEAIAAQAEAAAGgCQAEgCAFgEIAAgWg");
	this.shape_11.setTransform(-63.35,44.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AATA9IAAhIQAAgLgEgDQgEgFgIAAQgGAAgGACQgGADgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQAHgHAJgEQAIgDALAAQATAAALALQALALAAAZIAABKg");
	this.shape_12.setTransform(38.025,18.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AghA6QgIgFgGgHQgEgIAAgKQAAgSAMgJQAMgJAagBIATgCIAAgCQAAgIgDgFQgDgEgGgCQgFgCgKAAIgQABIgQADIAAgaIASgEIAUgBQATAAAMAEQANAGAFAKQAGAMAAASIAABHIgdAAIgCgMIgCAAQgFAHgJADQgHAEgKAAQgMAAgJgEgAACAJQgKAAgEAEQgFAEABAHQAAAHADADQAEAEAIAAQAEAAAGgCQAEgCAFgEIAAgWg");
	this.shape_13.setTransform(24.85,18.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_14.setTransform(7.425,18.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AAWBZIgggwIgOAAIAAAwIgjAAIAAixIAjAAIAABlIAOAAIAdgsIAlAAIgmA5IAqA/g");
	this.shape_15.setTransform(-4.375,15.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AghA6QgJgFgFgHQgEgIAAgKQAAgSAMgJQAMgJAagBIASgCIAAgCQAAgIgCgFQgDgEgGgCQgFgCgKAAIgQABIgQADIAAgaIATgEIATgBQATAAAMAEQANAGAFAKQAGAMAAASIAABHIgdAAIgCgMIgCAAQgFAHgJADQgHAEgKAAQgMAAgJgEgAACAJQgJAAgFAEQgFAEAAAHQABAHAEADQAEAEAHAAQAFAAAEgCQAGgCADgEIAAgWg");
	this.shape_16.setTransform(-18.1,18.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("AA3BSIAAhzIgoBbIgdAAIgohYIAABwIghAAIAAiiIAsAAIAsBlIAshlIArAAIAACig");
	this.shape_17.setTransform(-34.325,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-233.4,0,466.9,57), null);


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
	this.shape.graphics.f("#32006E").s().p("AgNAWQgGgDgEgFQgDgHAAgHQAAgLAIgGQAGgHAMAAQAJAAAFADQAHAEACAFQAEAGAAAGQAAAIgEAFQgDAGgGADQgGADgIAAQgHAAgGgDg");
	this.shape.setTransform(130.35,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhEAAIAAAVIA6AAIAAAhIg6AAIAAAZIBFAAIAAAig");
	this.shape_1.setTransform(120.9,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AATBLIgggyIgKAAIAAAyIgqAAIAAiPQALgDAOgCIAZgBQAhAAASAMQARAMAAAaQAAAPgHAJQgGAMgNAFIAnA6gAgXgpIAAAjIAOABQAKgBAGgEQAGgEgBgKQABgSgWgBIgOACg");
	this.shape_2.setTransform(107.6,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhEAAIAAAVIA6AAIAAAhIg6AAIAAAZIBFAAIAAAig");
	this.shape_3.setTransform(93.55,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAZBKIAAg5IgxAAIAAA5IgrAAIAAiTIArAAIAAA1IAxAAIAAg1IArAAIAACTg");
	this.shape_4.setTransform(78.9,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgUBKIAAg8Ig1hXIAtAAIAeAzIAdgzIArAAIg0BWIAAA9g");
	this.shape_5.setTransform(59.05,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AATBLIgggyIgKAAIAAAyIgqAAIAAiPQAMgDANgCIAZgBQAiAAARAMQARAMAAAaQAAAPgHAJQgHAMgLAFIAmA6gAgXgpIAAAjIAOABQAKgBAGgEQAGgEgBgKQAAgSgVgBIgOACg");
	this.shape_6.setTransform(45.75,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAiIhFAAIAAAVIA6AAIAAAhIg6AAIAAAZIBFAAIAAAig");
	this.shape_7.setTransform(31.7,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgfBKIgsiTIAtAAIAfBxIAhhxIAqAAIgsCTg");
	this.shape_8.setTransform(17.4,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgnBEQgRgJgJgRQgJgSAAgYQAAgYAJgQQAJgSARgIQARgJAWAAQAXAAARAJQARAJAJARQAJAQAAAYQAAAZgJARQgJAQgRAKQgRAIgXAAQgWAAgRgIgAgWgeQgIAKAAAUQAAAVAIAKQAIAKAOABQAPAAAIgKQAIgKAAgVQAAgVgIgKQgIgKgPAAQgOgBgIALg");
	this.shape_9.setTransform(1.625,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("Ag6AAQAAgXAKgRQAKgRATgJQATgJAbAAQARAAAPADIAAAjQgPgCgNAAQgQAAgJAEQgJAEgFAJQgEAJAAANQAAAPAEAIQAFAJAIAEQAKAEAPABQAMAAARgFIAAAjIgQAEIgSABQhTAAAAhMg");
	this.shape_10.setTransform(-12.975,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("Ag4BKIAAiTIBwAAIAAAiIhFAAIAAAVIA6AAIAAAhIg6AAIAAAZIBFAAIAAAig");
	this.shape_11.setTransform(-25.9,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AATBLIgggyIgKAAIAAAyIgqAAIAAiPQAMgDANgCIAZgBQAiAAARAMQARAMAAAaQAAAPgHAJQgGAMgNAFIAnA6gAgXgpIAAAjIAOABQAKgBAGgEQAGgEgBgKQAAgSgVgBIgOACg");
	this.shape_12.setTransform(-39.2,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AATBLIgggyIgKAAIAAAyIgqAAIAAiPQAMgDANgCIAZgBQAiAAARAMQARAMAAAaQAAAPgHAJQgGAMgNAFIAnA6gAgXgpIAAAjIAOABQAKgBAGgEQAGgEgBgKQAAgSgVgBIgOACg");
	this.shape_13.setTransform(-58.55,15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhEAAIAAAVIA6AAIAAAhIg6AAIAAAZIBFAAIAAAig");
	this.shape_14.setTransform(-72.6,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AgVBKIAAhvIgsAAIAAgkICEAAIAAAkIgtAAIAABvg");
	this.shape_15.setTransform(-86.15,15.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AgVBKIAAhvIgsAAIAAgkICEAAIAAAkIgtAAIAABvg");
	this.shape_16.setTransform(-99.75,15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhDAAIAAAVIA5AAIAAAhIg5AAIAAAZIBEAAIAAAig");
	this.shape_17.setTransform(-112.9,15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#32006E").s().p("AgmBLIgXgDIAAiNIAagFIAagBQAiAAAQAKQARALAAAWQAAAKgHAJQgGAJgJACQALACAHAJQAIAJAAAOQAAAOgIAKQgIAJgRAGQgRAFgcAAgAgSAsIAPABQAJAAAFgCQAGgCACgCQADgEAAgFQAAgJgFgDQgFgDgMgBIgSAAgAgSgqIAAAZIAPAAQALAAAEgDQAFgDAAgHQAAgHgFgDQgEgEgLAAIgPACg");
	this.shape_18.setTransform(-126.175,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-233.4,0,466.9,29), null);


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
	this.shape.graphics.f("#32006E").s().p("AgNAWQgGgDgDgFQgEgHAAgHQAAgLAHgGQAIgHALAAQAIAAAHADQAGAEADAFQADAGAAAGQAAAIgDAFQgDAGgHADQgGADgIAAQgHAAgGgDg");
	this.shape.setTransform(124.8,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhDAAIAAAVIA5AAIAAAhIg5AAIAAAZIBEAAIAAAig");
	this.shape_1.setTransform(115.35,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AATBLIgggyIgJAAIAAAyIgrAAIAAiPQALgDAOgCIAagBQAhAAARAMQARAMAAAaQAAAPgGAJQgIAMgMAFIAnA6gAgWgpIAAAjIANABQAKgBAGgEQAFgEABgKQAAgSgXgBIgMACg");
	this.shape_2.setTransform(102.05,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("Ag4BKIAAiTIBvAAIAAAiIhDAAIAAAVIA5AAIAAAhIg5AAIAAAZIBFAAIAAAig");
	this.shape_3.setTransform(88,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAYBKIAAg5IgvAAIAAA5IgsAAIAAiTIAsAAIAAA1IAvAAIAAg1IAsAAIAACTg");
	this.shape_4.setTransform(73.35,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgUBKIAAg8Ig1hXIAuAAIAcAzIAegzIArAAIg0BWIAAA9g");
	this.shape_5.setTransform(53.5,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AATBLIgggyIgJAAIAAAyIgrAAIAAiPQALgDAOgCIAZgBQAhAAASAMQARAMAAAaQAAAPgHAJQgGAMgNAFIAnA6gAgWgpIAAAjIANABQAKgBAGgEQAGgEAAgKQAAgSgXgBIgMACg");
	this.shape_6.setTransform(40.2,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag3BKIAAiTIBuAAIAAAiIhDAAIAAAVIA5AAIAAAhIg5AAIAAAZIBEAAIAAAig");
	this.shape_7.setTransform(26.15,15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgfBKIgsiTIAtAAIAfBxIAhhxIAqAAIgrCTg");
	this.shape_8.setTransform(11.85,15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgnBEQgRgJgJgRQgJgSAAgYQAAgYAJgQQAJgSARgIQARgJAWAAQAXAAARAJQARAJAJARQAJAQAAAYQAAAZgJARQgJAQgRAKQgRAIgXAAQgWAAgRgIgAgWgeQgIAKAAAUQAAAVAIAKQAIAKAOABQAPAAAIgKQAIgKAAgVQAAgVgIgKQgIgKgPAAQgOgBgIALg");
	this.shape_9.setTransform(-3.925,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("Ag6AAQAAgXAKgRQAKgRATgJQATgJAbAAQARAAAPADIAAAjQgPgCgNAAQgQAAgJAEQgJAEgFAJQgEAJAAANQAAAPAEAIQAFAJAIAEQAKAEAPABQAMAAARgFIAAAjIgQAEIgSABQhTAAAAhMg");
	this.shape_10.setTransform(-18.525,15.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgeBLIgVgGIAAgjQAJADAMADQANABAKABQALgBAFgCQAEgDAAgFIgBgFIgFgDIgJgDIgNgEQgUgFgKgLQgLgKAAgRQAAgXARgNQARgMAhAAQAVAAAQAEIAAAjIgQgDIgSgBQgOAAgGACQgGAEAAAEIABAEQABADADABIAHADIANADQAXAGAKAKQALAKAAASQAAAPgIAKQgIALgOAGQgPAGgTAAQgMAAgLgBg");
	this.shape_11.setTransform(-31.175,15.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AgVBKIAAiTIArAAIAACTg");
	this.shape_12.setTransform(-40.475,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AguBLIgXgCIAAiOIAZgEIAcgBQAqgBAVATQAXASAAAmQAAAbgLAQQgLARgUAIQgVAIggAAgAgTgnIgGAAIAABQIAMAAQANAAAIgEQAJgEADgJQAFgJAAgPQAAgOgFgJQgEgJgIgEQgIgEgNAAg");
	this.shape_13.setTransform(-51.35,15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("Ag4BKIAAiTIBvAAIAAAiIhDAAIAAAVIA5AAIAAAhIg5AAIAAAZIBFAAIAAAig");
	this.shape_14.setTransform(-70.85,15.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AATBLIgggyIgJAAIAAAyIgrAAIAAiPQAMgDANgCIAagBQAgAAASAMQARAMAAAaQAAAPgGAJQgIAMgLAFIAmA6gAgWgpIAAAjIANABQAKgBAGgEQAFgEABgKQAAgSgXgBIgMACg");
	this.shape_15.setTransform(-84.15,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AgnBEQgRgJgJgRQgJgSAAgYQAAgYAJgQQAJgSARgIQARgJAWAAQAXAAARAJQARAJAJARQAJAQAAAYQAAAZgJARQgJAQgRAKQgRAIgXAAQgWAAgRgIgAgWgeQgIAKAAAUQAAAVAIAKQAIAKAOABQAPAAAIgKQAIgKAAgVQAAgVgIgKQgIgKgPAAQgOgBgIALg");
	this.shape_16.setTransform(-100.075,15.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("AAuBKIAAhbIgcBFIgiAAIgdhBIAABXIgpAAIAAiTIA1AAIAiBQIAghQIA1AAIAACTg");
	this.shape_17.setTransform(-118.05,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-233.4,0,466.9,29), null);


(lib.HEADskewbox = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC700").s().p("A5aFLIB1qVMAxAAAAIh1KVg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AotFLIB0qVIPnAAIh0KVg");
	this.shape_1.setTransform(206.875,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADskewbox, new cjs.Rectangle(-162.7,-33.1,425.4,66.30000000000001), null);


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
(lib.UWM_cardio_300x250 = function(mode,startPosition,loop,reversed) {
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

	// UWMed logo
	this.instance = new lib.UWMed_logo();
	this.instance.setTransform(150.75,287.3,0.75,0.75,0,0,0,0.4,0.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(241).to({_off:false},0).to({y:187.3},23,cjs.Ease.quintOut).wait(20));

	// border
	this.instance_1 = new lib.border();
	this.instance_1.setTransform(150,186.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(248).to({_off:false},0).to({alpha:1},21).wait(15));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(246,207);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({x:146,alpha:1},23,cjs.Ease.quintOut).wait(87).to({y:247,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(45));

	// underline2
	this.instance_3 = new lib.underline1();
	this.instance_3.setTransform(149,235,0.02,1,0,0,0,2.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({regX:0,scaleX:1.04,x:144},87,cjs.Ease.quadOut).to({scaleX:1,y:275,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(45));

	// HEAD1
	this.instance_4 = new lib.HEAD1();
	this.instance_4.setTransform(250,207);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:150,alpha:1},22,cjs.Ease.quintOut).wait(87).to({x:240,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(165));

	// underline1
	this.instance_5 = new lib.underline1();
	this.instance_5.setTransform(149,235,0.02,1,0,0,0,2.5,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).to({regX:0,scaleX:1},87,cjs.Ease.quadOut).to({x:239,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(165));

	// HEAD skew box
	this.instance_6 = new lib.HEADskewbox();
	this.instance_6.setTransform(136,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(229).to({y:265,alpha:0},9,cjs.Ease.quintIn).to({_off:true},1).wait(45));

	// BKGD skew box
	this.instance_7 = new lib.BKGDskewbox();
	this.instance_7.setTransform(498.8,349,1,1,0,0,0,613.8,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(239).to({_off:false},0).to({y:249,alpha:1},23,cjs.Ease.quintOut).wait(22));

	// HEAD3
	this.instance_8 = new lib.HEAD3();
	this.instance_8.setTransform(250,32);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(248).to({_off:false},0).to({x:150,alpha:1},23,cjs.Ease.quintOut).wait(13));

	// CTA skew box
	this.instance_9 = new lib.CTAskewbox();
	this.instance_9.setTransform(200,161,1,1,0,0,0,50,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(246).to({_off:false},0).to({regY:0.1,scaleY:1.0092,y:61.1,alpha:1},23,cjs.Ease.quintOut).wait(15));

	// vignette
	this.instance_10 = new lib.vignette();
	this.instance_10.setTransform(150,98);
	this.instance_10.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0},66).wait(52).to({alpha:0.6016},7).wait(3).to({alpha:0},60).to({_off:true},1).wait(95));

	// PIC2
	this.instance_11 = new lib.PIC2();
	this.instance_11.setTransform(150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({_off:false},0).to({alpha:1},9).to({_off:true},143).wait(13));

	// PIC1
	this.instance_12 = new lib.PIC1();
	this.instance_12.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},128).wait(156));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(284));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-56,125,1168.7,349);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/UWM_cardio_300x250_atlas_1.jpg?1679090430117", id:"UWM_cardio_300x250_atlas_1"}
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