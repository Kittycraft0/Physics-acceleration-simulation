//gotta remember to define it in the HTML part to run...

function circleOfBallsLines(objectKeys){
  /*
  a few things must be done:
  find a system that has both sides of the circle
  have the same probability,
  as in maybe also such a way that unhinges it from
  the reference of starting and ending somewhere in the circle
  */ // /*
  //get the length of the list
  var length=objectKeys.length;
  //start at 0
  var selectedOrb=0;
  //list of lined orb indeces
  var linedOrbs=[0];
  //last selected index
  var lastIndex=0;

  //console.log("length: "+length);
  for(var a=0;a<length;a++){
    //initalize the unlinedOrbs list
    //list of unlined orb indeces
    //new format: [index,distance]
    var unlinedOrbs=[];
    //var unlinedDistances=[];
    //get unlinedOrbs list
    for(var objIndex=0;objIndex<objectKeys.length;objIndex++){
      var lined=false;
      for(var j=0;j<linedOrbs.length;j++){
        if(linedOrbs[j]==objIndex){
          lined=true;
          break;
        }
      }
      //if the selected index is not in the lined list
      if(!lined){
        //then put it in the unlined list
        //why isnt undefined blue here [above]...? weird...
        //unlinedOrbs[unlinedOrbs.length]=objectKeys[o];
        unlinedOrbs[unlinedOrbs.length]=
          [
            objIndex,
            Math.sqrt(
              (
                data.objects[objectKeys[lastIndex]].x
                -data.objects[objectKeys[objIndex]].x
              )**2+              
              (
                data.objects[objectKeys[lastIndex]].y
                -data.objects[objectKeys[objIndex]].y
              )**2
              
            )
          ];
      }
    }
    //console.log(i);
    //console.log(linedOrbs);
    //console.log(unlinedOrbs);
    //sort the list USING MY OWN PROBABLY VERY SLOW SORT...
    //its only 20 objects so i think its fine i think the
    //rest of this may not be able to handle too many...?
    //oh wait nevermind it can easily handle 100 and
    //can handle 500 at like 8 fps...
    //even with the distance formula equation there, i think
    //that the drawing is perhaps the laggy part...

    //anyways using slow sort
    //
    //1. find the lowest value in the list 
    //2. append it to the output list
    //3. add index to already read indeces list so as to 
    //not be read again
    //4. repeat original list length times
    //sorted list
    /*
    var sortedUnlinedOrbsList=[];
    //list of already read indeces
    var alreadyReadIndeces=[];
    //console.log(alreadyReadIndeces.contains(2));
    
    //do the loop orb list length times
    for(var i=0;i<unlinedOrbs.length;i++){
      var smallestValueIndex=[-1,settings.aReallyReallyLargeNumber];
      //i hope the above thing here doesnt make it all bad...
      //well it might and probably will...

      console.log("already read indeces: "+alreadyReadIndeces);
      
      //find the smallest value
      for(var j=0;j<unlinedOrbs.length;j++){
        //console.log("  j: "+j);
        //check if the j has already been read
        var alreadyRead=false;
        for(var k=0;k<alreadyReadIndeces.length;k++){
          if(alreadyReadIndeces[k][0]==j){
            console.log("  already read j:"+j+" k:"+k);
            alreadyRead=true;
            break;
          }
        }
        //if the value hasnt been read yet and
        //its smaller than the previously smallest value
        if(!alreadyRead&&unlinedOrbs[j][1]<smallestValueIndex[1]){
          //console.log("new smallest j:"+j+" k:"+k);
          //then set the new smallest value
          smallestValueIndex=unlinedOrbs[j];
        }
      }

      
      //add the smallest value to the already read indeces
      alreadyReadIndeces[
        alreadyReadIndeces.length]=smallestValueIndex;

      //add the smallest value to the list
      sortedUnlinedOrbsList[
        sortedUnlinedOrbsList.length]=smallestValueIndex;
      //hopefulle yesss...
    }
    console.log(sortedUnlinedOrbsList);
    pause();
    var consoleloglist=[];
    for(var i=0;i<sortedUnlinedOrbsList.length;i++){
      consoleloglist[i]=sortedUnlinedOrbsList[i][1];
    }
    console.log("consoleloglist: "+consoleloglist);*/

    //rewriting the sort since its been a many days
    //-9/20/2022 Tuesday 2:16 PM CST

    //for length times do find smillest value and add it 
    //to an ending list and save that smallest value such
    //that it doesnt get called again

    //output list
    var sortedUnlinedOrbsList=[];
    //list to prevent repeats
    var alreadyReadIndeces=[];
    
    //function to tell whether a certain index is already in
    //alreadyReadIndeces
    function alreadyReadIndecesContains(index){
      for(var i=0;i<alreadyReadIndeces.length;i++){
        if(alreadyReadIndeces[i]==index){
          return(true);
        }
      }
      return(false);
    }

    //for starting list length
    //the loop contains the individual iteration that will be 
    //repeated
    for(var i=0;i<unlinedOrbs.length;i++){
      //next smallest value
      var smallestValueIndex=[-1,settings.aReallyReallyLargeNumber];

      //find the NEXT smallest value
      for(var j=0;j<unlinedOrbs.length;j++){
        if(unlinedOrbs[j][1]<smallestValueIndex[1]){
          if(!alreadyReadIndecesContains(unlinedOrbs[j][0])){
            smallestValueIndex=unlinedOrbs[j];
          }
        }
      }

      //add the index to the anti repeat value
      alreadyReadIndeces[alreadyReadIndeces.length]=
        smallestValueIndex[0];
      
      //append the NEXT smallest value to the end of the output list
      sortedUnlinedOrbsList[sortedUnlinedOrbsList.length]=
        smallestValueIndex;
    }
    //console.log("sortedUnlinedOrbsList: "+sortedUnlinedOrbsList);
    //finally, after like at least 45 minutes, the error has been
    //found and eliminated... no, it's not just j to check for...
    //pause();

    //get the maybe new index now!!!
    /*var maybeNewIndex=unlinedOrbs[sortedUnlinedOrbsList[
      //equation of choice for randomness distribution goes here!!!
      //Math.random(); as x
      Math.floor(
        sortedUnlinedOrbsList.length*
        Math.random()**2
      )
    ][0]];*/
    var theNewIndex=
      Math.floor(
        (
          //power number here, raise it to decrease the amount of 
          //lines going to farther points
          Math.random()**(settings.powerNumber)
        )*unlinedOrbs.length
      );
    //console.log(
    //  Math.floor((theNewIndex/unlinedOrbs.length)*10)/10
    //);
    var maybeNewIndex=unlinedOrbs[
      theNewIndex
    ];
    //console.log(maybeNewIndex);
    
    //no.
    //var a=()=>{a|a};a; //no.
    //no.
    
    //it looks like a ball of yarn lol

    //finally just fixed the indenting here...
    //var maybeNewIndex=
    //  unlinedOrbs[
    //  //no -1 needed here it just makes it funny
    //  //subtract stuff from the length to make unique stuff happen
    //    Math.floor(Math.random()*(unlinedOrbs.length))
    //  ];
    var newIndex=maybeNewIndex?maybeNewIndex[0]:0;
    //console.log(newIndex,lastIndex);
    //line the orbs
    ctx.line(
      data.objects[objectKeys[lastIndex]].x,
      data.objects[objectKeys[lastIndex]].y,
      data.objects[objectKeys[newIndex]].x,
      data.objects[objectKeys[newIndex]].y,
      getColor(
        //i/(objectKeys.length*2)+
        //j/(objectKeys.length*2)
        a/objectKeys.length
      )//"orange"
    );
    //console.log(lastIndex,newIndex);
    //append the newly lined index to the lined list
    linedOrbs[linedOrbs.length]=newIndex;
    //set the last one to be the new one 
    //because that is now the new last one
    lastIndex=newIndex;
    //return(false);
    //if(o>=2)return(false);
    //console.log(objindex);
    //console.log(i);
    //if(objindex>=20)break;
    //if(i>=0)break;
    //}
  }

  //increment the powerNumber
  //settings powerNumber change
  settings.powerNumber+=settings.powerNumberAddition;
  
  //pause();
  //console.log("completed");
}
//attempt at copying and modifying the linesBetweenObjects function
/*
function circleOfBallsLines(objectKeys){
  //do the thing that this specific project is about
  //who doesnt love a good old n^4 or whatever time thing...
  
  //initialize a list of object of whether or not they have
  //had connected lines yet
  //new got "no" from "not" as a part of the previous word... 
  //instead of just hte "n" or even better the "" as in nothing 
  var linedList=[];
  //for(var i=0;i<settings.numBalls;i++){
  for(var i=0;i<objectKeys.length;i++){
    linedList[i]=false;
  }
  
  //function for the while loop to determine whether or not
  //all objects have been line'd yet... dont leave in while loop
  //with nothing inside it because it may just continue on forever...
  function linedListFull(){
    for(var i=0;i<linedList.length;i++){
      if(linedList[i]==false)
        return(false);
    }
    return(true);
  }
  linedList[0]=true;
  //make the first ball "line'd"
  //i have proceeded to do what i just warned against...
  //at the very best or whatever idk.... just please dont test it...
  //it may crash the page or something...
  //i thought i just wrote a typo but i cant find it there ok...
  //well then anyways...
  //whoops gap here
  
    //ctx.line(
    //  5,5,
    //  1,1,"orange"
    //);

  //start it all off by starting a line from the first one (index 0)
  //to the rest
  
  //make a safegaurd counter
  whileCount=0;

  //console.log(linedListFull());
  
  //end gap
  //loop for balls
  while(!linedListFull()){
    //get list of distances between all ball pairs 
    //(one line'd and one not line'd) from each other
    //then sort it maybe... actually maybe not since its only
    //being read once then discarded...
    //then make a line between the two closest balls
    //oh yeah also remember to set that ball in linedList to true...
    //very important
    
    //yess... first ball being green works nice

    //console.log("lined list: "+linedList);

    //get distances list
    //syntax for it: list of 3:
    //0: distance, 1: object 1 index, 2: object 2 index
    //this is kind of weird above but ok...
    var distancesList=[];
    //index to go through distancesList with...?
    var distancesListIndex=0;
    
    //get linedballs
    for(var i=0;i<linedList.length;i++){
      //console.log("i: "+i);
      //select lineballs
      //if(linedList[i]==true)
      if(linedList[i]){
        //get not lined balls
        //could start at one because of first one but nahh...
        //also remember j here not i
        for(var j=0;j<linedList.length;j++){
          //console.log("  j : "+j);
          //select not lined balls
          if(!linedList[j]){
            //great way to select the last one of it...
            //unique to javascript of course!
            //distancesList[distancesList.length]=[
            distancesList[distancesListIndex]=[
              //data.objects["object "+i].distanceTo(
              //  data.objects["object "+j]
              data.objects[objectKeys[i]].distanceTo(
                data.objects[objectKeys[j]]
              ),
              i,j
            ];
            //console.log(distancesList[distancesList.length-1][0]);
            //console.log(linedList[i],linedList[j]);
            //console.log(distancesList[distancesListIndex]);
            distancesListIndex++;
          }
        }
      }
    }

    //console.log(distancesList);
    
    //get the selected index to line to
    var selectedIndex=0;
    //for(var i=0;i<distancesList.length;i++){
    //  if(distancesList[i][0]<distancesList[smallestDistanceIndex][0])
    //    selectedIndex=i;
    //}
    selectedIndex=Math.floor(Math.random()*distancesList.length);
    linedList[distancesList[selectedIndex][1]]=true;
    linedList[distancesList[selectedIndex][2]]=true;
    //draw the line
    ctx.line(
      data.objects[
        objectKeys[distancesList[selectedIndex][1]]
      ].x,
      data.objects[
        objectKeys[distancesList[selectedIndex][1]]
      ].y,
      data.objects[
        objectKeys[distancesList[selectedIndex][2]]
      ].x,
      data.objects[
        objectKeys[distancesList[selectedIndex][2]]
      ].y,
      getColor(whileCount/objectKeys.length)
    );
    //safegaurd so its not infinite
    whileCount++;
    if(whileCount>=objectKeys.length){
      console.log("loop broken"); //what.
      break;
    };
  }
}
*/

function linesBetweenObjects(objectKeys){
  //do the thing that this specific project is about
  //who doesnt love a good old n^4 or whatever time thing...
  
  //initialize a list of object of whether or not they have
  //had connected lines yet
  //new got "no" from "not" as a part of the previous word... 
  //instead of just hte "n" or even better the "" as in nothing 
  var linedList=[];
  //for(var i=0;i<settings.numBalls;i++){
  for(var i=0;i<objectKeys.length;i++){
    linedList[i]=false;
  }
  
  //function for the while loop to determine whether or not
  //all objects have been line'd yet... dont leave in while loop
  //with nothing inside it because it may just continue on forever...
  function linedListFull(){
    for(var i=0;i<linedList.length;i++){
      if(linedList[i]==false)
        return(false);
    }
    return(true);
  }
  linedList[0]=true;
  //make the first ball "line'd"
  //i have proceeded to do what i just warned against...
  //at the very best or whatever idk.... just please dont test it...
  //it may crash the page or something...
  //i thought i just wrote a typo but i cant find it there ok...
  //well then anyways...
  //whoops gap here
  
    //ctx.line(
    //  5,5,
    //  1,1,"orange"
    //);

  //start it all off by starting a line from the first one (index 0)
  //to the rest
  
  //make a safegaurd counter
  whileCount=0;

  //console.log(linedListFull());
  
  //end gap
  //loop for balls
  while(!linedListFull()){
    //get list of distances between all ball pairs 
    //(one line'd and one not line'd) from each other
    //then sort it maybe... actually maybe not since its only
    //being read once then discarded...
    //then make a line between the two closest balls
    //oh yeah also remember to set that ball in linedList to true...
    //very important
    
    //yess... first ball being green works nice

    //console.log("lined list: "+linedList);

    //get distances list
    //syntax for it: list of 3:
    //0: distance, 1: object 1 index, 2: object 2 index
    //this is kind of weird above but ok...
    var distancesList=[];
    //index to go through distancesList with...?
    var distancesListIndex=0;
    
    //get linedballs
    for(var i=0;i<linedList.length;i++){
      //console.log("i: "+i);
      //select lineballs
      //if(linedList[i]==true)
      if(linedList[i]){
        //get not lined balls
        //could start at one because of first one but nahh...
        //also remember j here not i
        for(var j=0;j<linedList.length;j++){
          //console.log("  j : "+j);
          //select not lined balls
          if(!linedList[j]){
            //great way to select the last one of it...
            //unique to javascript of course!
            //distancesList[distancesList.length]=[
            distancesList[distancesListIndex]=[
              //data.objects["object "+i].distanceTo(
              //  data.objects["object "+j]
              data.objects[objectKeys[i]].distanceTo(
                data.objects[objectKeys[j]]
              ),
              i,j
            ];
            //console.log(distancesList[distancesList.length-1][0]);
            //console.log(linedList[i],linedList[j]);
            //console.log(distancesList[distancesListIndex]);
            distancesListIndex++;
          }
        }
      }
    }
    //console.log(distancesList[0]);

    //console.log(distancesList);
    
    //now that the distances list is supposedly made
    //find the smallest one
    var smallestDistanceIndex=0;
    //starts at 0 to support 1 element? oh actually yes
    for(var i=0;i<distancesList.length;i++){
      //i forgot a number at the end there and that majorly
      //contributed to like a half hour of pain...
      if(distancesList[i][0]<distancesList[smallestDistanceIndex][0])
        smallestDistanceIndex=i;
        //console.log("found smaller");
      
      //console.log(distancesList[i][0],distancesList[smallestDistanceIndex]);
    }
    //console.log(smallestDistanceIndex);
    //w h y .
    //pause();
    //draw the line and set the index of the... actually why not
    //both? to true
    //actually maybe only one is needed and thats the second one!
    //niceee... i msut now leave so bye4
    linedList[distancesList[smallestDistanceIndex][1]]=true;
    linedList[distancesList[smallestDistanceIndex][2]]=true;
    //draw the line
    //NOOOOO ITS NOT ALREADY A FUNCTION ONE LINE NOOOO
    //...
    //ok bye
    //here
    //console.log(distancesList);
    //console.log("line start");
    //define x
    
    //console.log(
    //    objectKeys[distancesList[smallestDistanceIndex][1]]
    //);

    //ctx.strokeStyle="red";
    
    x=whileCount/objectKeys.length;
    
    var cameraObject=
      //arguments[0]?arguments[0]:
      (data.camera?data.camera:{});
    //console.log(cameraObject);
    //data.camera.getCoordsAndSize(this.x,this.y,this.size);
    //console.log(cameraObject);
    //console.log();
    var pos0=
      cameraObject.getCoords(//AndSize(
        data.objects[
        //"object "+distancesList[smallestDistanceIndex][1]
        objectKeys[distancesList[smallestDistanceIndex][1]]
      ].pos[0],
        data.objects[
        //"object "+distancesList[smallestDistanceIndex][1]
        objectKeys[distancesList[smallestDistanceIndex][1]]
      ].pos[1]
        
        //this.pos[0],
        //this.pos[1],
        //1//this.size
      );
    var pos1=
      cameraObject.getCoords(//AndSize(
        data.objects[
        //"object "+distancesList[smallestDistanceIndex][2]
        objectKeys[distancesList[smallestDistanceIndex][2]]
      ].pos[0],
      data.objects[
        //"object "+distancesList[smallestDistanceIndex][2]
        objectKeys[distancesList[smallestDistanceIndex][2]]
      ].pos[1],
        
        //this.pos[0],
        //this.pos[1],
        //1//this.size
      );
    /*console.log("0: ",pos0,pos1);
    console.log("1: ",[data.objects[
        //"object "+distancesList[smallestDistanceIndex][1]
        objectKeys[distancesList[smallestDistanceIndex][1]]
      ].pos[0],
      data.objects[
        //"object "+distancesList[smallestDistanceIndex][1]
        objectKeys[distancesList[smallestDistanceIndex][1]]
      ].pos[1]],
      [data.objects[
        //"object "+distancesList[smallestDistanceIndex][2]
        objectKeys[distancesList[smallestDistanceIndex][2]]
      ].pos[0],
      data.objects[
        //"object "+distancesList[smallestDistanceIndex][2]
        objectKeys[distancesList[smallestDistanceIndex][2]]
      ].pos[1]]
    );*/
    
    ctx.strokeStyle="red";
    ctx.line(
      pos0.x,
      pos0.y,
      pos1.x,
      pos1.y,
      getColor(x)
    );
    /*ctx.line(
      data.objects[
        //"object "+distancesList[smallestDistanceIndex][1]
        objectKeys[distancesList[smallestDistanceIndex][1]]
      ].pos[0],
      data.objects[
        //"object "+distancesList[smallestDistanceIndex][1]
        objectKeys[distancesList[smallestDistanceIndex][1]]
      ].pos[1],
      data.objects[
        //"object "+distancesList[smallestDistanceIndex][2]
        objectKeys[distancesList[smallestDistanceIndex][2]]
      ].pos[0],
      data.objects[
        //"object "+distancesList[smallestDistanceIndex][2]
        objectKeys[distancesList[smallestDistanceIndex][2]]
      ].pos[1],
      //yes use this instead of an arbitrary value set here (below)
      //settings.theColor3
      //nahh arbitrary values are funnn
      //`rgba(${
      //  (-((4*x)**2)+2)*255
      //},${
      //  (-((4*x-2)**2)+2)*255
      //},${
      //  (-((4*x-4)**2)+2)*255
      //})`
      //nahh why not defined functions sureee
      getColor(x)
    );*/
    //console.log("line end");
    //ctx.line(
    //  5,5,
    //  1,1,"orange"
    //);
    
    //safegaurd so its not infinite
    //and so i can finally test it now!!!...
    //great
    whileCount++;
    if(whileCount>=objectKeys.length){
      console.log("loop broken"); //what.
      break;
    };
  }
}

var theLineAnimationToggle=false;
function lineAnimationToggle(objectKeys){
  //skipAnimationKeyPressed
  if(!keyPressed(settings.linesAnimationKey)){
    //skip lining animation key is not pressed
    linesAnimationKeyPressed=false;
    //thanks... for leaving this uncommented for so long (below)
    //console.log("space not pressed");
  }
  if(keyPressed(
    settings.linesAnimationKey)&&
    !linesAnimationKeyPressed
  ){
    //skiping lining animation key is pressed
    linesAnimationKeyPressed=true;
    //console.log("space pressed");
    theLineAnimationToggle=!theLineAnimationToggle;
  }
  //run it
  if(theLineAnimationToggle){
    //run the animation thing
    //console.log("runnnn");
    linesBetweenObjects(objectKeys);
    doneAlready=true;
  }
}

function recordingAndRunbackCode(objectKeys){
  //get the current time idk
  var currentTime=(new Date().getTime()-startTime);
  //...
  
  //ooh actually the time is quite nice here...
  //reverse all velocities after x or 5 seconds or whatever idk
  //console.log(currentTime);
  //if(!reverse1Happened&&currentTime>=reverseTime){
  if(!reverse1Happened&&n>=reverseTime){
    console.log("REVERSE");
    reverse1Happened=true;
    //iterate through all objects
    for(var i=0;i<objectKeys.length;i++){
      //select said object
      var selectedObject=data.objects[objectKeys[i]];
      //reverse velocities because why not do it anyways...?
      selectedObject.vel[0]*=-1;
      selectedObject.vel[1]*=-1;
    }
    
    //log the recorded data...
    //just once here because it is probably massive...
    //console.log(frameList);
    //fifth frame 6th objects x
    //console.log(frameList[4][5][0]);
    //niceee...
    //i think it works well that is nice...
    //and now to play it back... use another loop? nahh...
    //just... use a boolean that overrides everything else here
    //maybe... idk
    //also actually the other stuff deosnt even need to be overrided
    //if the recorded position is set after the real position is set
    //because then the renderer thing will render the 
    //recorded position...
    //yes it will work here...

    //start running the recording
    if(recordingRuns==true){
      runningRecording=true;
      //set the startedRunningRecordingFrame variable
      startedRunningRecordingFrame=n;
    }
    
  //}else if(
  //  pauseOnDoubleReverseTime&&
  //  !reverse2Happened&&
  //  currentTime>=reverseTime*2
  //){
  }else if(
    pauseOnDoubleReverseTime&&
    !reverse2Happened&&
    n>=reverseTime*2+1 //added 1 so the recording thing can reach 0
  ){
    reverse2Happened=true;
    //pause it... somehow
    //copy pasted from 7pauseLoop.js... hope it works...?
    //oh nice it does work although the text isnt perfect...
    //well wow ok then it does seem 
    //pretty good though still anyways...
    
    //check if the game is running or not
    //if(gameRunning){
    //  //pause the game
    //  clearInterval(loop);
    //}else{
    //  //run the game
    //  startLoop();
    //}
    //pause the game*
    pause();                       
    
    //toggle gameRunning
    gameRunning=!gameRunning;
  }else if(runningRecording==true){
    var selectedFrame=
      frameList.length-(n-startedRunningRecordingFrame);
    //or -n+startedRunningRecordingFrame but nah idk... idk maybe its
    //a good idea but idk... eh just ill just not do it...
    //make sure selectedFrame is in bounds...
    //>= instead of just > because there is no item ever at 
    //index .length here unlike in lua where arrays start at 1...
    if(selectedFrame<0||selectedFrame>=frameList.length){
      //yes error.log not console.log...
      //oh maybe its console.error not error.log...
      //niceee!!! its actually working great here... idk if it stops
      //it or not but still its great!!!
      console.error(
        "selectedFrame out of bounds! Max "+
        (frameList.length-1)+" Min 0 selected "+selectedFrame+" Turning off recording running now...");
      runningRecording=false;
    }
    //ok nice its fine i guess...
    //console.log(selectedFrame);
    //yess it works!!!... except there is no 0... but thats the
    //most important one... ok ill just modify the other stuff
    //then...
    if(frameList==undefined)return(false);
    //yesss to the above working as well!
    for(var i=0;i<frameList[selectedFrame].length;i++){
      var selectedObject=data.objects[objectKeys[i]];
      selectedObject.x=frameList[selectedFrame][i][0];
      selectedObject.y=frameList[selectedFrame][i][1];
      //PERFECT!!!!!!!!! YESSSSSSSSs!!!
    }
  }else{
    //record frames of object positions to frameList
    //i hope object.keys always has the same result in order
    //each time, i would think it does but even if it doesnt
    //it might make a cool effect then... idk
    //otherwise i could just use a json after the initial list
    //but still eh... also that might also take up even
    //more memory as well... idk

    //if this was C++ which i dont have much experience
    //in this here would be a pointer, i think it is already
    //a pointer here which is nice in this instance
    //actually i will do this the other way around...
    //var selectedFrame=frameList[n];
    var selectedFrame=[];
    //not for each loop because i is needed to be used in 
    //the selectedFrame list
    for(var i=0;i<objectKeys.length;i++){
      selectedFrame[i]=[
        data.objects[objectKeys[i]].x,
        data.objects[objectKeys[i]].y
      ];
    }
    //set the frame to the recorded data
    frameList[n]=selectedFrame;
  }/**/
}

function zoomControls(){
  //changes the camera position and scale
  //if(keyPressedCaseInsensitive("w")){
  //  
  //}

  //console.log("zooom");
  var camera=data.camera;
  //check keys
    camera.controls.up=
      keyPressed('w')||keyPressed('W')||keyPressed("ArrowUp");
    camera.controls.down=
      keyPressed('s')||keyPressed('S')||keyPressed("ArrowDown");
    camera.controls.right=
      keyPressed('d')||keyPressed('D')||keyPressed("ArrowRight");
    camera.controls.left=
      keyPressed('a')||keyPressed('A')||keyPressed("ArrowLeft");
    //console.log(camera.controls);
    //console.log(this.left);

    var cameraObject=
      //arguments[0]?arguments[0]:
      (data.camera?data.camera:{});
    //console.log(cameraObject);
    //data.camera.getCoordsAndSize(this.x,this.y,this.size);
    //console.log(cameraObject);
    //console.log();
    var scaleNumber=
      cameraObject.getSize(1);
    //PERFECT!!! GREAT!!!
        
    //if velocity is used
    //change the velocity
    if(camera.controls.up){
      camera.vel[1]-=settings.cameraSpeed/(settings.fps*settings.fps*scaleNumber);
    }
    if(camera.controls.down){
      camera.vel[1]+=settings.cameraSpeed/(settings.fps*settings.fps*scaleNumber);
    }
    if(camera.controls.right){
      camera.vel[0]+=settings.cameraSpeed/(settings.fps*settings.fps*scaleNumber);
      //console.log("vell");
      //console.log(camera.vel[0],settings.speed,settings.fps);
    }
    if(camera.controls.left){
      camera.vel[0]-=settings.cameraSpeed/(settings.fps*settings.fps*scaleNumber);
      //console.log("yes");
      //console.log(this.xv);
    }
    //console.log(this.left);

  //dampen the velocities
  camera.vel[0]*=0.9;
  camera.vel[1]*=0.9;

  //control the camera scale
  if(keyPressedCaseInsensitive('e')){
    camera.scale+=0.1;
  }
  if(keyPressedCaseInsensitive('q')){
    camera.scale-=0.1;
  }
  
}

//console.log("FPS: "+settings.fps);

console.log("5z1projectFunctions.js loaded!");