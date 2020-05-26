new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
	},
	methods: {
		//@vuese
		//this method is used to start a new game, sets all values to default
		startNewGame: function () {
			this.gameIsRunning = true;
			this.monsterHealth = 100;
			this.gameIsRunning = 100;
		},
		//this method allows the user to attack
		attack: function () {
			let max = 10;
			let min = 3;
			let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
			this.monsterHealth -= damage;

			if (this.monsterHealth <= 0) {
				alert('You won!');
				this.gameIsRunning = false;
				return;
			}

			max = 12;
			min = 5;
			damage = Math.max(Math.floor(Math.random() * max) + 1, min);
			this.playerHealth -= damage;
			if (this.playerHealth <= 0) {
				alert('You lost!');
				this.gameIsRunning = false;
				return;
			}
		},
		//this method allows the user to use a special attack
		specialAttack: function () {},
		//this method allows the user to heal
		heal: function () {},
		//this method allows the user to giveUp
		giveUp: function () {},
	},
});
