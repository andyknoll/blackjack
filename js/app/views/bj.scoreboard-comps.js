/******************************************************************************

	bj.scoreboard-comps.js
	Andy Knoll
	December 2018

	Holds the UI scoreboard for the Blackjack Game.

******************************************************************************/

// bj.ScoreBoardComp class
bj.ScoreBoardComp = function(name, parent, elemId) {
    wood.Panel.call(this, name, parent, elemId);
    this._className = "bj.ScoreBoardComp";
    this.title = "";
};
bj.ScoreBoardComp.prototype = Object.create(wood.Panel.prototype);
bj.ScoreBoardComp.prototype.constructor = bj.ScoreBoardComp;

bj.ScoreBoardComp.prototype._template = function() {
    var t = "";
    t += "<div id='title'></div>";
    return t;
};

