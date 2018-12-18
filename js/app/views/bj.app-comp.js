/******************************************************************************

	bj.app-comp.js
	Andy Knoll
	December 2018
    
	The main root UI component for the Blackjack Game.

	Requires:

		bj.scoreboard-comps.js
		bj.screen-comps.js
		
******************************************************************************/

// bj.AppComp class - contains all other components
bj.AppComp = function(name, parent, elemId) {
    wood.Panel.call(this, name, parent, elemId);
    this._className = "bj.AppComp";
};
bj.AppComp.prototype = Object.create(wood.Panel.prototype);
bj.AppComp.prototype.constructor = bj.AppComp;

bj.AppComp.prototype._template = function() {
    var t = "";
    t += "<div id='scoreboard-comp'></div>";
    t += "<div id='screens-comp'></div>";
    return t;
};

bj.AppComp.prototype._createChildComps = function() {
    this.scoreBoard  = new bj.ScoreBoardComp("scoreBoard", this, "scoreboard-comp");
    this.screensComp = new bj.ScreensComp("screens", this, "screens-comp");
};

