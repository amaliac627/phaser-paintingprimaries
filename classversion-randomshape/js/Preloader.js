gameObj.Preloader = function (game) {};
//same command over and over again
var w = 400;
var h = 500;
var score = 0;
var best_score = 0;
var sound = true;

function rand(num) {
    return Math.floor(Math.random() * num)
};


gameObj.Preloader.prototype = {
    preload: function () {
        console.log("State - preload");
        this.stage.backgroundColor = '#ffffff';




        this.load.image('border', 'img/border.png');
        this.load.spritesheet('myButton', 'img/startplaying.png', 282, 60);
        this.load.image('dude1', 'img/dude.png');
        this.load.image('timerbg', 'img/timebg.png');
        this.load.image('timebar', 'img/timebar.png');
        this.load.image('timeprogress', 'img/time.png');
        this.load.image('targetbg', 'img/targetbg.png');

        this.load.image('progressbg', 'img/progressbg.png');
        this.load.image('progressbar', 'img/progressbar.png');
        this.load.image('progress', 'img/progress.png');
        this.load.image('stroke', 'img/stroke.png');
        //yellow shapes
        this.load.spritesheet('shapesprite', 'img/shapesprite.png', 69, 69);
        this.load.spritesheet("arrows", "img/arrows.png", 420, 420);

        this.load.spritesheet('currenttarget', 'img/targetshape.png', 34, 34);
        this.load.image('grid', 'img/grid.png');

        this.load.spritesheet('myButtonTry', 'img/tryagain.png', 281, 60);
        this.load.spritesheet('myButtonHome', 'img/home.png', 281, 60);

        this.load.image('dude', 'img/saddude.png');
        this.load.image('windude', 'img/happydude.png');
        this.load.spritesheet('myButtonPlay', 'img/playagain.png', 281, 60);
        this.load.spritesheet('btn_winner', 'img/btn_winner.png', 90, 90);
        this.load.spritesheet('btn_loser', 'img/btn_loser.png', 90, 90);
        this.load.spritesheet('points_btn', 'img/points.png', 281, 60);
    },
    create: function () {
        // Comment out the line below to check preloader animation
        this.game.state.start('MainMenu');
    }
};
