/******************************************************************************

	bj.app.js
	Andy Knoll
	December 2018
    
    bj.App class

    All app functionality is now provided in the custom classes 
    which are the Models, Views, and Controllers for the app.

    The developer will write custom classes which make up the app.


******************************************************************************/

var bj = {};       // namespace

// bj.App class
bj.App = function(name, parent) {
    wood.MvcApp.call(this, name, parent);
    this._className = "bj.App";
};
bj.App.prototype = Object.create(wood.MvcApp.prototype);
bj.App.prototype.constructor = bj.App;

// overridden to create custom classes!
// the classes are in this file below
bj.App.prototype._createMvcObjects = function() {
    this._models = new bj.Models("_models", this);
    this._views  = new bj.Views("_views", this);
    this._ctrls  = new bj.Controllers("_ctrls", this);
};


bj.App.prototype.run = function() {
    this.views().appComp.scoreBoard.setProp("title", "Blackjack 2018")

    // prove that we can access components via the controller
    // var screenCtrl = this.ctrls().screenCompsCtrl;
    // alert(screenCtrl.debugComp().button0.infoAsText());

    this.ctrls().appCtrl.run();
};







// the app's MVC collections

// bj.Models class - should pass null as parent!
bj.Models = function(name, parent) {
    wood.Models.call(this, name, parent);
    this._className = "bj.Models";
    // add the Blackjack Game model
	this.addModel(new bj.Game("appGame", this));
}
bj.Models.prototype = Object.create(wood.Models.prototype);
bj.Models.prototype.constructor = bj.Models;



// bj.Views class - should pass null as parent!
bj.Views = function(name, parent) {
    wood.Views.call(this, name, parent);
	this._className = "bj.Views";
    // add the Blackjack views (now tree of UI components)
	this.addComp(new bj.AppComp("appComp", this, "app-comp"));  // pass in root element
}
bj.Views.prototype = Object.create(wood.Views.prototype);
bj.Views.prototype.constructor = bj.Views;



// bj.Controllers class
bj.Controllers = function(name, parent) {
    wood.Controllers.call(this, name, parent);
    this._className = "bj.Controllers";
    // add the various Blackjack controllers - not a tree structure
	this.addController(new bj.AppCtrl("appCtrl", this));
	this.addController(new bj.GameCompsCtrl("gameCompsCtrl", this));
	this.addController(new bj.ScreenCompsCtrl("screenCompsCtrl", this));
	this.addController(new bj.ScoreboardCompsCtrl("scoreboardCtrl", this));
}
bj.Controllers.prototype = Object.create(wood.Controllers.prototype);
bj.Controllers.prototype.constructor = bj.Controllers;

