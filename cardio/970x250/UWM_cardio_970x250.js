(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"UWM_cardio_970x250_atlas_1", frames: [[0,0,1940,500],[0,502,1940,500],[0,1004,662,234]]}
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



(lib.pic970x250cardiorehab = function() {
	this.initialize(ss["UWM_cardio_970x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic970x250cardioscreen = function() {
	this.initialize(ss["UWM_cardio_970x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.UW_Color_HighDegree_Logo = function() {
	this.initialize(ss["UWM_cardio_970x250_atlas_1"]);
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
	this.instance = new lib.pic970x250cardiorehab();
	this.instance.setTransform(-485,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-485,-125,970,250), null);


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
	this.instance = new lib.pic970x250cardioscreen();
	this.instance.setTransform(-485,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-485,-125,970,250), null);


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
	this.shape.setTransform(118.025,18.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AgLBIQgMgLAAgYIAAgwIgUAAIAAgcIAUAAIAGgqIAcAAIAAAqIAgAAIAAAcIggAAIAAArQAAAIACAFQACAFAEACQAFACAHAAIANgBIAAAbQgLADgMgBQgVABgLgLg");
	this.shape_1.setTransform(101.3,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AATA9IAAhIQAAgLgEgDQgEgFgIAAQgGAAgGACQgGADgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQAHgHAJgEQAIgDALAAQATAAALALQALALAAAZIAABKg");
	this.shape_2.setTransform(90.075,18.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_3.setTransform(77.275,18.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AA0A9IAAhIQAAgKgEgEQgFgFgHAAQgFAAgFACQgFACgEAEIABAIIAABLIgiAAIAAhIQAAgLgEgDQgDgFgIAAQgFAAgGACQgFADgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQANgOAVAAQAKAAAIADQAHAFAFAIQAHgIAKgFQAJgDAKAAQASAAALALQALALAAAZIAABKg");
	this.shape_4.setTransform(61.225,18.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgMBIQgLgLAAgYIAAgwIgTAAIAAgcIATAAIAHgqIAbAAIAAAqIAfAAIAAAcIgfAAIAAArQAAAIACAFQACAFAFACQADACAIAAIANgBIAAAbQgMADgLgBQgVABgMgLg");
	this.shape_5.setTransform(46.55,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AATA9IAAhIQAAgLgEgDQgEgFgIAAQgGAAgGACQgGADgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQAHgHAJgEQAIgDALAAQATAAALALQALALAAAZIAABKg");
	this.shape_6.setTransform(35.325,18.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgRBXIAAh3IAjAAIAAB3gAgPg2QgGgFAAgJQAAgJAGgEQAFgFAKAAQALAAAFAFQAGAEAAAJQAAAJgGAFQgFAEgLAAQgKAAgFgEg");
	this.shape_7.setTransform(25.525,15.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgeA3QgNgHgIgOQgHgOAAgUQAAgeAQgQQAPgPAbAAQAcAAAPAPQAQAQAAAeQAAAUgHAOQgHAOgNAHQgOAHgSAAQgRAAgNgHgAgMggQgFAEgDAIQgCAHAAANQAAANACAIQADAIAFADQAFADAHAAQAIAAAFgDQAFgDADgIQACgIAAgNQAAgMgCgIQgDgIgFgEQgFgDgIAAQgHAAgFADg");
	this.shape_8.setTransform(15.825,18.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("Ag4BVIAAioIAdAAIACANIACAAQAFgHAJgEQAHgDAKAAQAOAAALAGQALAGAHANQAGAOAAAUQAAAfgQAQQgRARgfAAIgOgBIAAAvgAgMg2QgGACgDAEIAAA7QAGABAHAAQAPAAAIgIQAHgHAAgTQAAgTgGgHQgHgIgKAAQgGAAgFACg");
	this.shape_9.setTransform(2.75,20.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("Ag4BVIAAioIAdAAIACANIACAAQAFgHAJgEQAHgDAKAAQAOAAALAGQALAGAHANQAGAOAAAUQAAAfgQAQQgRARgfAAIgOgBIAAAvgAgMg2QgGACgDAEIAAA7QAGABAHAAQAPAAAIgIQAHgHAAgTQAAgTgGgHQgHgIgKAAQgGAAgFACg");
	this.shape_10.setTransform(-10.75,20.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AghA6QgIgFgGgHQgEgIAAgKQAAgSAMgJQAMgJAagBIATgCIAAgCQAAgIgDgFQgDgEgGgCQgFgCgKAAIgQABIgQADIAAgaIASgEIAUgBQATAAAMAEQANAGAFAKQAGAMAAASIAABHIgdAAIgCgMIgCAAQgFAHgJADQgHAEgKAAQgMAAgJgEgAACAJQgKAAgEAEQgFAEABAHQAAAHADADQAEAEAIAAQAEAAAGgCQAEgCAFgEIAAgWg");
	this.shape_11.setTransform(-24.2,18.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AATA9IAAhIQAAgLgEgDQgEgFgIAAQgGAAgGACQgGADgDAFIAABRIgkAAIAAh4IAdAAIADANIABAAQAHgHAJgEQAIgDALAAQATAAALALQALALAAAZIAABKg");
	this.shape_12.setTransform(-42.275,18.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AghA6QgJgFgFgHQgEgIAAgKQAAgSAMgJQAMgJAagBIASgCIAAgCQAAgIgCgFQgDgEgGgCQgFgCgKAAIgQABIgQADIAAgaIATgEIATgBQATAAAMAEQANAGAFAKQAGAMAAASIAABHIgdAAIgCgMIgCAAQgFAHgJADQgHAEgKAAQgMAAgJgEgAACAJQgJAAgFAEQgFAEAAAHQABAHAEADQAEAEAHAAQAFAAAEgCQAGgCADgEIAAgWg");
	this.shape_13.setTransform(-55.45,18.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("AgZA4QgOgHgHgOQgHgNAAgWQAAgTAGgOQAHgOAMgHQANgHARAAQAZAAAOAQQANAQAAAeIAAAJIhIAAQABAJADAGQAEAGAHACQAHADANAAQAOAAAQgEIAAAaQgRAEgSAAQgWAAgPgGgAAVgKQAAgQgFgGQgFgHgKAAQgJAAgFAHQgFAGAAAQIAnAAIAAAAg");
	this.shape_14.setTransform(-72.875,18.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AAWBZIgggwIgOAAIAAAwIgjAAIAAixIAjAAIAABlIAOAAIAdgsIAlAAIgmA5IAqA/g");
	this.shape_15.setTransform(-84.675,15.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AghA6QgJgFgEgHQgFgIAAgKQAAgSAMgJQAMgJAagBIASgCIAAgCQABgIgDgFQgDgEgFgCQgHgCgJAAIgQABIgRADIAAgaIAUgEIAUgBQASAAAMAEQAMAGAGAKQAGAMAAASIAABHIgdAAIgDgMIgBAAQgGAHgHADQgIAEgKAAQgMAAgJgEgAABAJQgIAAgFAEQgEAEgBAHQAAAHAFADQADAEAIAAQAEAAAFgCQAFgCAEgEIAAgWg");
	this.shape_16.setTransform(-98.4,18.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("AA3BSIAAhzIgoBbIgdAAIgohYIAABwIghAAIAAiiIAsAAIAsBlIAshlIArAAIAACig");
	this.shape_17.setTransform(-114.625,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-233.4,0,466.9,31.5), null);


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
	this.shape.graphics.f("#32006E").s().p("AgPAYQgGgDgEgGQgDgHAAgIQAAgMAHgHQAIgHANAAQAJAAAHADQAHADADAHQADAGAAAHQAAAIgDAGQgEAHgGADQgHADgJAAQgIAAgHgDg");
	this.shape.setTransform(143.4,22.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_1.setTransform(132.975,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AAVBTIgjg3IgKAAIAAA3IgwAAIAAieIAcgFIAdgBQAkAAATANQASAOAAAcQABAQgIALQgHALgOAIIArA/gAgYgtIAAAmIAOABQALAAAHgFQAGgFAAgKQAAgVgYAAQgIAAgGACg");
	this.shape_2.setTransform(118.35,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_3.setTransform(102.875,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAbBSIAAg/Ig1AAIAAA/IgwAAIAAiiIAwAAIAAA6IA1AAIAAg6IAwAAIAACig");
	this.shape_4.setTransform(86.8,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgWBSIAAhDIg7hfIAzAAIAgA3IAhg3IAuAAIg4BeIAABEg");
	this.shape_5.setTransform(64.95,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAVBTIgjg3IgLAAIAAA3IguAAIAAieIAbgFIAcgBQAlAAASANQAUAOgBAcQAAAQgGALQgIALgOAIIAqA/gAgZgtIAAAmIAPABQAMAAAGgFQAGgFAAgKQAAgVgYAAQgHAAgIACg");
	this.shape_6.setTransform(50.35,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_7.setTransform(34.875,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgjBSIgwiiIAyAAIAiB8IAkh8IAvAAIgxCig");
	this.shape_8.setTransform(19.175,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgrBKQgTgJgKgTQgKgTAAgbQAAgaAKgTQAKgSATgKQATgKAYABQAZgBATAKQATAJAKAUQAKASAAAaQAAAbgKATQgKATgTAJQgTAJgZAAQgYAAgTgJgAgZghQgIALAAAWQAAAYAIALQAJAKAQABQAQgBAKgKQAIgLAAgXQAAgXgIgLQgKgLgQAAQgQgBgJAMg");
	this.shape_9.setTransform(1.85,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AhAABQAAgbALgSQALgTAWgJQAUgKAeAAQASAAAQADIAAAmQgPgCgPAAQgRAAgKAEQgKAFgGAKQgEAJAAAPQAAAQAEAKQAGAJAJAFQAKAEARABQAOgBARgEIAAAnIgRAEIgTAAQhcAAAAhSg");
	this.shape_10.setTransform(-14.25,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_11.setTransform(-28.475,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AAVBTIgjg3IgKAAIAAA3IgvAAIAAieIAbgFIAdgBQAkAAASANQATAOAAAcQABAQgIALQgHALgOAIIArA/gAgYgtIAAAmIAOABQAMAAAGgFQAGgFAAgKQAAgVgYAAQgIAAgGACg");
	this.shape_12.setTransform(-43.1,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AAVBTIgjg3IgKAAIAAA3IgwAAIAAieIAcgFIAdgBQAkAAATANQASAOAAAcQABAQgIALQgHALgOAIIArA/gAgYgtIAAAmIAOABQALAAAHgFQAGgFAAgKQAAgVgYAAQgIAAgGACg");
	this.shape_13.setTransform(-64.35,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_14.setTransform(-79.825,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AgXBSIAAh7IgxAAIAAgnICRAAIAAAnIgxAAIAAB7g");
	this.shape_15.setTransform(-94.725,16.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AgXBSIAAh7IgxAAIAAgnICRAAIAAAnIgxAAIAAB7g");
	this.shape_16.setTransform(-109.675,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_17.setTransform(-124.175,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#32006E").s().p("AgqBTIgZgDIAAicQANgDAPgBQAQgCANAAQAmgBASAMQASALAAAYQAAAMgHAJQgHAKgLAEQANACAIAJQAIAJAAAQQAAAQgJALQgIAKgTAGQgTAFgeAAgAgUAxIAQAAQAKAAAHgBQAGgCACgDQADgFAAgGQAAgIgFgEQgGgEgNAAIgUAAgAgUguIAAAcIARAAQAMAAAFgEQAFgEAAgHQAAgIgFgDQgFgFgMAAQgIAAgJADg");
	this.shape_18.setTransform(-138.825,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-233.4,0,466.9,31.5), null);


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
	this.shape.graphics.f("#32006E").s().p("AgPAYQgGgDgEgGQgDgHAAgIQAAgMAIgHQAHgHANAAQAJAAAHADQAHADADAHQAEAGgBAHQABAIgEAGQgEAHgGADQgHADgJAAQgIAAgHgDg");
	this.shape.setTransform(137.2,22.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_1.setTransform(126.775,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AAVBTIgjg3IgKAAIAAA3IgvAAIAAieIAbgFIAdgBQAkAAASANQATAOAAAcQABAQgIALQgHALgOAIIArA/gAgYgtIAAAmIAOABQAMAAAGgFQAGgFAAgKQAAgVgYAAQgIAAgGACg");
	this.shape_2.setTransform(112.15,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_3.setTransform(96.675,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAbBSIAAg/Ig1AAIAAA/IgwAAIAAiiIAwAAIAAA6IA1AAIAAg6IAwAAIAACig");
	this.shape_4.setTransform(80.6,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AgWBSIAAhDIg7hfIAzAAIAgA3IAhg3IAuAAIg4BeIAABEg");
	this.shape_5.setTransform(58.75,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAVBTIgjg3IgLAAIAAA3IgvAAIAAieIAcgFIAcgBQAlAAASANQAUAOAAAcQgBAQgGALQgIALgOAIIAqA/gAgZgtIAAAmIAPABQAMAAAGgFQAGgFAAgKQAAgVgYAAQgHAAgIACg");
	this.shape_6.setTransform(44.15,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_7.setTransform(28.675,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgjBSIgwiiIAyAAIAiB8IAkh8IAvAAIgxCig");
	this.shape_8.setTransform(12.975,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AgrBKQgTgJgKgTQgKgTAAgbQAAgaAKgTQAKgSATgKQASgKAZABQAZgBATAKQASAJALAUQAKASAAAaQAAAbgKATQgLATgSAJQgTAJgZAAQgZAAgSgJgAgZghQgIALAAAWQAAAYAIALQAJAKAQABQAQgBAJgKQAJgLAAgXQAAgXgJgLQgJgLgQAAQgQgBgJAMg");
	this.shape_9.setTransform(-4.35,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AhAABQABgbAKgSQALgTAWgJQAUgKAeAAQASAAAQADIAAAmQgPgCgPAAQgRAAgLAEQgJAFgGAKQgEAJAAAPQAAAQAEAKQAGAJAJAFQAKAEARABQAOgBARgEIAAAnIgQAEIgUAAQhcAAAAhSg");
	this.shape_10.setTransform(-20.45,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AghBSQgNgCgKgEIAAgmQAKAEANACQAOACALAAQAMAAAGgDQAFgDAAgGQAAgDgCgCIgFgEIgKgEIgPgDQgWgGgLgLQgLgMAAgTQAAgZATgOQASgNAkAAQAXgBASAFIAAAmQgHgCgLgBIgUgBQgPgBgHAEQgHADAAAFQAAABAAABQAAABABAAQAAABAAAAQAAABABAAQABACADABIAIAEIAPAEQAYAFAMAMQALALAAAUQAAAQgIAMQgJAMgQAGQgQAHgUgBQgNABgNgCg");
	this.shape_11.setTransform(-34.325,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AgXBSIAAiiIAvAAIAACig");
	this.shape_12.setTransform(-44.55,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AgzBSIgZgCIAAicQANgDAPgCIAegBQAvAAAYAUQAXAUAAAqQAAAdgLATQgLASgYAIQgWAJgjAAgAgVgsIgGABIAABXIANABQAOAAAJgFQAJgEAFgKQAEgKABgQQAAgQgGgKQgFgJgIgFQgJgEgOAAg");
	this.shape_13.setTransform(-56.5,16.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("Ag9BSIAAiiIB6AAIAAAlIhLAAIAAAYIBAAAIAAAlIhAAAIAAAaIBMAAIAAAmg");
	this.shape_14.setTransform(-77.975,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AAVBTIgjg3IgKAAIAAA3IgvAAIAAieIAbgFIAdgBQAkAAASANQATAOAAAcQABAQgIALQgHALgOAIIArA/gAgYgtIAAAmIAOABQAMAAAGgFQAGgFAAgKQAAgVgYAAQgIAAgGACg");
	this.shape_15.setTransform(-92.6,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AgrBKQgSgJgLgTQgKgTAAgbQAAgaAKgTQALgSASgKQATgKAYABQAagBASAKQATAJAKAUQAKASAAAaQAAAbgKATQgKATgTAJQgSAJgaAAQgYAAgTgJgAgYghQgJALAAAWQAAAYAJALQAIAKAQABQAQgBAKgKQAIgLAAgXQAAgXgIgLQgKgLgQAAQgPgBgJAMg");
	this.shape_16.setTransform(-110.05,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("AAzBSIAAhkIggBLIglAAIgghIIAABhIgsAAIAAiiIA6AAIAlBYIAkhYIA6AAIAACig");
	this.shape_17.setTransform(-129.825,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-233.4,0,466.9,31.5), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC700").s().p("EgiWAHAICet/MBCPAAAIieN/g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEADskewbox, new cjs.Rectangle(-219.8,-44.7,439.70000000000005,89.5), null);


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
(lib.UWM_cardio_970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,186];
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
	this.frame_186 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(186).call(this.frame_186).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLsgTcMCXZAAAMAAAAm5MiXZAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(187));

	// UWMed logo
	this.instance = new lib.UWMed_logo();
	this.instance.setTransform(780.65,175.8,0.8264,0.8264,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187));

	// HEAD3
	this.instance_1 = new lib.HEAD3();
	this.instance_1.setTransform(1193,47);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({x:623},9,cjs.Ease.quadOut).wait(29));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(1193,47);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(78).to({_off:false},0).to({x:623},9,cjs.Ease.quadOut).wait(46).to({regX:0.4,regY:16.5,x:623.4,y:63.5,alpha:0.8097},0).wait(1).to({alpha:0.6246},0).wait(1).to({alpha:0.4602},0).wait(1).to({alpha:0.3238},0).wait(1).to({alpha:0.2159},0).wait(1).to({alpha:0.1334},0).wait(1).to({alpha:0.0722},0).wait(1).to({alpha:0.0288},0).wait(1).to({regX:0,regY:0,x:623,y:47,alpha:0},0).to({_off:true},1).wait(45));

	// HEAD1
	this.instance_3 = new lib.HEAD1();
	this.instance_3.setTransform(1203,47);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:623},9,cjs.Ease.quadOut).wait(51).to({regX:0.4,regY:16.5,x:623.4,y:63.5,alpha:0.8097},0).wait(1).to({alpha:0.6246},0).wait(1).to({alpha:0.4602},0).wait(1).to({alpha:0.3238},0).wait(1).to({alpha:0.2159},0).wait(1).to({alpha:0.1334},0).wait(1).to({alpha:0.0722},0).wait(1).to({alpha:0.0288},0).wait(1).to({regX:0,regY:0,x:623,y:47,alpha:0},0).to({_off:true},1).wait(116));

	// HEAD skew box
	this.instance_4 = new lib.HEADskewbox();
	this.instance_4.setTransform(1201.05,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:621.05},9,cjs.Ease.quadOut).wait(52).to({alpha:0},9).wait(6).to({x:1191.05,alpha:1},0).to({x:621.05},9,cjs.Ease.quadOut).wait(47).to({alpha:0},9).wait(6).to({x:1191.05,alpha:1},0).to({x:621.05},9,cjs.Ease.quadOut).wait(31));

	// BKGD skew box
	this.instance_5 = new lib.BKGDskewbox();
	this.instance_5.setTransform(1588.8,125,1,1,0,0,0,613.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:1168.8},4,cjs.Ease.quadOut).wait(57).to({alpha:0},9).wait(6).to({x:1588.8,alpha:1},0).to({x:1168.8},4,cjs.Ease.quadOut).wait(52).to({alpha:0},9).wait(6).to({x:1588.8,alpha:1},0).to({x:1168.8},4,cjs.Ease.quadOut).wait(36));

	// PIC1 copy
	this.instance_6 = new lib.PIC1();
	this.instance_6.setTransform(970,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142).to({_off:false},0).to({x:485,alpha:1},9,cjs.Ease.quadOut).wait(36));

	// PIC2
	this.instance_7 = new lib.PIC2();
	this.instance_7.setTransform(970,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({x:485,alpha:1},9,cjs.Ease.quadOut).to({_off:true},71).wait(36));

	// PIC1
	this.instance_8 = new lib.PIC1();
	this.instance_8.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},80).wait(107));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(484.5,124.5,1718.1999999999998,126);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 970,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/UWM_cardio_970x250_atlas_1.jpg?1678749138283", id:"UWM_cardio_970x250_atlas_1"}
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