//Die class
function Die(color) {
	this.img = '';
	this.color = color;
	this.side = '';
	this.imgs= '';
	
	switch(color) {
		case 'red':
			this.imgs = ['brain','run','run','bang','bang','bang'];
			break;
		case 'yellow':
			this.imgs = ['brain','brain','run','run','bang','bang'];
			break;
		case 'green':
			this.imgs = ['brain','brain','brain','run','run','bang'];
			break;
	}
};

Die.prototype.roll = function() {
	//Roll the dice!
	var number = Math.floor((Math.random()*6)+1);
	this.side = this.imgs[number];
	this.img = 'dice/' + this.color + '_' + this.side + '.png';
}

//The dice
//TODO: find an elegant way of doing this
var dicecup = new Array();
for (var i=0;i<3;i++) { dicecup[i] = new Die('red'); }
for (var j=0;j<4;i++) { dicecup[j] = new Die('yellow'); }
for (var k=0;k<6;i++) { dicecup[k] = new Die('green'); }