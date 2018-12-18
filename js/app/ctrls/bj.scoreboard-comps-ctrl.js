/******************************************************************************

	bj.scoreboard-comps-ctrl.js
	Andy Knoll
	December 2018
    
******************************************************************************/

// bj.ScoreboardCompsCtrl class
bj.ScoreboardCompsCtrl = function(name, parent) {
    wood.Controller.call(this, name, parent);
    this._className = "bj.ScoreboardCompsCtrl";
};
bj.ScoreboardCompsCtrl.prototype = Object.create(wood.Controller.prototype);
bj.ScoreboardCompsCtrl.prototype.constructor = bj.ScoreboardCompsCtrl;

