"use strict";
var Color = /** @class */ (function () {
    function Color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    /**
     Converts rgb values to a string of format: rgb(r,g,b)
     */
    Color.prototype.toString = function () {
        return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    };
    return Color;
}());
function changeColor(obj) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = new Color(r, g, b);
    obj.style.backgroundColor = color.toString();
}
window.onload = function () {
    var button = document.querySelector("#color-changer");
    button.addEventListener("click", function () {
        return changeColor(document.querySelector("body"));
    });
};
