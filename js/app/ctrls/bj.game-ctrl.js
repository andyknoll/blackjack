/******************************************************************************

	bj.game-ctrl.js
	Andy Knoll
	December 2018
    
******************************************************************************/

// bj.GameCtrl class
bj.GameCtrl = function(name, parent) {
    wood.Controller.call(this, name, parent);
    this._className = "bj.GameCtrl";
};
bj.GameCtrl.prototype = Object.create(wood.Controller.prototype);
bj.GameCtrl.prototype.constructor = bj.GameCtrl;

