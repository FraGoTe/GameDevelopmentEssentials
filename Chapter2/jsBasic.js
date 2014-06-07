// define the namespace
var cocktail = {};

// add the function shake to the namespace
cocktail.shake = function(){ /*...*/}

// add the function stir to the namespace
cocktail.stir = function(){{/*...*/}

//Another way

var cocktail = {

    // add the function shake to the namespace
   shake: function(){/*...*/},
   
   // add the function stir to the namespace
   stir: function(){/*...*/}
};

//Set a sprites example
$("#mygame").append("<div id='sprite1'>");
$("#sprite1").css("backgroundImage","url('spritesheet1.png')");

/**
 * This function sets the current frame. 
 * -divId: the Id of the div from which you want to change the
 *         frame
 * -frameNumber: the frame number
 * -frameDimension: the width of a frame
 **/
gameFramework.setFrame = function(divId,frameNumber, frameDimension) {
   $("#"+divId)
      .css("bakgroundPosition", "" + frameNumber * frameDimension + "px 0px");
}
//Function with interval of 60 millisecond
var totalNumberOfFrame = 4;
var frameNumber = 0;
setInterval(function(){
   gameFramework.setFrame("sprite1",frameNumber, 64);
   //From 0 to 3
   frameNumber = (frameNumber + 1) % totalNumberOfFrame;
}, 60);

/**
 * Animation Object.
 **/
gf.animation = function(options) {
    var defaultValues = {
        url : false,
        width : 64,
        numberOfFrames : 1,
        currentFrame : 0,
        rate : 30
    };
    $.extend(this, defaultValues, options);
}
var firstAnim = new gameFramework.animation({
   url: "spritesheet1.png",
   numberOfFrames: 4,
   rate: 60
});


gf.setFrame = function(divId, animation) {
    $("#" + divId)
        .css("bakgroundPosition", "" + animation.currentFrame * animation.width + "px 0px");
}

//Animation with validations

gf.animationHandles = {};
/**
 * Sets the animation for the given sprite.
 *
 */
gf.setAnimation = function(divId, animation, loop){
    if(gf.animationHandles[divId]){
        clearInterval(gf.animationHandles[divId]);
    }
    if(animation.url){
        $("#"+divId).css("backgroundImage","url('"+animation.url+"')");
    }
    if(animation.numberOfFrame > 1){
        gf.animationHandles[divId] = setInterval(function(){
            animation.currentFrame++;
            if(!loop && currentFrame > animation.numberOfFrame){
                clearInterval(gf.animationHandles[divId]);
                gf.animationHandles[divId] = false;
            } else {
                animation.currentFrame %= animation. numberOfFrame;
                gf.setFrame(divId, animation);
            }
        }, animation.rate);
    }
}

