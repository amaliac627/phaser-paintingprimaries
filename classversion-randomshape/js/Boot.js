var gameObj = {
    //    // Global variables are decleared here! final score and final time.
    finalScore: 100,
    finalTime: "00:00"
}; //important, game object

gameObj.Boot = function (game) {};

gameObj.Boot.prototype = {
    preload: function () {
        console.log("State - Boot");
        this.load.image('preloaderBg', 'img/loading-bg.png');
        this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function () {
            this.game.state.start('Preloader');
        } //after Javascript boot is done loading, calls preloader, so jumps from boot.js to preloader
};
