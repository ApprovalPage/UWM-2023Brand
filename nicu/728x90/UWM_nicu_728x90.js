(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"UWM_nicu_728x90_atlas_1", frames: [[0,0,1456,180],[0,182,1456,180],[0,364,662,234]]}
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



(lib.pic728x90nicu1 = function() {
	this.initialize(ss["UWM_nicu_728x90_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic728x90nicu2 = function() {
	this.initialize(ss["UWM_nicu_728x90_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.UW_Color_HighDegree_Logo = function() {
	this.initialize(ss["UWM_nicu_728x90_atlas_1"]);
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
	this.shape.graphics.rf(["#FFFFFF","#000000"],[0,1],0,0,0,0,0,356.6).s().p("EgvBAHCIAAuDMBeDAAAIAAODg");
	this.shape.setTransform(228.4508,45,0.7641,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vignette, new cjs.Rectangle(-1.5,0,460,90), null);


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
	this.shape.graphics.f().s("#32006E").ss(2,1,1).p("A2QAAMAshAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.underline1, new cjs.Rectangle(-143.5,-1,287,2), null);


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
	this.instance = new lib.pic728x90nicu2();
	this.instance.setTransform(-60,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-60,0,728,90), null);


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
	this.instance = new lib.pic728x90nicu1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(0,0,728,90), null);


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
	this.shape.graphics.f("#32006E").s().p("AgNAVQgFgDgEgFQgCgGAAgHQgBgKAIgGQAGgHALAAQAIAAAFADQAHADACAGQADAFAAAGQAAAHgDAFQgDAGgGADQgFADgIAAQgHAAgGgDg");
	this.shape.setTransform(154.9,19.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_1.setTransform(144.925,14.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("AASBHIgegvIgJAAIAAAvIgpAAIAAiIIAYgEIAZgBQAfAAAQALQAQAMAAAYQABAPgHAJQgGAKgMAGIAkA2gAgVgnIAAAhIAMABQALAAAEgEQAGgEAAgKQAAgRgVAAIgMABg");
	this.shape_2.setTransform(131.3,14.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_3.setTransform(116.975,14.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAXBGIAAg1IguAAIAAA1IgpAAIAAiLIApAAIAAAyIAuAAIAAgyIAqAAIAACLg");
	this.shape_4.setTransform(102.075,14.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("AASBHIgegvIgJAAIAAAvIgpAAIAAiIIAYgEIAYgBQAgAAAQALQARAMAAAYQgBAPgGAJQgGAKgMAGIAlA2gAgVgnIAAAhIAMABQAKAAAGgEQAFgEAAgKQAAgRgVAAIgMABg");
	this.shape_5.setTransform(81.5,14.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_6.setTransform(67.175,14.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("AgnA2QgWgSAAgkQAAgiAWgTQAWgSAqAAQASAAAOADIAAAhQgOgCgOAAQgRAAgLAEQgJAEgFAIQgFAJAAANQAAATAKAJQAJAKAUAAIADAAIAAglIAmAAIAABDQgVADgRAAQgqAAgVgSg");
	this.shape_7.setTransform(52.525,14.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AAYBGIgyhNIAABNIgmAAIAAiLIApAAIAxBNIAAhNIAnAAIAACLg");
	this.shape_8.setTransform(37.175,14.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("AglBAQgQgIgIgQQgJgRAAgXQAAgXAJgQQAIgQAQgIQAQgIAVAAQAWAAAQAIQAQAIAJAQQAJARAAAWQAAAXgJARQgJAQgQAIQgQAIgWAAQgVAAgQgIgAgVgdQgHAJAAAUQAAAUAHAKQAHAJAOAAQAOAAAIgJQAHgKABgTQgBgUgHgKQgIgJgOAAQgNAAgIAJg");
	this.shape_9.setTransform(20.8,14.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AASBHIgegvIgJAAIAAAvIgpAAIAAiIIAYgEIAYgBQAgAAAQALQAQAMABAYQgBAPgFAJQgHAKgMAGIAlA2gAgVgnIAAAhIANABQAJAAAGgEQAFgEAAgKQAAgRgUAAIgNABg");
	this.shape_10.setTransform(5.8,14.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgTBGIAAhpIgsAAIAAgiIB+AAIAAAiIgqAAIAABpg");
	this.shape_11.setTransform(-8.95,14.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AgdBHIgUgFIAAghQAJADAMACIAVABQAKAAAFgCQAFgDAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgEIgJgDIgMgDQgTgFgKgKQgKgJAAgRQAAgWAQgLQARgMAeAAQAUAAAQAEIAAAhIgQgDIgRgBQgNAAgGACQgGADAAAFIABAEQAAAAABABQAAAAABAAQAAABABAAQAAABABAAIAHADIANADQAVAFAKAKQAKAKAAAQQAAAOgIALQgHAKgOAGQgOAFgRAAQgMAAgLgBg");
	this.shape_12.setTransform(-22.125,14.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AASBHIgegvIgJAAIAAAvIgoAAIAAiIIAXgEIAZgBQAfAAAQALQAQAMAAAYQABAPgHAJQgGAKgMAGIAkA2gAgVgnIAAAhIAMABQALAAAEgEQAGgEAAgKQAAgRgVAAIgMABg");
	this.shape_13.setTransform(-40.95,14.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_14.setTransform(-55.275,14.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#32006E").s().p("AAXBGIAAg1IguAAIAAA1IgpAAIAAiLIApAAIAAAyIAuAAIAAgyIAqAAIAACLg");
	this.shape_15.setTransform(-70.175,14.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#32006E").s().p("AgdBHIgUgFIAAghQAJADAMACIAVABQAKAAAFgCQAFgDAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgEIgJgDIgMgDQgTgFgKgKQgKgJAAgRQAAgWAQgLQARgMAeAAQAUAAAQAEIAAAhIgQgDIgRgBQgNAAgGACQgGADAAAFIABAEQABAAAAABQAAAAABAAQAAABABAAQAAABABAAIAHADIANADQAVAFAKAKQAKAKAAAQQAAAOgIALQgHAKgOAGQgOAFgRAAQgMAAgLgBg");
	this.shape_16.setTransform(-90.275,14.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_17.setTransform(-103.075,14.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#32006E").s().p("AATBGIggg1IgJAAIAAA1IgpAAIAAiLIApAAIAAAyIAJAAIAegyIArAAIgqBEIAuBHg");
	this.shape_18.setTransform(-116.275,14.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#32006E").s().p("AAgBGIgJggIguAAIgIAgIgoAAIAqiLIA7AAIAqCLgAAOAGIgOgzIgOAzIAcAAg");
	this.shape_19.setTransform(-131.925,14.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#32006E").s().p("AAsBGIAAhWIgbBBIghAAIgbg9IAABSIgmAAIAAiLIAyAAIAfBMIAfhMIAzAAIAACLg");
	this.shape_20.setTransform(-149.45,14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-233.4,0,466.9,27.8), null);


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
	this.shape.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape.setTransform(119.625,14.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32006E").s().p("AASBHIgegvIgJAAIAAAvIgpAAIAAiIIAYgEIAZgBQAfAAAQALQARAMAAAYQAAAPgHAJQgGAKgMAGIAkA2gAgVgnIAAAhIAMABQALAAAFgEQAFgEAAgKQAAgRgVAAIgMABg");
	this.shape_1.setTransform(106,14.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_2.setTransform(91.675,14.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32006E").s().p("AAXBGIAAg1IguAAIAAA1IgpAAIAAiLIApAAIAAAyIAuAAIAAgyIAqAAIAACLg");
	this.shape_3.setTransform(76.775,14.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32006E").s().p("AAXBGIAAg1IguAAIAAA1IgpAAIAAiLIApAAIAAAyIAuAAIAAgyIAqAAIAACLg");
	this.shape_4.setTransform(54.925,14.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32006E").s().p("Ag3AAQAAgWAKgQQAJgQASgJQASgIAaAAQAQAAAOADIAAAhQgOgCgNAAQgOAAgJAEQgJAEgEAIQgEAJAAAMQAAAOAEAIQAEAIAIAEQAJAEAOAAQANAAAPgEIAAAiIgPADIgRABQhPAAAAhIg");
	this.shape_5.setTransform(40.325,14.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32006E").s().p("AAgBGIgJggIguAAIgIAgIgoAAIAqiLIA7AAIAqCLgAAOAGIgOgzIgOAzIAcAAg");
	this.shape_6.setTransform(25.875,14.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_7.setTransform(11.575,14.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32006E").s().p("AgTBGIAAhpIgrAAIAAgiIB9AAIAAAiIgqAAIAABpg");
	this.shape_8.setTransform(-2.3,14.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32006E").s().p("Ag1BGIAAiLIBqAAIAAAgIhBAAIAAAUIA3AAIAAAgIg3AAIAAAXIBCAAIAAAgg");
	this.shape_9.setTransform(-21.625,14.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32006E").s().p("AAYBGIgYhdIgXBdIg1AAIgjiLIApAAIAYBkIAahkIAsAAIAZBmIAYhmIAnAAIgjCLg");
	this.shape_10.setTransform(-40.35,14.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32006E").s().p("AgUBGIAAhpIgrAAIAAgiIB+AAIAAAiIgqAAIAABpg");
	this.shape_11.setTransform(-65,14.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32006E").s().p("AAgBGIgJggIguAAIgIAgIgoAAIAqiLIA7AAIAqCLgAAOAGIgOgzIgOAzIAcAAg");
	this.shape_12.setTransform(-79.675,14.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32006E").s().p("AAXBGIAAg1IguAAIAAA1IgpAAIAAiLIApAAIAAAyIAuAAIAAgyIAqAAIAACLg");
	this.shape_13.setTransform(-95.425,14.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32006E").s().p("AAYBGIgYhdIgXBdIg1AAIgjiLIApAAIAYBkIAahkIAsAAIAYBmIAZhmIAnAAIgkCLg");
	this.shape_14.setTransform(-115.25,14.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-233.4,0,466.9,27.8), null);


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
(lib.UWM_nicu_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(284));

	// HEAD3
	this.instance = new lib.HEAD3();
	this.instance.setTransform(1123,26.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(246).to({_off:false},0).to({x:553},9,cjs.Ease.quadOut).wait(29));

	// HEAD2
	this.instance_1 = new lib.HEAD2();
	this.instance_1.setTransform(875,26.25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({x:553},9,cjs.Ease.quadOut).wait(95).to({regX:-0.1,regY:14.5,x:552.9,y:40.75,alpha:0.8097},0).wait(1).to({alpha:0.6246},0).wait(1).to({alpha:0.4602},0).wait(1).to({alpha:0.3238},0).wait(1).to({alpha:0.2159},0).wait(1).to({alpha:0.1334},0).wait(1).to({alpha:0.0722},0).wait(1).to({alpha:0.0288},0).wait(1).to({regX:0,regY:0,x:553,y:26.25,alpha:0},0).to({_off:true},1).wait(45));

	// underline2
	this.instance_2 = new lib.underline1();
	this.instance_2.setTransform(552,58.25,0.02,1,0,0,0,2.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).to({regX:0.1,scaleX:1.0807,x:551},94,cjs.Ease.quadOut).to({regX:0,x:551.95,alpha:0},9).to({_off:true},1).wait(45));

	// HEAD1
	this.instance_3 = new lib.HEAD1();
	this.instance_3.setTransform(875,26.25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:553},9,cjs.Ease.quadOut).wait(99).to({regX:-0.7,regY:14.5,x:552.3,y:40.75,alpha:0.8097},0).wait(1).to({alpha:0.6246},0).wait(1).to({alpha:0.4602},0).wait(1).to({alpha:0.3238},0).wait(1).to({alpha:0.2159},0).wait(1).to({alpha:0.1334},0).wait(1).to({alpha:0.0722},0).wait(1).to({alpha:0.0288},0).wait(1).to({regX:0,regY:0,x:553,y:26.25,alpha:0},0).to({_off:true},1).wait(165));

	// underline1
	this.instance_4 = new lib.underline1();
	this.instance_4.setTransform(552.05,58.25,0.02,1,0,0,0,2.5,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({regX:0.4,scaleX:0.8807,x:551.8},98,cjs.Ease.quadOut).to({regX:0.1,x:552.05,alpha:0},9).to({_off:true},1).wait(165));

	// HEAD skew box
	this.instance_5 = new lib.HEADskewbox();
	this.instance_5.setTransform(655,44.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:586.05},9,cjs.Ease.quadOut).wait(275));

	// UWMed logo
	this.instance_6 = new lib.UWMed_logo();
	this.instance_6.setTransform(540.3,42.7,0.719,0.719,0,0,0,0.4,0.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(232).to({_off:false},0).to({x:180.65},9,cjs.Ease.quartOut).wait(43));

	// BKGD skew box
	this.instance_7 = new lib.BKGDskewbox();
	this.instance_7.setTransform(979.8,-35,1,1,0,0,0,613.8,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(228).to({_off:false},0).to({x:597.8},9,cjs.Ease.quartInOut).wait(47));

	// vignette
	this.instance_8 = new lib.vignette();
	this.instance_8.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0},66).wait(52).to({alpha:0.8008},7).wait(3).to({alpha:0},64).to({_off:true},1).wait(91));

	// PIC2
	this.instance_9 = new lib.PIC2();
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).to({alpha:1},9).to({_off:true},120).wait(36));

	// PIC1
	this.instance_10 = new lib.PIC1();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},128).wait(156));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg6bgIlMB03AAAIAARLMh03AAAg");
	this.shape_1.setTransform(364,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Eg6bAImIAAxLMB03AAAIAARLg");
	this.shape_2.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(284));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(304,-115,1289.7,205.5);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 728,
	height: 90,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/UWM_nicu_728x90_atlas_1.jpg?1680211012933", id:"UWM_nicu_728x90_atlas_1"}
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