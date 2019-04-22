gameObj.Game = function (game) {
    //step 1
    var myTime;
    var gameSeconds; //total game seconds
    var timerSeconds = "0"; //current timer in seconds
    var secondsLeft; //total game seconds - current timer second
    var points;
    var pointsShow;

};
var tile_size = 69;

gameObj.Game.prototype = {
    create: function () {
        //console.log("State - Game");
        //Add background image
        var border = this.add.sprite(this.world.centerX, this.world.centerY, 'border');
        border.anchor.setTo(0.5, 0.5);

        var stroke = this.add.sprite(this.world.centerX + 30, this.world.centerX - 450, 'stroke');
        points = 0;
        gameObj.finalScore = points;
        var currentTarg = this.add.sprite(this.world.centerX + 200, this.world.centerX - 125, 'currenttarget');

        this.game.physics.startSystem(Phaser.ARCADE)
        this.shapes = this.add.group();
        this.shapes.createMultiple(36, 'shapesprite');


        this.shapes.setAll('inputEnabled', true);
        this.shapes.setAll('input.useHandCursor', true);




        var progressbackground = this.add.sprite(this.world.centerX + 90, this.world.centerX - 380, 'progressbg');



        var myPercentStyle = {
            font: "400 24px Architects Daughter",
            fill: "#000",
            align: "center"
        };
        pointsShow = this.add.text(this.world.centerX + 195, this.world.centerX - 300, points + '%', myPercentStyle);

        var myProgress = "Progress of \nShape Painting"
        var myProgressStyle = {
            font: "400 18px Architects Daughter",
            fill: "#000",
            align: "center"
        };
        var myProgressShow = this.add.text(this.world.centerX + 160, this.world.centerX - 360, myProgress, myProgressStyle);

        var currentTargText = "Mix colors and make a:"
        var currentTargStyle = {
            font: "400 18px Architects Daughter",
            fill: "#000",
            align: "center"
        };
        var currentTargShow = this.add.text(this.world.centerX + 135, this.world.centerX - 220, currentTargText, currentTargStyle);

        var targetBg = this.add.sprite(this.world.centerX + 140, this.world.centerX - 190, 'targetbg');


        this.currenttarg = this.add.sprite(this.world.centerX + 200, this.world.centerX - 130, 'currenttarget');

        var timerbackground = this.add.sprite(this.world.centerX + 90, this.world.centerY + 120, 'timerbg');


        var myTimeText = "Time until Art Show:";
        var myTimeTextStyle = {
            font: "400 24px Architects Daughter",
            fill: "#000",
            align: "center"
        };
        var myTimeShow = this.add.text(this.world.centerX + 110, this.world.centerX + 35, myTimeText, myTimeTextStyle);

        var myTime = "2:00"
        var myTimeStyle = {
            font: "400 35px Architects Daughter",
            fill: "#000",
            align: "center"
        };


        myTimerShow = this.add.text(this.world.centerX + 190, this.world.centerX + 70, myTime, myTimeStyle);

        tmpWinnerBtn = this.add.button(this.world.centerX - 190, 600, 'btn_winner', this.winnerFun, this, 1, 0, 2);
        tmpWinnerBtn.anchor.setTo(0.5, 0.5);

        tmpLoserBtn = this.add.button(200, 600, 'btn_loser', this.loserFun, this, 1, 0, 2);
        tmpLoserBtn.anchor.setTo(0.5, 0.5);
        //timevars 
        tmpPointsBtn = this.add.button(300, 50, 'points_btn', this.pointsIncrease, this, 1, 0, 2);


        gameSeconds = 120;
        timerSeconds = 0;
        secondsLeft = 0;

        //create timer object
        timerObj = this.game.time.create(false);
        //set a timer event to occur every 1 second
        timerObj.loop(1000, this.updateTimer, this);
        //start the timer running
        timerObj.start();


        //        this.combo_s = this.game.add.audio('combo');
        this.clicked = false;

        this.type = -1;
        this.deleted_shapes = [];
        this.pos_i = -1;
        this.pos_j = -1;
        this.offset_x = 120;
        this.offset_y = 150;
        this.next_time = 0;
        score = 0;

        this.build_world();
        this.random_targ();
    },


    build_world: function () {
        for (var i = 0; i < 6; i++)
            for (var j = 0; j < 6; j++)
                this.add_shapesp(i, j, true);

    },
    add_shapesp: function (i, j, type) {
        var shapesprite = this.shapes.getFirstExists(false);

        var r = rand(18);
        if (r == 0) shapesprite.frame = 0;
        else if (r == 3) shapesprite.frame = 6;
        else if (r == 2) shapesprite.frame = 4;
        else if (r == 4) shapesprite.frame = 8;
        else if (r == 5) shapesprite.frame = 10;
        else if (r == 6) shapesprite.frame = 12;
        else if (r == 7) shapesprite.frame = 14;
        else if (r == 8) shapesprite.frame = 16;
        else if (r == 9) shapesprite.frame = 18;
        else if (r == 10) shapesprite.frame = 20;
        else if (r == 11) shapesprite.frame = 22;
        else if (r == 12) shapesprite.frame = 24;
        else if (r == 13) shapesprite.frame = 26;
        else if (r == 14) shapesprite.frame = 28;
        else if (r == 15) shapesprite.frame = 30;
        else if (r == 16) shapesprite.frame = 32;
        else if (r == 17) shapesprite.frame = 34;
        else if (r == 18) shapesprite.frame = 36;


        shapesprite.anchor.setTo(0.5, 0.5);
        shapesprite.selected = false;
        shapesprite.pos_i = i;
        shapesprite.pos_j = j;
        shapesprite.move_y = 0;
        shapesprite.move_x = 1;


        shapesprite.alpha = 1;
        shapesprite.scale.setTo(.01, .01);
        shapesprite.alive2 = true;
        shapesprite.reset(this.offset_x + j * tile_size, this.offset_y + i * tile_size);

        if (type)
            this.game.add.tween(shapesprite.scale).delay(j * 100 + 1).to({
                x: 1,
                y: 1
            }, 400).start();
        else
            this.game.add.tween(shapesprite.scale).delay(400).to({
                x: 1,
                y: 1
            }, 400).start();
    },
    random_targ: function () {
        console.log('hi');
        var randtarg = this.currenttarg;
        var r = rand(9);
        if (r == 0) randtarg.frame = 0;
        else if (r == 1) randtarg.frame = 1;
        else if (r == 2) randtarg.frame = 2;
        else if (r == 3) randtarg.frame = 3;
        else if (r == 4) randtarg.frame = 4;
        else if (r == 5) randtarg.frame = 5;
        else if (r == 6) randtarg.frame = 6;
        else if (r == 7) randtarg.frame = 7;
        else if (r == 8) randtarg.frame = 8;


        randtarg.scale.setTo(2, 2);


    },

    updateTimer: function () {
        //console.log('hola');
        timerSeconds++;


        if (timerSeconds <= gameSeconds) {
            secondsLeft = gameSeconds - timerSeconds;
            //
            displayMin = Math.floor(secondsLeft / 60) % 60;
            displaySec = Math.floor(secondsLeft) % 60;
            //
            if (displayMin < 10) {
                displayMin = "" + displayMin;
            }
            if (displaySec < 10) {
                displaySec = "0" + displaySec;
            }
            myTimerShow.setText(displayMin + ":" + displaySec);
        } else {
            timerSeconds = 0;
            this.loserFun();
        }
    },
    pointsIncrease: function () {
        //console.log("increase");
        gameObj.finalScore += 10;
        points = gameObj.finalScore;
        pointsShow.setText(points + "%");

        if (points == 100) {
            this.game.state.start('Winner');
        }
    },
    winnerFun: function () {
        gameObj.finalTime = timerSeconds;
        this.state.start('Winner');
    },
    loserFun: function () {
        gameObj.finalTime = timerSeconds;
        this.state.start('Loser');
    }
};
