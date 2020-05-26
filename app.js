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
	},
});
