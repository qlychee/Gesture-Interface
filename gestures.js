/* 
 * Assignment 7 - Gestures 
 * Elizabeth Qiu
 * Based on pseudocode in write-up
 */
var downX = 0;
var downY = 0;

//on mouse down:
$("#gestureArea").mousedown(function(event) {
    downX = event.pageX;
    downY = event.pageY;

    $("#gestureResult").text("mouse down");
});
//on mouse up:
$("#gestureArea").mouseup(function(event) {
    upX = event.pageX;
    upY = event.pageY;
    if(upX < downX) {
        $("#gestureResult").text("swipe left");
    }
    else if(upX > downX) {
        $("#gestureResult").text("swipe right");
    }
    else if(upX == downX) {
        $("#gestureResult").text("mouse up");
    }       
});
