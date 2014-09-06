/**
 * Created by sbkloaner-sbktech on 7/27/14.
 */

var listOfSharks = ["Sea Pain", "Great Wheezy",
    "DJ Chewie", "Lil' Bitey",
    "Finmaster Flex", "Swim Khalifa",
    "Ice Teeth", "The Notorious J.A.W."];
var listOfTargets = ["icicle bat", "snow yeti",
    "killer penguin", "frost tiger",
    "polar bear", "iceberg",
    "blue witch", "wooly mammoth"];

function makeTargetAssigner( sharks, targets ){
    return function( name ){
        var i = 0;
        for(i = 0; i<= sharks.length; i++){
            if(name == sharks[i]){
                alert("What up, " + sharks[i] +
                    "!\n\tThere've been " +
                    targets[i] +
                    " sightings in our " +
                    "'hood!\n\tTime for a " +
                    "swim-by lasering, homie!");
            }
        }
    };
}
var getTargetFor = makeTargetAssigner(  listOfSharks, listOfTargets );
getTargetFor("Ice Teeth");
getTargetFor("Swim Khalifa");