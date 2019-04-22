gameObj.Preloader = function (game) {};
//same command over and over again


gameObj.Preloader.prototype = {
    preload: function () {
        console.log("State - preload");
        this.stage.backgroundColor = '#ffffff';

        this.preloadBg = this.add.sprite((960 - 297) / 2, (720 - 145) / 2, 'preloaderBg');
        this.preloadBar = this.add.sprite((960 - 158) / 2, (720 - 50) / 2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);


        this.load.image('border', 'img/border.png');
        this.load.spritesheet('myButton', 'img/startplaying.png', 279, 60);
        this.load.image('dude1', 'img/dude.png');
        this.load.image('timerbg', 'img/timebg.png');
        this.load.image('timebar', 'img/timebar.png');
        this.load.image('timeprogress', 'img/time.png');
        this.load.image('targetbg', 'img/targetbg.png');
        this.load.image('currenttarget', 'img/currenttarget.png');
        this.load.image('progressbg', 'img/progressbg.png');
        this.load.image('progressbar', 'img/progressbar.png');
        this.load.image('progress', 'img/progress.png');
        this.load.image('stroke', 'img/stroke.png');
        //yellow shapes
        //this.load.spritesheet('shapesprite', 'images/shapesprite.png', 34, 34);
        //yellow shapes
        this.load.image('yellowdiamond', 'img/yellowdiamond.png');
        this.load.image('yellowcircle', 'img/yellowcircle.png');
        this.load.image('yellowstar', 'img/yellowstar.png');
        //blue shapes
        this.load.image('bluediamond', 'img/bluediamond.png');
        this.load.image('bluecircle', 'img/bluecircle.png');
        this.load.image('bluestar', 'img/bluestar.png');
        //red shapes
        this.load.image('reddiamond', 'img/reddiamond.png');
        this.load.image('redcircle', 'img/redcircle.png');
        this.load.image('redstar', 'img/redstar.png');
        //green shapes
        this.load.image('greendiamond', 'img/greendiamond.png');
        this.load.image('greencircle', 'img/greencircle.png');
        this.load.image('greenstar', 'img/greenstar.png');
        //orange shapes
        this.load.image('orangediamond', 'img/orangediamond.png');
        this.load.image('orangecircle', 'img/orangecircle.png');
        this.load.image('orangestar', 'img/orangestar.png');
        //purple shapes
        this.load.image('purplediamond', 'img/purplediamond.png');
        this.load.image('purplecircle', 'img/purplecircle.png');
        this.load.image('purplestar', 'img/purplestar.png');
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
