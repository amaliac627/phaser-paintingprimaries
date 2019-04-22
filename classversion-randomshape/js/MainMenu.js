gameObj.MainMenu = function (game) {};

gameObj.MainMenu.prototype = {
    create: function () {
        console.log('MainMenu');
        var border = this.add.sprite(this.world.centerX, this.world.centerY, 'border'); //x and y locations relative to canvas, if specified, can take take a way anchor of set point
        border.anchor.setTo(0.5, 0.5);
        var dude1 = this.add.sprite(this.world.centerX, this.world.centerY, 'dude1');
        dude1.anchor.setTo(1.15, .6);

        var myTitleText = "Painting with \nPrimaries";
        var myTitleStyle = {
            font: "400 32px Sigmar One",
            fill: "#000",
            align: "center"
        };
        var myTitleShow = this.add.text(this.world.centerX + 35, this.world.centerX - 400, myTitleText, myTitleStyle);


        var myText = "Use the mouse to click \n & mix the colors to make \n the target shape & color.\n \n Mix primary colors to make \n secondary colors and use \n the secondary colors to help \n you along. \n \n Be sure to finish your shape \n painting before the art show!";
        var myStyle = {
            font: "400 24px Architects Daughter",
            fill: "#000",
            align: "left"
        };
        var myDirections = this.add.text(this.world.centerX + 35, this.world.centerX - 300, myText, myStyle);
        //go to google fonts, go to google.com/fonts, type in font needed, quick use, pink one that loads quckly, click javascript, copy the js from open tag and closed tag, paste it in head tag, reference in phaswer code, go to line that font is being defined, FIRST font weight pixel size and then name of font (NO COMMAS)
        //   (x, y, varName, funcName, me (always this), over, out, down, up)
        myButton = this.add.button(170, this.world.height - 190, 'myButton', this.startGame, this, 1, 0, 2);


    },
    startGame: function () {
        this.state.start('Game');
    }
};
