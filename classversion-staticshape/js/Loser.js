gameObj.Loser = function (game) {};

gameObj.Loser.prototype = {
    create: function () {
        console.log("State - Loser");
        //Add background image
        this.stage.backgroundColor = "#ffffff";
        var border = this.add.sprite(this.world.centerX, this.world.centerY, 'border'); //x and y locations relative to canvas, if specified, can take take a way anchor of set point
        border.anchor.setTo(0.5, 0.5);
        var dude = this.add.sprite(this.world.centerX, this.world.centerY, 'dude');
        dude.anchor.setTo(1.15, .45);

        //        var myScore = "50% DONE"
        //        var myScoreStyle = {
        //            font: "42px Arial",
        //            fill: "#000",
        //            align: "center"
        //        };
        //        myScoreShow = this.add.text(this.world.centerX - 100, this.world.centerX - 390, myScore, myScoreStyle);

        myScoreShow = this.add.text(this.world.centerX - 100, this.world.centerX - 390, gameObj.finalScore + '% Done', {
            font: '400 48px Sigmar One',
            fill: '#000',
            align: 'center'
        });
        //        my = this.world.centerX - timeLbl.width / 2;
        //        pointsLbl.y = this.world.centerY - timeLbl.height / 2;


        var myTitleText = "IT ISN'T DONE!";
        var myTitleStyle = {
            font: "400 32px Sigmar One",
            fill: "#000",
            align: "center"
        };
        var myTitleShow = this.add.text(this.world.centerX + 45, this.world.centerX - 300, myTitleText, myTitleStyle);



        myTimerShow = this.add.text(this.world.centerX + 40, this.world.centerX - 225, 'Time it took to finish painting:\n', {
            font: '400 20px Architects Daughter',
            fill: '#000',
            align: 'center'
        });


        var displayMin = Math.floor(gameObj.finalTime / 60) % 60;
        var displaySec = Math.floor(gameObj.finalTime) % 60;

        if (displayMin < 10) {
            displayMin = "" + displayMin;
        }
        if (displaySec < 10) {
            displaySec = "0" + displaySec;
        }

        myTimerShow.setText("Time it took to finish painting:\n" + displayMin + ":" + displaySec);

        var myText = "\n\nYou didn’t finish your painting in time!\nUnfortunately, you are unable\n to enter it into the show\n\nWould you like to try again?";
        var myStyle = {
            font: "400 20px Architects Daughter",
            fill: "#000",
            align: "center"
        };
        var myDesc = this.add.text(this.world.centerX + 15, this.world.centerX - 215, myText, myStyle);

        //   (x, y, varName, funcName, me (always this), over, out, down, up)
        myButtonTry = this.add.button(525, this.world.height - 215, 'myButtonTry', this.tryAgain, this, 1, 0, 2);
        myButtonHome = this.add.button(525, this.world.height - 150, 'myButtonHome', this.goHomee, this, 1, 0, 2);
    },
    tryAgain: function () {
        this.game.state.start('Game');
    },

    goHomee: function () {
        this.game.state.start('MainMenu');
    }
};
