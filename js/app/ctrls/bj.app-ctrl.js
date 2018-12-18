/******************************************************************************

	bj.app-ctrl.js
	Andy Knoll
	December 2018

******************************************************************************/

// bj.AppCtrl class
bj.AppCtrl = function(name, parent) {
    wood.Controller.call(this, name, parent);
    this._className = "bj.AppCtrl";
};
bj.AppCtrl.prototype = Object.create(wood.Controller.prototype);
bj.AppCtrl.prototype.constructor = bj.AppCtrl;

// convenience getters
bj.AppCtrl.prototype.appGame = function() { return this.models().appGame; };	// "models"
bj.AppCtrl.prototype.appComp = function() { return this.views().appComp; };		// "views"

// use these to access others models and views
bj.AppCtrl.prototype.screenCompsCtrl = function() { return this.parent().screenCompsCtrl; };
bj.AppCtrl.prototype.screensComp = function() { return this.appComp().screensComp; };

// remember that for now the "screens" are holding single components - will change that soon
// we are accessing these via the Controllers - should just use direct access!
bj.AppCtrl.prototype.tableScreenComp = function() { return this.screensComp().tableScreenComp(); };
bj.AppCtrl.prototype.anteScreenComp  = function() { return this.screensComp().anteScreenComp();  };
bj.AppCtrl.prototype.playScreenComp  = function() { return this.screensComp().playScreenComp();  };
bj.AppCtrl.prototype.debugScreenComp = function() { return this.screensComp().debugScreenComp(); };

bj.AppCtrl.prototype.tableComp = function() { return this.tableScreenComp().tableComp(); };
bj.AppCtrl.prototype.anteComp  = function() { return this.anteScreenComp().anteComp();  };
bj.AppCtrl.prototype.playComp  = function() { return this.playScreenComp().playComp();  };
bj.AppCtrl.prototype.debugComp = function() { return this.debugScreenComp().debugComp(); };

// start everything!
bj.AppCtrl.prototype.run = function() { 
	//alert("AppCtrl.run");

	this.screensComp().hideTableScreen();
	this.screensComp().hideAnteScreen();
	this.screensComp().hidePlayScreen();
	this.screensComp().hideDebugScreen();
	
	this.screensComp().showSplashScreen();			// implement ???
	// this.screensComp().hideSplashScreen();		// implement ???

	//this.screensComp().showTableScreen();
};
