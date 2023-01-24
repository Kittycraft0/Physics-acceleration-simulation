//IT WORKS PERFECTLY!!! YESSSSSSS!!!!!!!!
//THIS MAY HAVE MADE MY DAY THE FACT THAT THIS IS WORKING
//SO WELL!!!
//I MEAN WHY NOT
//IT WAS QUITE LESS PAINLESS THAN I HAD THOUGHT IT WOULD
//BE AS WELL!!!
//-9/8/2022 Thursday 11:15 AM CST

//why not also add that when a button is pressed it skips the
//long version and does the short version until the button isnt
//pressed anymore? why not!!!

//function here so that this is all kept in one class...
//why not a function? WHY NOT A FUNCTION? THATS A GOOD POINT.
//USE AN INITIALIZATION METHOD INSTEAD...
//OH WAIT...
//its already kinda like that already...
//-9/8/2022 Tuesday 9:45 AM CST
//oh wait nevermind not if i want to just run it once!
data.code=()=>{
  //its great that this actually works
  //although it may be quite annoying in the future...
  //console.log("works");
  //like as in what if i lost some code?
};

//just use a class... why not... just to keep it organised maybe
//anyways
//-9/7/2022 Wednesday 9:49 AM CST

class linesSpread{
  constructor(objectKeys){
    this.objectKeys=objectKeys;
    this.linedList=[];
    this.whileCount=0;
    this.n=0;
  }
  //who doesnt love a good old n^4 or whatever time thing...
  //that being maybe n^2 for the loop and n^2 for it checking
  //everything... although not fully though as it cuts down some
  //along the way or whatever
  newLoop(){
    //console.log("animated lines newLoop");
    
    //do the normal loop first
    var ranAlready=data.loopFunction();
    if(!ranAlready){
    //initialize a list of object of whether or not they have
    //had connected lines yet
    this.linedList=[];
    for(var i=0;i<this.objectKeys.length;i++){
      this.linedList[i]=false;
    }
  
    
    //start from the first object in the inputted list
    this.linedList[0]=true;
    //make the first ball "line'd"
  
    //make a safegaurd counter
    this.whileCount=0;

      //basically the same as the this.whileCount above i guess
      //but this variable is specifically the number of processing
      //frames gone by here...
      //also thanks auto indentation
      this.n=0;

    //start the loop maybe with the safegaurd counter
    //that really just doesnt seem to work...
    
    //start the loop
    //maybe add setintervals instead of just straight references
    //though...?
    setTimeout(
      //this.codeInsideLoop,
      //now it should be in scope!? nope wait no yesss!
      ()=>{
        this.codeInsideLoop();
      },
      settings.animatedLinesWhileLoopSPF
    );
    //setTimeout(
    //  ()=>{console.log("AAAA...")},
    //  settings.animatedLinesWhileLoopSPF
    //);
    //console.log(settings.animatedLinesWhileLoopSPF);
    //yes. (above)
    }else{
      //its still kind of weird how this is
      //the way it works unlike the other way... just because
      //the function is called in scope...
      //but its still kind of nice though that with this
      //way not only is it in scope but i could also call it
      //with paramaters as well
      setTimeout(
        ()=>{
          this.newLoop();
        },
        settings.spf
      );
    }
  }

  //function to check whether or not the lined list is full
  //moved to its own method because why not its a funciton
  //check whether or not the linedList list variable contains all 
  //true values
  linedListFull(){
    for(var i=0;i<this.linedList.length;i++){
      if(this.linedList[i]==false)
        return(false);
    }
    return(true);
  }
  //i just looked up a definition for the below and only got what
  //was there... thats random internet diagrams!!!
  codeInsideLoop(){
    //console.log("animated lines codeInsideLoop");
    
  //end gap
  //loop for balls
  //while(!this.linedListFull()){
    //check that the linedList is not full yet

    var linedListFull=true;
    for(var i=0;i<this.linedList.length;i++){
      if(this.linedList[i]==false)
        linedListFull=false;
    }
    //doesnt work because this is now out of scope
    //LOTS OF OUT OF SCOPE ERRORS TO FIX NOW!!!
    //how? not sure...
    //due to being called from a setTimeout(); instead of directly...
    if(linedListFull){
      //break from this loop thing
      //maybe use folder in the file structures...? yes
      //as in go back to initialization
      this.newLoop();
      return(true);
    }
    //get list of distances between all ball pairs 
    //(one line'd and one not line'd) from each other
    //just use "lined" not "line'd" please and thanks
    //then sort it maybe... actually maybe not since its only
    //being read once then discarded...
    //then make a line between the two closest balls
    //oh yeah also remember to set that ball in linedList to true...
    //very important
    
    //it all works which is quite nice indeed

    //get distances list
    //syntax for each list item: 
    //list of 3:[
    //  0: distance, 
    //  1: object 1 index, 
    //  2: object 2 index
    //]
    var distancesList=[];
    //index to go through distancesList with...?
    var distancesListIndex=0;
    
    //get linedballs
    for(var i=0;i<this.linedList.length;i++){
      //select lineballs
      if(this.linedList[i]){
        //get unlined balls
        for(var j=0;j<this.linedList.length;j++){
          //select unlined balls
          if(!this.linedList[j]){
            //used to select last list item by javascript stuffs
            //but now its more of a thing that can be done in any
            //language
            distancesList[distancesListIndex]=[
              data.objects[this.objectKeys[i]].distanceTo(
                data.objects[this.objectKeys[j]]
              ),
              i,j
            ];
            distancesListIndex++;
          }
        }
      }
    }
    
    //basically a percent of how much done it is,
    //used for the colors
    var x=this.n/this.objectKeys.length;

    //now that the distances list is initialized and flled
    //find the smallest one
    var smallestDistanceIndex=0;
    //starts at 0 to support 1 element left
    for(var i=0;i<distancesList.length;i++){
      if(distancesList[i][0]<distancesList[smallestDistanceIndex][0])
        smallestDistanceIndex=i;
    }
    this.linedList[distancesList[smallestDistanceIndex][1]]=true;
    this.linedList[distancesList[smallestDistanceIndex][2]]=true;
    
    //draw the line
    data.camera.getPos();
    var pos0=
      cameraObject.getCoords(//AndSize(
      data.objects[
        this.objectKeys[distancesList[smallestDistanceIndex][1]]].pos[0],
      data.objects[
        this.objectKeys[distancesList[smallestDistanceIndex][1]]].pos[1]
      );
    var pos1=camera.getCoords(
      data.objects[
        this.objectKeys[distancesList[smallestDistanceIndex][2]]].pos[0],
      data.objects[
        this.objectKeys[distancesList[smallestDistanceIndex][2]]].pos[1]
    );
    
    ctx.line(
      pos0[0],
      pos0[1],
      pos1[0],
      pos1[1],
      //data.objects[
      //  this.objectKeys[distancesList[smallestDistanceIndex][1]]].pos[0],
      //data.objects[
      //  this.objectKeys[distancesList[smallestDistanceIndex][1]]].pos[1],
      //data.objects[
      //  this.objectKeys[distancesList[smallestDistanceIndex][2]]].pos[0],
      //data.objects[
      //  this.objectKeys[distancesList[smallestDistanceIndex][2]]].pos[1],
      //yes use this instead of an arbitrary value set here (below)
      //settings.theColor3
      //nahh using specific arbitrary values set here is fun 
      //though!!!
      //`rgba(${
      //  (-((4*x)**2)+2)*255
      //},${
      //  (-((4*x-2)**2)+2)*255
      //},${
      //  (-((4*x-4)**2)+2)*255
      //})`
      getColor(x) //yes.
    );
    //PERECTTTT 
    //console.log("line end");
    //ctx.line(
    //  5,5,
    //  1,1,"orange"
    //);
    
    //safegaurd so its not infinite
    //and so i can finally test it now!!!...
    //great
    this.whileCount++;
    if(this.whileCount>=this.objectKeys.length){
      console.log("loop broken"); //what.
      //break;
      this.newLoop();
      //it wants me to return something but i dont know what
      //so i return false here and true above
      return(false);
    };
    
    //console.log(this.objectKeys);
    //restart the while loop
    //please dont like overflow or something... oh wait it shouldnt
    //maybe nice
    this.n++;
    setTimeout(()=>{
      this.codeInsideLoop();
    },settings.animatedLinesWhileLoopSPF);

    //let the text be toggled on and off so i can watch
    //this without the now unneeded info
    //ONE MISTAKE
    //AN UNCAPITALISED P
    //15 MINUTES
    //W H Y .
    //if only it asked what i meant if i try to tell it a 
    //complaint... that would maybe be nice... why was there no
    //line under it though!? like there was with data!???
    //unhelpful...
    if(!keyPressed(settings.toggleProgressBarKey)){
      //text key is not pressed
      progressBarKeyPressed=false;
      //console.log("progressBarKeyPressed: "+progressBarKeyPressed);
    }
    //console.log((keyPressed(settings.toggleProgressBarKey)&&
    //  !progressBarKeyPressed));
    //console.log("pressed? "+progressBarKeyPressed);
    if(progressBarKeyPressed)console.log("Progress bar key pressed");
    if(
      keyPressed(settings.toggleProgressBarKey)&&
      !progressBarKeyPressed
    ){
      //console.log("Pre set: "+progressBarKeyPressed);
      //text key is pressed
      progressBarKeyPressed=true;
      //console.log("Post set: "+progressBarKeyPressed);
      //console.log("progressBarKeyPressed: "+progressBarKeyPressed);
    
      //toggle text
      settings.hideProgressBar=!settings.hideProgressBar;
    }

    //make a progress bar sort of thing along the top maybe
    //if the settings.hideText is not on showing its
    //closeness to the completion of it all here
    //console.log((this.n/this.objectKeys.length)*canvasWidth);
    //console.log(progressBarKeyPressed);
    if(!settings.hideProgressBar){
      ctx.fillRect(
        -canvasWidth/2,-canvasHeight/2,
        (this.n/this.objectKeys.length)*canvasWidth,
        5
      );
      ctx.fillStyle="lime";
      ctx.fill();
    }
  }
  //}
}

//start it all
//var animatedLinesLoop=new linesSpread(Object.keys(data.objects));
//animatedLinesLoop.newLoop();

console.log("6z2animateLines.js loaded!");