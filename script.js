var score = [0, 0];

var isPlay, currentScore, player;

init();

// alert('Game nya menang kalo 100 scorenya. Roll dice buat dapet jumlah dadu, kalau dadu nya 1 currentScorenya jadi 0. Hold kalau mau simpan scorenya :)');

document.querySelector('.roll').addEventListener('click', function(){
	if(isPlay){
		// Random Number
		var random = Math.floor(Math.random() * 6 + 1);

		// Display Result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = "block";
		var diceImage = document.querySelector('.dice-img');
		diceImage.src = "dice-" + random + ".png";

		if(random !== 1){
			currentScore += random;
			document.querySelector('.curr-' + player).textContent = currentScore;
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.hold').addEventListener('click', function(){
	if(isPlay){
		score[player-1] += currentScore;

		document.querySelector('.score-' + player).textContent = score[player-1];

		if(score[player-1] >= 100){
			isPlay = false;
			document.querySelector('.curr-' + player).textContent = 0;
			document.querySelector('.dice').style.display = "none";
			document.querySelector('.player-' + player).textContent = "WINNER";
			document.querySelector('.player-' + player).style.color = "#ff0000";
			document.querySelector('.player-name').pseudoStyle("after","border-bottom-color","ff0000");
		} else {
			if(currentScore > 0){
				nextPlayer();
			}
		}
	}
});

function nextPlayer(){
	player === 2 ? player = 1 : player = 2;
	currentScore = 0;

	document.querySelector('.curr-1').textContent = 0;
	document.querySelector('.curr-2').textContent = 0;

	document.querySelector('.section-1').classList.toggle('active');
	document.querySelector('.section-2').classList.toggle('active');

	document.querySelector('.dice').style.display = "none";
}

function init(){
	isPlay = true;
	player = 1;
	currentScore = 0;

	document.querySelector('.score-1').textContent = 0;
	document.querySelector('.score-2').textContent = 0;
	document.querySelector('.curr-1').textContent = 0;
	document.querySelector('.curr-2').textContent = 0;
	document.querySelector('.player-1').textContent = "PLAYER 1";
	document.querySelector('.player-2').textContent = "PLAYER 2";
	document.querySelector('.player-1').style.color = "#000";
	document.querySelector('.player-2').style.color = "#000";
	document.querySelector('.section-1').classList.remove("active");
	document.querySelector('.section-2').classList.remove("active");
	document.querySelector('.section-1').classList.add("active");
	document.querySelector('.dice').style.display = "none";
}