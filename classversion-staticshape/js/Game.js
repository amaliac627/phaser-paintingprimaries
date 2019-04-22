gameObj.Game = function (game) {
    //step 1
    var myTime;
    var gameSeconds; //total game seconds
    var timerSeconds = "0"; //current timer in seconds
    var secondsLeft; //total game seconds - current timer second
    var points;
    var pointsShow;
};

gameObj.Game.prototype = {
    create: function () {
        //console.log("State - Game");
        //Add background image
        var border = this.add.sprite(this.world.centerX, this.world.centerY, 'border'); //x and y locations relative to canvas, if specified, can take take a way anchor of set point
        border.anchor.setTo(0.5, 0.5);
        //var dude = this.add.sprite(this.world.centerX, this.world.centerY, 'dude');
        //dude.anchor.setTo(1.15, .45);
        var stroke = this.add.sprite(this.world.centerX + 30, this.world.centerX - 450, 'stroke');
        points = 0;
        gameObj.finalScore = points;


        var yellowdiamond = this.add.sprite(this.world.centerX + 15, this.world.centerX - 285, 'yellowdiamond');
        yellowdiamond.anchor.setTo(1, 0.5);

        //5th column, 1st row
        var bluediamond = this.add.sprite(this.world.centerX - 53, this.world.centerX - 285, 'bluediamond');
        bluediamond.anchor.setTo(1, 0.5);

        //4th column, 1st row
        var greendiamond = this.add.sprite(this.world.centerX - 120, this.world.centerX - 285, 'greendiamond');
        greendiamond.anchor.setTo(1, 0.5);

        //3rd column, 1st row
        var redcircle = this.add.sprite(this.world.centerX - 185, this.world.centerX - 285, 'redcircle');
        redcircle.anchor.setTo(1, 0.5);

        //1st column, 2nd row
        var purplestar = this.add.sprite(this.world.centerX - 250, this.world.centerX - 285, 'purplestar');
        purplestar.anchor.setTo(1, 0.5);

        //1st column, 1st row
        var purplecircle = this.add.sprite(this.world.centerX - 318, this.world.centerX - 285, 'purplecircle');
        purplecircle.anchor.setTo(1, 0.5);


        //1st column, 2nd row
        var greenstar = this.add.sprite(this.world.centerX - 318, this.world.centerX - 220, 'greenstar');
        greenstar.anchor.setTo(1, 0.5);

        //2nd column, 2nd row
        var bluecircle = this.add.sprite(this.world.centerX - 250, this.world.centerX - 220, 'bluecircle');
        bluecircle.anchor.setTo(1, 0.5);

        //3rd column, 2nd row
        var redstar = this.add.sprite(this.world.centerX - 185, this.world.centerX - 220, 'redstar');
        redstar.anchor.setTo(1, 0.5);

        //4th column, 2nd row
        var orangecircle = this.add.sprite(this.world.centerX - 118, this.world.centerX - 220, 'orangecircle');
        orangecircle.anchor.setTo(1, 0.5);

        //5th column, 2nd row
        var purplediamond = this.add.sprite(this.world.centerX - 53, this.world.centerX - 220, 'purplediamond');
        purplediamond.anchor.setTo(1, 0.5);

        //6th column, 2nd row
        var orangediamond1 = this.add.sprite(this.world.centerX + 15, this.world.centerX - 220, 'orangediamond');
        orangediamond1.anchor.setTo(1, 0.5);


        //1st column, 3rd row
        var yellowstar = this.add.sprite(this.world.centerX - 318, this.world.centerX - 152, 'yellowstar');
        yellowstar.anchor.setTo(1, 0.5);

        //2nd column, 3rd row
        var greencircle = this.add.sprite(this.world.centerX - 250, this.world.centerX - 152, 'greencircle');
        greencircle.anchor.setTo(1, 0.5);

        //3rd column, 3rd row
        var bluestar = this.add.sprite(this.world.centerX - 185, this.world.centerX - 152, 'bluestar');
        bluestar.anchor.setTo(1, 0.5);

        //4th column, 3rd row
        var reddiamond = this.add.sprite(this.world.centerX - 118, this.world.centerX - 152, 'reddiamond');
        reddiamond.anchor.setTo(1, 0.5);

        //5th column, 3rd row
        var yellowcircle1 = this.add.sprite(this.world.centerX - 52, this.world.centerX - 152, 'yellowcircle');
        yellowcircle1.anchor.setTo(1, 0.5);

        //6th column, 3rd row
        var reddiamond1 = this.add.sprite(this.world.centerX + 15, this.world.centerX - 152, 'reddiamond');
        reddiamond1.anchor.setTo(1, 0.5);
        //1st column, 4th row
        var orangediamond = this.add.sprite(this.world.centerX - 318, this.world.centerX - 85, 'orangediamond');
        orangediamond.anchor.setTo(1, 0.5);

        //2nd column, 4th row
        var bluestar1 = this.add.sprite(this.world.centerX - 250, this.world.centerX - 85, 'bluestar');
        bluestar1.anchor.setTo(1, 0.5);

        //3rd column, 4th row
        var yellowcircle = this.add.sprite(this.world.centerX - 185, this.world.centerX - 85, 'yellowcircle');
        yellowcircle.anchor.setTo(1, 0.5);

        //4th column, 4th row
        var redcircle1 = this.add.sprite(this.world.centerX - 118, this.world.centerX - 85, 'redcircle');
        redcircle1.anchor.setTo(1, 0.5);

        //5th column, 4th row
        var purplediamond1 = this.add.sprite(this.world.centerX - 53, this.world.centerX - 85, 'purplediamond');
        purplediamond1.anchor.setTo(1, 0.5);
        //6th column, 4th row
        var bluecircle1 = this.add.sprite(this.world.centerX + 15, this.world.centerX - 85, 'bluecircle');
        bluecircle1.anchor.setTo(1, 0.5);
        //1st column, 5th row
        var bluediamond1 = this.add.sprite(this.world.centerX - 318, this.world.centerX - 20, 'bluediamond');
        bluediamond1.anchor.setTo(1, 0.5);
        //2nd column, 5th row
        var reddiamond2 = this.add.sprite(this.world.centerX - 250, this.world.centerX - 20, 'reddiamond');
        reddiamond2.anchor.setTo(1, 0.5);
        //3rd column, 5th row
        var redstar1 = this.add.sprite(this.world.centerX - 185, this.world.centerX - 20, 'redstar');
        redstar1.anchor.setTo(1, 0.5);
        //4th column, 5th row
        var orangestar = this.add.sprite(this.world.centerX - 118, this.world.centerX - 20, 'orangestar');
        orangestar.anchor.setTo(1, 0.5);
        //5th column, 5th row
        var purplecircle1 = this.add.sprite(this.world.centerX - 53, this.world.centerX - 20, 'purplecircle');
        purplecircle1.anchor.setTo(1, 0.5);
        //6th column, 5th row
        var greencircle1 = this.add.sprite(this.world.centerX + 15, this.world.centerX - 20, 'greencircle');
        greencircle1.anchor.setTo(1, 0.5);
        //1st column, 6th row
        var orangestar1 = this.add.sprite(this.world.centerX - 318, this.world.centerX + 45, 'orangestar');
        orangestar1.anchor.setTo(1, 0.5);
        //2nd column, 6th row
        var purplestar1 = this.add.sprite(this.world.centerX - 250, this.world.centerX + 45, 'purplestar');
        purplestar1.anchor.setTo(1, 0.5);
        //3rd column, 6th row
        var yellowdiamond1 = this.add.sprite(this.world.centerX - 185, this.world.centerX + 45, 'yellowdiamond');
        yellowdiamond1.anchor.setTo(1, 0.5);
        //4th column, 6th row
        var yellowstar1 = this.add.sprite(this.world.centerX - 118, this.world.centerX + 45, 'yellowstar');
        yellowstar1.anchor.setTo(1, 0.5);
        //5th column, 6th row
        var greenstar1 = this.add.sprite(this.world.centerX - 52, this.world.centerX + 45, 'greenstar');
        greenstar1.anchor.setTo(1, 0.5);
        //6th column, 6th row
        var orangediamond2 = this.add.sprite(this.world.centerX + 15, this.world.centerX + 45, 'orangediamond');
        orangediamond2.anchor.setTo(1, 0.5);
        var grid = this.add.sprite(this.world.centerX + 15, this.world.centerX - 120, 'grid');
        grid.anchor.setTo(1, 0.5);

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

        var currentTarg = this.add.sprite(this.world.centerX + 200, this.world.centerX - 125, 'currenttarget');


        var timerbackground = this.add.sprite(this.world.centerX + 90, this.world.centerY + 120, 'timerbg');

        // var timerbar = this.add.sprite(this.world.centerX + 115, this.world.centerY + 200, 'timebar');

        //  var timerprog = this.add.sprite(this.world.centerX + 115, this.world.centerY + 200, 'timeprogress');


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
    },

    pointsIncrease: function () {
        //console.log("increase");
        gameObj.finalScore += 10;
        points = gameObj.finalScore;
        pointsShow.setText(points + "%");

        //        if (points == 100) {
        //            this.game.state.start('Winner');
        //        }
    },
    updateTimer: function () {
        //console.log('hola');
        timerSeconds++;

        //        secondsLeft = gameSeconds - timerSeconds;
        //        //
        //        displayMin = Math.floor(secondsLeft / 60) % 60;
        //        displaySec = Math.floor(secondsLeft) % 60;
        //        if (displayMin < 10) {
        //            displayMin = "0" + displayMin;
        //        }
        //        if (displaySec < 10) {
        //            displaySec = "0" + displaySec;
        //        }
        //
        //        myTimerShow.setText(displayMin + ":" + displaySec);
        //
        //        if (displayMin == 0 && displaySec == 0) {
        //            this.game.state.start('Loser');
        //
        //        }
        //
        //        if (displayMin !== 0 && displaySec !== 0 && points == 100) {
        //            this.game.state.start('Winner');
        //        }
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

    winnerFun: function () {
        gameObj.finalTime = timerSeconds;
        this.state.start('Winner');
    },
    loserFun: function () {
        gameObj.finalTime = timerSeconds;
        this.state.start('Loser');
    }
};
