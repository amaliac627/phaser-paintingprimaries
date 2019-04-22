gameObj.Winner = function (game) {};

gameObj.Winner.prototype = {
    create: function () {

        this.stage.backgroundColor = "#ffffff";
        var dude = this.add.sprite(this.world.centerX, this.world.centerY, 'windude');
        dude.anchor.setTo(.75, .35);
        var border = this.add.sprite(this.world.centerX, this.world.centerY, 'border'); //x and y locations relative to canvas, if specified, can take take a way anchor of set point
        border.anchor.setTo(0.5, 0.5);

        myScoreShow = this.add.text(this.world.centerX - 150, this.world.centerX - 390, gameObj.finalScore + '% Done', {
            font: '400 48px Sigmar One',
            fill: '#000',
            align: 'center'
        });


        myTimerShow = this.add.text(this.world.centerX + 50, this.world.centerX - 225, 'Time it took to finish painting:\n', {
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



        var myTitleText = "YOU DID IT!";
        var myTitleStyle = {
            font: "400 24px Sigmar One",
            fill: "#000",
            align: "center"
        };
        var myTitleShow = this.add.text(this.world.centerX + 100, this.world.centerX - 275, myTitleText, myTitleStyle);
        myTimerShow.setText("Time it took to finish painting:\n" + displayMin + ":" + displaySec);
        var myText = "You finished your painting in time!\n\nIt looks great!\n\nGood luck in the art show!";
        var myStyle = {
            font: "400 20px Architects Daughter",
            fill: "#000",
            align: "center"
        };
        var myDesc = this.add.text(this.world.centerX + 30, this.world.centerX - 150, myText, myStyle);
        //                
        //(x, y, varName, funcName, me (always this), over, out, down, up)
        myButtonPlay = this.add.button(525, this.world.height - 215, 'myButtonPlay', this.startGame, this, 1, 0, 2);
        myButton.anchor.setTo(0.5, 0.5);
        myButtonHome = this.add.button(525, this.world.height - 150, 'myButtonHome', this.goHome, this, 1, 0, 2);

    },

    startGame: function () {
        this.state.start('Game');
    },

    goHome: function () {
        this.state.start('MainMenu');
    }
};
