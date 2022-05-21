Vue.component("endgame-tab", {
    computed: {
        timeSpent: function() {
            time = game.timeSpent;
            formattedTime = functions.formatTime(time)
            return formattedTime
        },
    },
    methods: {
        hardResetGame: () => functions.hardResetGame(),
    },
    template: `<div id="endgame">
    <h2><span class="omega">You</span> Win!</h2>
    <p>The Ending Of All NEVERENDING Number's, would you like to continue or reset to a new world</p>
    <p>You beat the game in <span class="omega">{{timeSpent}}</span><br>
    <button onclick="game.settings.tab = 'Layers'">Continue</button> <button @click="hardResetGame()">Wipe Game</button></p>
</div>`
})
