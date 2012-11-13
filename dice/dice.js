//Die class
function Die(color) {
	this.img = '';
	this.color = color;
	this.side = '';
	this.imgs= '';
	
	switch(color) {
		case 'red':
			this.side = ['brain','run','run','bang','bang','bang'];
			break;
		case 'yellow':
			this.side = ['brain','brain','run','run','bang','bang'];
			break;
		case 'green':
			this.side = ['brain','brain','brain','run','run','bang'];
			break;
	}
};

Die.prototype.roll = function() {
	//Roll the dice!
	var number = Math.floor((Math.random()*6)+1);
	this.side = this.side[number];
}

//The dice
//TODO: find an elegant way of doing this
var red1    = new Die('red');
var red2    = new Die('red');
var red3    = new Die('red');
var yellow1 = new Die('yellow');
var yellow2 = new Die('yellow');
var yellow3 = new Die('yellow');
var yellow4 = new Die('yellow');
var green1  = new Die('green');
var green2  = new Die('green');
var green3  = new Die('green');
var green4  = new Die('green');
var green5  = new Die('green');
var green6  = new Die('green');