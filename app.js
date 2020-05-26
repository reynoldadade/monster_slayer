new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: [],
	},
	methods: {
		//@vuese
		//this method is used to start a new game, sets all values to default
		startNewGame: function () {
			this.gameIsRunning = true;
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.turns = [];
		},
		//this method allows the user to attack
		attack: function () {
			const damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.logGameActions('Player hits monster with attack of ', damage);
			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();

			//this.checkWin();
		},
		//this method allows the user to use a special attack
		specialAttack: function () {
			const damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.logGameActions(
				'Player hits monster with special attack of ',
				damage
			);
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
			this.logGameActions(
				'Player has healed himself life is now ',
				this.playerHealth
			);
			this.monsterAttacks();
		},

		//this method allows the user to giveUp
		giveUp: function () {
			this.gameIsRunning = false;
		},

		//this mthod allows monster to attack you
		monsterAttacks: function () {
			const damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.logGameActions('Monster hits player with ', damage);
			this.checkWin();
		},

		//this method allows me to calculate damage
		calculateDamage: function (min, max) {
			const damage = Math.max(Math.floor(Math.random() * max) + 1, min);
			return damage;
		},
		checkWin: function () {
			if (this.monsterHealth <= 0) {
				this.confirmWin('You won! New Game?');
				return true;
			} else if (this.playerHealth <= 0) {
				this.confirmWin('You Lost! New Game?');
				return true;
			}
			return false;
		},
		confirmWin(message) {
			if (confirm(message)) {
				this.startNewGame();
			} else {
				this.gameIsRunning = false;
			}
		},
		logGameActions: function (message, damage) {
			let moves = [...this.turns];
			moves.unshift({
				isPlayer: true,
				text: message + damage,
			});
			this.turns = moves;
		},
	},
});
