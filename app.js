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
			this.playerHealth = 100;
		},
		//this method allows the user to attack
		attack: function () {
			this.monsterHealth -= this.calculateDamage(3, 10);
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();

			//this.checkWin();
		},
		//this method allows the user to use a special attack
		specialAttack: function () {
			this.monsterHealth -= this.calculateDamage(10, 20);
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},
		//this method allows the user to heal
		heal: function () {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			}
			this.playerHealth = 100;
			this.monsterAttacks();
		},
		//this method allows the user to giveUp
		giveUp: function () {
			this.gameIsRunning = false;
		},
		//this mthod allows monster to attack you
		monsterAttacks: function () {
			this.playerHealth -= this.calculateDamage(5, 12);
			this.checkWin();
		},
		//this method allows me to calculate damage
		calculateDamage: function (min, max) {
			let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
			return damage;
		},
		checkWin: function () {
			if (this.monsterHealth <= 0) {
				if (confirm('You won! New Game?')) {
					this.startNewGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('You Lost! New Game?')) {
					this.startNewGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		},
	},
});
