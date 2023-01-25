//empty as of yet
//not anymore its not
//copied from Chase a little dot 2-1
//at 8/29/2022 2:53 PM CST
//wisdom teeth removed today at like 8 idk and now school starts
//next thursday... that will be fun...
//player
//black hole
//target
//anything else?
//white hole - pushes you away, if you manage to get into it you get a point lol (remember to only allow one point) <- who ever typed "this" is weird <- lol nobody typed the word there except you in this script oh wait i just did

//ctx.line(2,3,4,5,6);

//the "this" keyword is actually very nice what do you mean; those who DONT type it are weird. CoolMan here obviously not kitty didn't know about it in either C++ or Javascript so he was sad and his code was dog solid and gas and plasma but not liquid his constructores were so able to be taired and bruh input r/ihadastroke

//allow references without crash

//WHAT DO YOU MEAN m is not a function I JUST MADE IT A FUNCTION
//function m(){console.log("WHAT");}
//three();
//what, is it some chance thing?
//for(var i=0;i<90;i++){
//    console.log("what");
//  }
//physics class, such that every object should have these methods
//-8:39 AM CST 11/28/2022 Monday
class PhysicsObject{
  attractSingle(obj){
    //object minus this for object to this vector
    var vector=[
      obj.pos[0]-this.pos[0],
      obj.pos[1]-this.pos[1]
    ];
    var vectorMagnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    var normalizedVector=[
      vector[0]/vectorMagnitude,
      vector[1]/vectorMagnitude
    ];
    //change the speeds
    obj.vel[0]+=normalizedVector[0]*this.force; //here was the
    obj.vel[0]+=normalizedVector[1]*this.force; //solution all along!
  }
  //both way attraction by mass
  attractBoth(obj,mult){
    if(this==obj){
      //changed from console.log to error.log...
      //whoops not that its meant to be console.error...
      //at 8/30/2022 10:20 AM CST Tueday
      console.error("Same object interacting with self in attractBoth error");
    }
    //console.log(obj);
    //object minus this for object to this vector
    //check the numbers to make sure they are not undefined
    //console.log(obj.pos,this.pos);
    //console.log(obj.pos[0],obj.pos[1],this.pos[0],this.pos[1]);
    if(
        obj.pos[0]==undefined
      ||obj.pos[1]==undefined
      ||this.pos[0]==undefined
      ||this.pos[1]==undefined
      ||obj.pos[0]=="NaN"
      ||obj.pos[1]=="NaN"
      ||this.pos[0]=="NaN"
      ||this.pos[1]=="NaN"
      ||isNaN(obj.pos[0])
      ||isNaN(obj.pos[1])
      ||isNaN(this.pos[0])
      ||isNaN(this.pos[1])
    ){
      console.error("obj or this pos undefined what is this thing");
      console.log(
        "obj: "+obj.pos[0]+" "+obj.pos[1]+"\n"+
        "this: "+this.pos[0]+" "+this.pos[1]
      );
    }
    var vector=[
      obj.pos[0]-this.pos[0],
      obj.pos[1]-this.pos[1]
    ];
    //console.log(vector);
    //console.log(vector);
    //console.log(vector);
    var vectorMagnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    var normalizedVector=[
      vector[0]/vectorMagnitude,
      vector[1]/vectorMagnitude
    ];
    //console.log(normalizedVector);
    
    //forces between the two
    //var multiplier=1;
    //stops things that push away from attracting to each other
    //not needed for correct use
    //if(this.force<0&&obj.force<0){
    //  multiplier=-1;
    //}
    //stop dividing by zero!!!
    //stop dividing all together!!!
    
    //var toThisForce=this.force/obj.force*multiplier;
    //too bad.
    //if(this.force==undefined)
    //  console.error("This object force not defined!");
    this.force=this.size?this.size:1;
    var toThisForce=this.force;
    //WOW THIS WAS THE ERROR THE WHOLE TIME? OR ELSE SOMETHING ELSE HERE??
    //WOW... MULTIPLE HOURS SPENT ON SOMETHING HERE THAT I DON'T EVEN
    //KNOW...
    //console.log(toThisForce);
    //var toObjForce=obj.force/this.force*multiplier;
    //yay simple thing works!!! checks if its undefined or not
    //and if it doesnt have a force then it uses the size instead
    var toObjForce=
      obj.force?obj.force:
      obj.size?obj.size:
      obj.radius?obj.radius:
      1;
    if(toObjForce==undefined)
      console.error("For some reason the object force is undefined");
    //console.log(toObjForce);
    
    //change the speeds
    obj.vel[0]-=normalizedVector[0]*(toThisForce)/(settings.fps**2)*mult;
    obj.vel[1]-=normalizedVector[1]*(toThisForce)/(settings.fps**2)*mult;
    this.vel[0]+=normalizedVector[0]*(toObjForce)/(settings.fps**2)*mult;
    this.vel[1]+=normalizedVector[1]*(toObjForce)/(settings.fps**2)*mult;
    //console.log(obj.vel[0],obj.vel[1],this.vel[0],this.vel[1]);
  }
  /*attractBoth(obj,mult){
    //console.log("attractBoth used 1idao");
    if(this==obj){
      //changed from console.log to error.log...
      //whoops not that its meant to be console.error...
      //at 8/30/2022 10:20 AM CST Tueday
      console.error("Same object interacting with self in attractBoth error");
    }
    //console.log(obj);
    //object minus this for object to this vector
    var vector=[
      obj.pos[0]-this.pos[0],
      obj.pos[1]-this.pos[1]
    ];
    //console.log(obj,this);
    //console.log(vector);
    //console.log(vector);
    var vectorMagnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    var normalizedVector=[
      vector[0]/vectorMagnitude,
      vector[1]/vectorMagnitude
    ];
    
    //forces between the two
    //var multiplier=1;
    //stops things that push away from attracting to each other
    //not needed for correct use
    //if(this.force<0&&obj.force<0){
    //  multiplier=-1;
    //}
    //stop dividing by zero!!!
    //stop dividing all together!!!
    
    //var toThisForce=this.force/obj.force*multiplier;
    //a

    //thats too bad
    //if(this.force==undefined)
    //  console.error("1 Object force not defined!");
    
    this.force=this.size?this.size:1;
    var toThisForce=this.force;
    //var toObjForce=obj.force/this.force*multiplier;
    //yay simple thing works!!! checks if its undefined or not
    //and if it doesnt have a force then it uses the size instead
    var toObjForce=obj.force?obj.force:obj.size;
    
    //change the speeds
    obj.vel[0]-=normalizedVector[0]*(toThisForce)/(settings.fps**2)*mult;
    obj.vel[1]-=normalizedVector[1]*(toThisForce)/(settings.fps**2)*mult;
    this.vel[0]+=normalizedVector[0]*(toObjForce)/(settings.fps**2)*mult;
    this.vel[1]+=normalizedVector[1]*(toObjForce)/(settings.fps**2)*mult;
  }*/
  updatePositionByVelocity(){
    //if(
    //  this.xv==NaN||this.yv==NaN||this.x==NaN||this.y==NaN||
    //  this.xv==undefined||this.yv==undefined||
    //  this.x==undefined||this.y==undefined
    //){
    //  //no its console.error
    //  console.error(
    //    "NaN found in updatePositionByVelocity:"
    //    +" xv:"+this.xv
    //    +" yv:"+this.yv
    //    +" x:"+this.x
    //    +" y:"+this.y
    //  );
    //}
    //this.x+=this.xv;
    //this.y+=this.yv;
    if(
      //(
      //  this.xv==NaN||this.yv==NaN||
      //  this.x==NaN||this.y==NaN||
      //  this.xv==undefined||this.yv==undefined||
      //  this.x==undefined||this.y==undefined
      //)
      //&&
      (
        this.vel[0]==NaN||this.vel[1]==NaN||
        this.pos[0]==NaN||this.pos[1]==NaN||
        this.vel[0]==undefined||this.vel[1]==undefined||
        this.pos[0]==undefined||this.pos[1]==undefined
      )
    ){
      console.error(
        "NaN found in updatePositionByVelocity:"
        +" xv:"+this.xv
        +" yv:"+this.yv
        +" x:"+this.x
        +" y:"+this.y
        +" vel[0]:"+this.vel[0]
        +" vel[1]:"+this.vel[1]
        +" pos[0]:"+this.pos[0]
        +" pos[1]:"+this.pos[1]
      );
    }
    this.pos[0]+=this.vel[0];
    this.pos[1]+=this.vel[1];
  }

  
  wallBounce(rect){
    //get the corner coordinates
    var sides=rect.getSideCoordinates();
    //var topX=rect.pos[0]+rect.width/2;
    //var bottomX=rect.pos[0]-rect.width/2;
    //var topY=rect.pos[1]+rect.height/2;
    //var bottomY=rect.pos[1]-rect.height/2;
    //reverse the x velocity after compensating for the change
    var trueRight=sides.right-this.radius;
    var trueLeft=sides.left+this.radius;
    var trueTop=sides.top+this.radius;
    var trueBottom=sides.bottom-this.radius;
    //i gues implementation for the box moving is nonexistant?
    //not really sure how it even COULD be implemented, but still...
    //oh ok sure
    //console.log(this.radius);

    if(this.pos[0]>trueRight){
      this.pos[0]=(this.pos[0]-trueRight)*-1+trueRight;
      //still an incorrect way to add that...
      //in that the velocity should not be multiplied by negative 1
      //by itself, it should maybe have the rectangle's velocity
      //subtracted from ti before that... oh ok
      this.vel[0]=Math.abs(this.vel[0]-rect.vel[0])*-1+rect.vel[0];
    }
    if(this.pos[0]<trueLeft){
      this.pos[0]=(this.pos[0]-trueLeft)*-1+trueLeft;
      this.vel[0]=Math.abs(this.vel[0]-rect.vel[0])+rect.vel[0];
    }
    //remember y is reversed so top is a shorter coordinate than bottom
    if(this.pos[1]>sides.bottom-this.radius){
      this.pos[1]=(this.pos[1]-trueBottom)*-1+trueBottom;
      this.vel[1]=Math.abs(this.vel[1]-rect.vel[1])*-1+rect.vel[1];
    }
    if(this.pos[1]<trueTop){
      this.pos[1]=(this.pos[1]-trueTop)*-1+trueTop;
      this.vel[1]=Math.abs(this.vel[1]-rect.vel[1])+rect.vel[1];
    }
  }

  render(){
    //if the first argument exists use that
    //otherwise try to get the data camera
    //otherwise IDK
    //console.log(arguments[0]);
    var cameraObject=
      arguments[0]?arguments[0]:(data.camera?data.camera:{});
    //data.camera.getCoordsAndSize(this.x,this.y,this.size);
    //console.log(cameraObject);
    //console.log();
    var pos=
      cameraObject.getCoordsAndSize(this.pos[0],this.pos[1],this.size);
    //this.parent.parent;
    //console.log(pos);
    ctx.beginPath();
    ctx.moveTo(pos.x+pos.size,pos.y);
    ctx.arc(pos.x,pos.y,pos.size,0,Math.PI*2,false);
    ctx.closePath();
    if(this.filled){
      //HERE i got the Style not Color RIGHT...
      //He got the Style yooo
      ctx.fillStyle=this.color;
      ctx.fill();
    }else{
      ctx.strokeStyle=this.color;
      ctx.stroke(); //had a stroke
    }
  }
  draw(){
    this.render();
  }

  //gets the distance between "this" and the inputted object
  //assumes the inputted object has an x and y...
  //renamed from getDistance to distanceTo before its use
  distanceTo(object){
    return(
      Math.sqrt(
        (object.pos[0]-this.pos[0])**2+(object.pos[1]-this.pos[1])**2
      )
    );
  }

  
  //have this thing be a thing of its own to maybe even allow
  //computer things in the future
  getControlsFromKeyboard(){
    //check keys
    this.up=
      keyPressed('w')||keyPressed('W')||keyPressed("ArrowUp");
    this.down=
      keyPressed('s')||keyPressed('S')||keyPressed("ArrowDown");
    this.right=
      keyPressed('d')||keyPressed('D')||keyPressed("ArrowRight");
    this.left=
      keyPressed('a')||keyPressed('A')||keyPressed("ArrowLeft");
    //console.log(this.left);
  }
  move(){
    //if velocity is used
    //change the velocity
    if(this.up){this.vel[1]-=(settings.speed/settings.fps)/settings.fps;}
    if(this.down){this.vel[1]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.right){this.vel[0]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.left){this.vel[0]-=(settings.speed/settings.fps)/settings.fps;}
    //console.log(this.left);
  }
  //move
  moveToCoordinates(mx,my){
    //vector this to mouse (what it was originally made for)
    //the word "target" here in this context would be kind of
    //confusing so maybe the word "mouse" is better since that is
    //one instance this is made for
    //so anyways the vector of this to mouse:
    var vector=[mx-this.pos[0],my-this.pos[1]];
    var magnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    //unit vector
    var normalized=[vector[0]/magnitude,vector[1]/magnitude];
    //change the velocity
    this.vel[0]+=normalized[0]*settings.speed/(settings.fps*settings.fps);
    this.vel[1]+=normalized[1]*settings.speed/(settings.fps*settings.fps);
  }
  //move with the mouse
  moveWithMouse(){
    this.moveToCoordinates(mouse.x,mouse.y);
  }
  
  decay(){
    //decay the velocity over time
    //if(settings.useDampeners){
    plr.vel[0]*=settings.decay;
    plr.vel[1]*=settings.decay;
    //}
  }
}




//THE camera!!!
class Camera extends PhysicsObject{
  //scale is the order of magnitude of which 
  //everything is zoomed in to
  //as in default^n where n is scale idk
  //oh yeah also maybe i could get an automatic scale setter thing
  //as well!
  //although if there are only 3 things and they just fluctuate
  //then the camera would repeatedly go in and out and in and out
  //and that would be quite annoying... eh idk maybe maybe not idk
  //scale is the power of 2 not 10? idk also i just looked at 
  //3d-10-8 and its code was kind of helpful but not really
  //it used 1.1 weirdly expressed as 1+(0.1)
  //IDK
  //but sure well ok then
  //anyways scale being normal should be 0
  //not 1
  //cuz something raised to 0 is 1 and then that gets multiplied
  //by the number
  constructor(x,y,xv,yv,scale){
    super();
    //x,y,xv,yv=x?x:0,y?y:0,xv?xv:0,yv?yv:0;
    
    //this.x=x?x:0;
    //this.y=y?y:0;
    //this.xv=xv?xv:0;
    //this.yv=yv?yv:0;
    this.scale=scale?scale:0; //SCALE?????????????????? yes.
    
    this.pos=[x,y];
    this.vel=[xv,yv];

    this.controls={
      up:false,
      down:false,
      right:false,
      left:false
    }
  } //idk lol scale?^
  //method to get the number to scale or multiply by or whatever
  getScaleNum(){
    return(Math.pow(2,this.scale));
  }
  //inputs world space coordinates and size
  //outputs camera space coordinates and size
  getCoordsAndSize(x,y,size){
    var scaleNum=this.getScaleNum();
    //console.log(scaleNum);
    var newSize=size*scaleNum
    var newX=x-this.pos[0];
    var newY=y-this.pos[1];
    newX*=scaleNum;
    newY*=scaleNum;
    //console.log(x==newX);
    
    return({x:newX,y:newY,size:newSize});
  }
  getCoords(x,y){
    var scaleNum=this.getScaleNum();
    var newX=x-this.pos[0];
    var newY=y-this.pos[1];
    newX*=scaleNum;
    newY*=scaleNum;
    return({x:newX,y:newY});
  }
  getSize(size){
    return(size*this.getScaleNum());
  }
  
  updatePosition(){
    //prefers list
    try{
      if(this.vel[0]!=0||this.vel[1]!=0){
      //console.error(
      //  "xv or yv variables defined for camera, "+
      //  "please instead use this.pos and this.vel"
      //);
        //something something camera caused the unused velocity
        //variables to be undefined instead of 0
      //this.vel[0]=0;
      //this.vel[1]=0;
    }
    }catch(e){}
    
    this.pos[0]+=this.vel[0];
    this.pos[1]+=this.vel[1];
  }
  accelerate(acceleration){
    acceleration=acceleration?acceleration:settings.acceleration;
    this.vel[0]+=acceleration[0];
    this.vel[1]+=acceleration[1];
  }

  
  //have this thing be a thing of its own to maybe even allow
  //computer things in the future
  getControlsFromKeyboard(){
    //check keys
    this.controls.up=
      keyPressed('w')||keyPressed('W')||keyPressed("ArrowUp");
    this.controls.down=
      keyPressed('s')||keyPressed('S')||keyPressed("ArrowDown");
    this.controls.right=
      keyPressed('d')||keyPressed('D')||keyPressed("ArrowRight");
    this.controls.left=
      keyPressed('a')||keyPressed('A')||keyPressed("ArrowLeft");
    //console.log(this.left);
  }
  move(){
    //if velocity is used
    //change the velocity
    if(this.controls.up){this.vel[1]-=(settings.speed/settings.fps)/settings.fps;}
    if(this.controls.down){this.vel[1]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.controls.right){this.vel[0]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.controls.left){this.vel[0]-=(settings.speed/settings.fps)/settings.fps;
      //console.log("yes");
      //console.log(this.xv);
    }
    //console.log(this.left);
  }
  //move
  moveToCoordinates(mx,my){
    //vector this to mouse (what it was originally made for)
    //the word "target" here in this context would be kind of
    //confusing so maybe the word "mouse" is better since that is
    //one instance this is made for
    //so anyways the vector of this to mouse:
    var vector=[mx-this.pos[0],my-this.pos[1]];
    var magnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    //unit vector
    var normalized=[vector[0]/magnitude,vector[1]/magnitude];
    //change the velocity
    this.vel[0]+=normalized[0]*settings.speed/(settings.fps*settings.fps);
    this.vel[1]+=normalized[1]*settings.speed/(settings.fps*settings.fps);
  }
  //move with the mouse
  moveWithMouse(){
    this.moveToCoordinates(mouse.x,mouse.y);
  }
  
  decay(){
    //decay the velocity over time
    //if(settings.useDampeners){
    plr.vel[0]*=settings.decay;
    plr.vel[1]*=settings.decay;
    //}
  }
}

var data={camera:new Camera()};


class Ball extends PhysicsObject{
  constructor(x,y,size,color,filled){
    super();
    //console.log(x,y);
    //this.x=x;
    //this.y=y;
    //this.xv=0;
    //this.yv=0;
    
    this.size=size;
    this.radius=size;
    this.color=color;
    this.filled=filled;
    this.force=size;
    
    this.pos=[x,y];
    this.vel=[0,0];
  }
  //constructor(){
  //  this.x=0;
  //  this.y=0;
  //  this.xv=0;
  //  this.yv=0;
  //}
  /*
  render(){
    //if the first argument exists use that
    //otherwise try to get the data camera
    //otherwise IDK
    //console.log(arguments[0]);
    var cameraObject=
      arguments[0]?arguments[0]:(data.camera?data.camera:{});
    //data.camera.getCoordsAndSize(this.x,this.y,this.size);
    //console.log(cameraObject);
    //console.log();
    var pos=
      cameraObject.getCoordsAndSize(this.pos[0],this.pos[1],this.size);
    //this.parent.parent;
    //console.log(pos);
    ctx.beginPath();
    ctx.moveTo(pos.x+pos.size,pos.y);
    ctx.arc(pos.x,pos.y,pos.size,0,Math.PI*2,false);
    ctx.closePath();
    if(this.filled){
      //HERE i got the Style not Color RIGHT...
      //He got the Style yooo
      ctx.fillStyle=this.color;
      ctx.fill();
    }else{
      ctx.strokeStyle=this.color;
      ctx.stroke(); //had a stroke
    }
  }
  draw(){
    this.render();
  }
  */
  updatePositionByVelocity(){
    if(
      //(
      //  this.xv==NaN||this.yv==NaN||
      //  this.x==NaN||this.y==NaN||
      //  this.xv==undefined||this.yv==undefined||
      //  this.x==undefined||this.y==undefined
      //)
      //&&
      (
        this.vel[0]==NaN||this.vel[1]==NaN||
        this.pos[0]==NaN||this.pos[1]==NaN||
        this.vel[0]==undefined||this.vel[1]==undefined||
        this.pos[0]==undefined||this.pos[1]==undefined
      )
    ){
      error.log(
        "NaN found in updatePositionByVelocity:"
        +" xv:"+this.xv
        +" yv:"+this.yv
        +" x:"+this.x
        +" y:"+this.y
        +" vel[0]:"+this.vel[0]
        +" vel[1]:"+this.vel[1]
        +" pos[0]:"+this.pos[0]
        +" pos[1]:"+this.pos[1]
      );
    }
    this.pos[0]+=this.vel[0];
    this.pos[1]+=this.vel[1];
  }
}

//methods for things like calculating wall bounces and stuffs
class BallPhysics extends Ball{
  constructor(x,y,xv,yv,size,color,filled){
    super(x,y,size,color,filled);
    this.vel[0]=xv;
    this.vel[1]=yv;
  }

  
  //have this thing be a thing of its own to maybe even allow
  //computer things in the future
  getControlsFromKeyboard(){
    //check keys
    this.up=
      keyPressed('w')||keyPressed('W')||keyPressed("ArrowUp");
    this.down=
      keyPressed('s')||keyPressed('S')||keyPressed("ArrowDown");
    this.right=
      keyPressed('d')||keyPressed('D')||keyPressed("ArrowRight");
    this.left=
      keyPressed('a')||keyPressed('A')||keyPressed("ArrowLeft");
    //console.log(this.left);
  }
  move(){
    //if velocity is used
    //change the velocity
    if(this.up){this.vel[1]-=(settings.speed/settings.fps)/settings.fps;}
    if(this.down){this.vel[1]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.right){this.vel[0]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.left){this.vel[0]-=(settings.speed/settings.fps)/settings.fps;}
    //console.log(this.left);
  }
  //move
  moveToCoordinates(mx,my){
    //vector this to mouse (what it was originally made for)
    //the word "target" here in this context would be kind of
    //confusing so maybe the word "mouse" is better since that is
    //one instance this is made for
    //so anyways the vector of this to mouse:
    var vector=[mx-this.pos[0],my-this.pos[1]];
    var magnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    //unit vector
    var normalized=[vector[0]/magnitude,vector[1]/magnitude];
    //change the velocity
    this.vel[0]+=normalized[0]*settings.speed/(settings.fps*settings.fps);
    this.vel[1]+=normalized[1]*settings.speed/(settings.fps*settings.fps);
  }
  //move with the mouse
  moveWithMouse(){
    this.moveToCoordinates(mouse.x,mouse.y);
  }
  
  decay(){
    //decay the velocity over time
    //if(settings.useDampeners){
    plr.vel[0]*=settings.decay;
    plr.vel[1]*=settings.decay;
    //}
  }
  
  /*
  wallBounce(){
    if(this.pos[0]<=-canvasWidth/2+this.size){
      var newWidth=canvasWidth/2-this.size;
      this.pos[0]=((this.x+newWidth)*-1)-newWidth;
      //reverse velocity
      this.vel[0]*=-1;
    }
    if(this.pos[0]>=canvasWidth/2-this.size){
      var newWidth=canvasWidth/2-this.size;
      this.pos[0]=((this.x-newWidth)*-1)+newWidth;
      //reverse velocity
      this.vel[0]*=-1;
    }
    if(this.pos[1]<=-canvasHeight/2+this.size){
      var newHeight=canvasHeight/2-this.size;
      this.pos[1]=((this.y+newHeight)*-1)-newHeight;
      //reverse velocity
      this.vel[1]*=-1;
    }
    if(this.pos[1]>=canvasHeight/2-this.size){
      var newHeight=canvasHeight/2-this.size;
      this.pos[1]=((this.y-newHeight)*-1)+newHeight;
      //reverse velocity
      this.vel[1]*=-1;
    }
  }
  */
  //wall wrap; hit one wall, come out the other wall
  wallWrap(){
    //this.x=this.x<=-canvasWidth/2?this.x+canvas.Width:this.x;
    if(this.pos[0]<=-canvasWidth/2)this.x=this.x+canvas.width;
    //this.x=this.x>=canvasWidth/2?this.x-canvas.Width:this.x;
    if(this.pos[0]>=canvasWidth/2)this.x=this.x-canvas.width;
    //this.y=this.y<=-canvasHeight/2?this.y+canvas.Height:this.y;
    if(this.pos[1]<=-canvasHeight/2)this.y=this.y+canvas.height;
    //this.y=this.y>=canvasHeight/2?this.y-canvas.Height:this.y;
    if(this.pos[1]>=canvasHeight/2)this.y=this.y-canvas.height;
    // this is code ^ but its a 50/50 sometimes
  }
  updatePosition(){
    this.pos[0]+=this.vel[0];
    this.pos[1]+=this.vel[1];
    //console.log(this.xv);
    //console.log(this.x);
    //CoolManTheCool was here 7/2/2022 and the guy under me isn't cool
    //i know
  }
  drawTrajectoryLine(lineColor){
    
    var pos=data.camera.getCoordsAndSize(this.pos[0],this.pos[1],1);
    //console.log(pos);
    
    ctx.beginPath();
    var color=lineColor?lineColor:"red";
    ctx.strokeStyle=color;
    ctx.moveTo(pos.pos[0],pos.pos[1]);
    ctx.lineTo(
      pos.pos[0]+(this.vel[0]*pos.size)*settings.fps,
      pos.pos[1]+(this.vel[1]*pos.size)*settings.fps
    );
    //its Style not Color!!!!!!!!!
    //this fix should apply to the text too...
    ctx.stroke();
    //ctx.closePath();
  }
  drawRelativeTrajectoryLine(obj,lineColor){
    var pos0=data.camera.getCoordsAndSize(this.pos[0],this.pos[1],1);
    var pos1=data.camera.getCoordsAndSize(obj.pos[0],obj.pos[1],1);
    //size here in this context is just a scalar variable really
    //actually yes cuz it is a vector so 
    //mathematically defined yes it is still a scaler nice
    
    //get the colors
    ctx.beginPath();
    var color=lineColor?lineColor:"lime";
    ctx.strokeStyle=color;
    ctx.moveTo(pos0.pos[0],pos0.pos[1]);
    //STUFF
    //it just works now idk
    //i used logic to make it
    //and then added camera compatibility and now it just doesnt
    //look like it makes any sense anymore
    //but hey at least it still works so that nice
    ctx.lineTo(
      pos0.pos[0]+((this.vel[0]*pos0.size)-(obj.vel[0]*pos1.size))*settings.fps,
      pos0.pos[1]+((this.vel[1]*pos0.size)-(obj.vel[1]*pos1.size))*settings.fps
    );
    ctx.stroke();
  }
}
/*class player extends ball{
  constructor(x,y,xv,yv){
    this.x=x;
    this.y=y;
    this.xv=xv;
    this.yv=yv;
  }
}*/ //your microphone is not a war king
//fix your microphone
//hit the micrphone
//make microphone great again

//the black hole like ball that can also maybe work as a white hole like ball??? sure
class ForceBall extends BallPhysics{
  constructor(x,y,xv,yv,force,size,color,filled){
    super(x,y,xv,yv,size,color,filled);
    //this.xv=xv;
    //this.yv=yv;
    this.vel[0]=xv;
    this.vel[1]=yv;
    this.force=force;
    this.render();
  }
  //singular one way attraction
  //from object to this
  //object is the one being affected
  //it is being affected by force
  attractSingle(obj){
    //object minus this for object to this vector
    var vector=[
      obj.pos[0]-this.pos[0],
      obj.pos[1]-this.pos[1]
    ];
    var vectorMagnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    var normalizedVector=[
      vector[0]/vectorMagnitude,
      vector[1]/vectorMagnitude
    ];
    //change the speeds
    obj.vel[0]+=normalizedVector[0]*this.force; //here was the
    obj.vel[1]+=normalizedVector[1]*this.force; //solution all along!
  }
  //both way attraction by mass
  //force using physicObject's method
  /*
  attractBoth(obj,mult){
    if(this==obj){
      //changed from console.log to error.log...
      //whoops not that its meant to be console.error...
      //at 8/30/2022 10:20 AM CST Tueday
      console.error("Same object interacting with self in attractBoth error");
    }
    //console.log(obj);
    //object minus this for object to this vector
    //check the numbers to make sure they are not undefined
    //console.log(obj.pos,this.pos);
    //console.log(obj.pos[0],obj.pos[1],this.pos[0],this.pos[1]);
    if(
        obj.pos[0]==undefined
      ||obj.pos[1]==undefined
      ||this.pos[0]==undefined
      ||this.pos[1]==undefined
      ||obj.pos[0]=="NaN"
      ||obj.pos[1]=="NaN"
      ||this.pos[0]=="NaN"
      ||this.pos[1]=="NaN"
      ||isNaN(obj.pos[0])
      ||isNaN(obj.pos[1])
      ||isNaN(this.pos[0])
      ||isNaN(this.pos[1])
    ){
      console.error("obj or this pos undefined what is this thing");
      console.log(
        "obj: "+obj.pos[0]+" "+obj.pos[1]+"\n"+
        "this: "+this.pos[0]+" "+this.pos[1]
      );
    }
    var vector=[
      obj.pos[0]-this.pos[0],
      obj.pos[1]-this.pos[1]
    ];
    //console.log(vector);
    //console.log(vector);
    //console.log(vector);
    var vectorMagnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    var normalizedVector=[
      vector[0]/vectorMagnitude,
      vector[1]/vectorMagnitude
    ];
    //console.log(normalizedVector);
    
    //forces between the two
    //var multiplier=1;
    //stops things that push away from attracting to each other
    //not needed for correct use
    //if(this.force<0&&obj.force<0){
    //  multiplier=-1;
    //}
    //stop dividing by zero!!!
    //stop dividing all together!!!
    
    //var toThisForce=this.force/obj.force*multiplier;
    if(this.force==undefined)
      console.error("Object force not defined!");
    var toThisForce=this.force;
    //console.log(toThisForce);
    //var toObjForce=obj.force/this.force*multiplier;
    //yay simple thing works!!! checks if its undefined or not
    //and if it doesnt have a force then it uses the size instead
    var toObjForce=
      obj.force?obj.force:
      obj.size?obj.size:
      obj.radius?obj.radius:
      1;
    if(toObjForce==undefined)
      console.error("For some reason the object force is undefined");
    //console.log(toObjForce);
    
    //change the speeds
    obj.vel[0]-=normalizedVector[0]*(toThisForce)/(settings.fps**2)*mult;
    obj.vel[1]-=normalizedVector[1]*(toThisForce)/(settings.fps**2)*mult;
    this.vel[0]+=normalizedVector[0]*(toObjForce)/(settings.fps**2)*mult;
    this.vel[1]+=normalizedVector[1]*(toObjForce)/(settings.fps**2)*mult;
    //console.log(obj.vel[0],obj.vel[1],this.vel[0],this.vel[1]);
  }
  */
  
  //gets the distance between "this" and the inputted object
  //assumes the inputted object has an x and y...
  //renamed from getDistance to distanceTo before its use
  distanceTo(object){
    return(Math.sqrt((object.pos[0]-this.pos[0])**2+(object.pos[1]-this.pos[1])**2));
  }
}

//funny joke with nowhere else to write it:
//got 2 short jokes and a long one
//joke joke jooooke
//thanks casual conversation between teachers its a good joke
//-a bit before 2:45 PM CST 9/2/2022 Friday 

//the target ball
class TargetBall extends BallPhysics{
  constructor(x,y,xv,yv,size,color,filled){
    super(x,y,xv,yv,size,color,filled);
    //this.xv=xv;
    //this.yv=yv;
    this.vel[0]=xv;
    this.vel[1]=yv;
    this.render();
  }
  //sotp misspelling please and thanks
  newPositionAndVelocity(){
    this.newPosition();
    this.newVelocity();
  }
  newPosition(){
    //this.x=(Math.random()-0.5)*canvas.width;
    //this.y=(Math.random()-0.5)*canvas.height;
    //console.log(((Math.random()*2)-1)*(canvas.width/2-this.size/2));
    //why is hte x and y nan here
    this.pos[0]=((Math.random()*2)-1)*(canvas.width/2-this.size/2);
    this.pos[1]=((Math.random()*2)-1)*(canvas.height/2-this.size/2);
    
  }
  //interesting when just velocity change and not position change
  newVelocity(speed){
    //HOW IS THIS ERRORING
    //"speed" is undefined... 
    //thanks javascript for maybe or maybe not showing the error..
    //-7/2/2022 5:26 PM CST Saturday
    var newAngle=Math.random()*Math.PI*2;
    //console.log(newAngle);
    //console.log(speed);
    this.vel[0]=Math.cos(newAngle)*settings.targetSpeed;
    this.vel[1]=Math.sin(newAngle)*settings.targetSpeed;
  }
  //returns true or false
  checkCollision(obj){
    var dist=Math.sqrt(
      Math.pow(this.pos[0]-obj.pos[0],2)+Math.pow(this.pos[1]-obj.pos[1],2)
    );
    return(dist<=this.size+obj.size);
  }
  //newPosition(){
  //  this.x=((Math.random()*2)-1)*(canvasWidth/2-target.size/2);
  //  this.y=((Math.random()*2)-1)*(canvasHeight/2-target.size/2);
    //set the target speed
    //if(settings.targetHasVelocity){
    //this.xv=((Math.random()*2)-1)*settings.targetSpeed;
    //this.yv=((Math.random()*2)-1)*settings.targetSpeed;
    //}
    //increment the score
    //score++;
  //}
}

//the player ball
class PlayerBall extends ForceBall{
  constructor(x,y,xv,yv,force,size,color,filled){
    super(x,y,xv,yv,force,size,color,filled);
    this.up=false;
    this.down=false;
    this.right=false;
    this.left=false;
    this.render();
  }
  //have this thing be a thing of its own to maybe even allow
  //computer things in the future
  getControlsFromKeyboard(){
    //check keys
    this.up=
      keyPressed('w')||keyPressed('W')||keyPressed("ArrowUp");
    this.down=
      keyPressed('s')||keyPressed('S')||keyPressed("ArrowDown");
    this.right=
      keyPressed('d')||keyPressed('D')||keyPressed("ArrowRight");
    this.left=
      keyPressed('a')||keyPressed('A')||keyPressed("ArrowLeft");
    //console.log(this.left);
  }
  move(){
    //if velocity is used
    //change the velocity
    if(this.up){this.vel[1]-=(settings.speed/settings.fps)/settings.fps;}
    if(this.down){this.vel[1]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.right){this.vel[0]+=(settings.speed/settings.fps)/settings.fps;}
    if(this.left){this.vel[0]-=(settings.speed/settings.fps)/settings.fps;}
    //console.log(this.left);
  }
  //move
  moveToCoordinates(mx,my){
    //vector this to mouse (what it was originally made for)
    //the word "target" here in this context would be kind of
    //confusing so maybe the word "mouse" is better since that is
    //one instance this is made for
    //so anyways the vector of this to mouse:
    var vector=[mx-this.pos[0],my-this.pos[1]];
    var magnitude=Math.sqrt(vector[0]**2+vector[1]**2);
    //unit vector
    var normalized=[vector[0]/magnitude,vector[1]/magnitude];
    //change the velocity
    this.vel[0]+=normalized[0]*settings.speed/(settings.fps*settings.fps);
    this.vel[1]+=normalized[1]*settings.speed/(settings.fps*settings.fps);
  }
  //move with the mouse
  moveWithMouse(){
    this.moveToCoordinates(mouse.x,mouse.y);
  }
  
  decay(){
    //decay the velocity over time
    //if(settings.useDampeners){
    plr.vel[0]*=settings.decay;
    plr.vel[1]*=settings.decay;
    //}
  }
}

//line
//-7/18/2022 11:34 AM CST Monday
ctx.line=(x1,y1,x2,y2,color)=>{
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  //ctx.closePath(); //closePath() completes polygons...
  ctx.strokeStyle=color?color:"orange";
  ctx.stroke();
  //console.log(x1,y1,x2,y2,color);
};
//IT ALREADY EXSITS...

class Text{
  constructor(size,font,color){
    this.size=size?size:48;
    this.font=font?font:"serif";
    this.color=color?color:"none";
    this.line=1;
  }
  reset(){
    this.line=1;
  }
  println(text,color){
    //"convert to template string" suggestion...?
    ctx.font=`${this.size}px ${this.font}`;
    ctx.beginPath();
    ctx.fillStyle=color?color:this.color;
    ctx.fillText(
      text,
      -canvasWidth/2,-canvasHeight/2+this.size*this.line);
    //this ? : single line conditionals thing is so nice!
    //console.log(ctx.fillStyle);
    ctx.fill();
    ctx.closePath();
    this.line++;
  }
}

//new Ball(1,2,3,4,1,"green",true).newPositionAndVelocity(Math.random()*100);
class Data{
  camera=new Camera(0,0,0,0,0);
  text=new Text(48,"serif","white");
  objects={};
  loopFunction=()=>{
    console.error("data.loopFunction(); not defined yet!");
  }
  render(){
    for(obj in objects){
      obj.render();
    }
  }
  addObject(name,object){
    this.objects[name]=object;
  }
}
data=new Data();

//console.log(new ForceBall(3));
//console.log(new ForceBall(2,3,1,2,5,10,"blue",true));

//new as of a bit before 8/29/2022 3:43 PM CST Monday
//number of line balls
var numGraphicsBalls=0;
//creates a line of balls from one coordinate to another
function lineOfBallsEnd(x1,y1,x2,y2,numBalls,color){
  //include x2 y2 but not x1 y1 so that lines can start and end
  //on the same spots without overlapping balls
  //and also lines can be made on other lines
  
  //get the total movement vector
  var lineVector=[x2-x1,y2-y1];
  //get the individual ball vector or whatever
  var ballVector=[lineVector[0]/numBalls,lineVector[1]/numBalls];
  for(var i=1;i<=numBalls;i++){
    //console.log(i);
    data.addObject(
      "graphicsBall"+numGraphicsBalls,
      new PlayerBall(
        x1+ballVector[0]*i,y1+ballVector[1]*i,
        0,0,settings.playerForce,10,color,true
      )
    );
    //gotta remember to do this...
    numGraphicsBalls++;
  }
}

function lineOfBallsStart(x1,y1,x2,y2,numBalls,color){
  //include x1 y1 but not x2 y2 so that lines can start and end
  //on the same spots without overlapping balls
  //and also lines can be made on other lines
  
  //get the total movement vector
  var lineVector=[x2-x1,y2-y1];
  //get the individual ball vector or whatever
  var ballVector=[lineVector[0]/numBalls,lineVector[1]/numBalls];
  for(var i=0;i<numBalls;i++){
    //console.log(i);
    data.addObject(
      "graphicsBall"+numGraphicsBalls,
      new PlayerBall(
        x1+ballVector[0]*i,y1+ballVector[1]*i,
        0,0,settings.playerForce,10,color,true
      )
    );
    //gotta remember to do this...
    numGraphicsBalls++;
  }
}

function lineOfBallsFull(x1,y1,x2,y2,numBalls,color){
  //includes both x1 y1 and x2 y2 so that lines can start and end
  //on the same spots without overlapping balls
  //and also lines can be made on other lines
  
  //get the total movement vector
  var lineVector=[x2-x1,y2-y1];
  //get the individual ball vector or whatever
  var ballVector=[lineVector[0]/numBalls,lineVector[1]/numBalls];
  for(var i=0;i<numBalls;i++){
    //console.log(i);
    data.addObject(
      "graphicsBall"+numGraphicsBalls,
      new PlayerBall(
        x1+ballVector[0]*i,y1+ballVector[1]*i,
        0,0,settings.playerForce,10,color,true
      )
    );
    //gotta remember to do this...
    numGraphicsBalls++;
  }
}

//literally just make a circle of balls
function circleOfBalls(
  x1,y1,scale,numBalls,color,xMult,yMult,size,xv,yv){
  xMult=xMult?xMult:1;
  yMult=yMult?yMult:1;
  size=size?size:10;
  var angleToAdd=Math.PI*2/numBalls;
  var angle=0;
  for(var i=0;i<numBalls;i++){
    data.addObject(
      "graphicsBall"+numGraphicsBalls,
      new PlayerBall(
        x1+scale*Math.cos(angle)*xMult,
        y1+scale*Math.sin(angle)*yMult,
        //random or not random velocities
        (xv!=undefined)?xv:Math.sin(angle*128)*settings.randomSpeed,
        (yv!=undefined)?yv:Math.cos(angle*128)*settings.randomSpeed,
        //settings.randomSpeed*(Math.random()-0.5)*2,
        //settings.randomSpeed*(Math.random()-0.5)*2,
        settings.playerForce,size,color,true
      )
    );
    //really though i actually have to remember this...
    numGraphicsBalls++;
    angle+=angleToAdd;
  }
}

//the letter, the position x and y, 
//and the scale or size of said letter...
function writeLetter(letter,px,py,scale,color,size){
  size=size?size:10;
  //collumns first i guess... oh wait thats probably good...
  //oh yes i think it actually is... yes...
  for(var y=0;y<letters[letter].length;y++){
    //actually why not x and y or y and x instead of i and j...? yes
    for(var x=0;x<letters[letter][y].length;x++){
      //if its not falsey 
      //or i guess truthy idk or toothy cuz wisdom teeth removal... 
      //... ... ...
      //stop
      //then make a thing in the correct place
      //console.log(letters[letter][y][x]);
      //console.log(!(letters[letter][y][x]==0));
      //also gotta remember the [letter] part...
      if(!(letters[letter][y][x]==0)){
        data.addObject(
          "graphicsBall"+numGraphicsBalls,
          new PlayerBall(
            px+x*scale,py+y*scale,
            
            Math.sin(x*64)*settings.randomSpeed,
            Math.cos(y*64)*settings.randomSpeed,
            //0,0,
            settings.playerForce,size,color,true
          )
        );
        //console.log(x,y,data.objects["graphicsBall"+numGraphicsBalls]);
        numGraphicsBalls++; //stop forgetting
      }
    }
  }
  return(letters[letter][0].length);
}

function writeString(string,px,py,scale,color,size){
  size=size?size:10;
  var space=0; //how far right from the start is selected
  //console.log(px,py);
  for(var i=0;i<string.length;i++){
    //console.log(string[i],px+space*scale,py,scale,color,size);
    writeLetter(string[i],px+space*scale,py,scale,color,size);
    //add letter and a small space between letters
    space+=letters[string[i]][0].length+1;
  }
}

//gets the length of a string
function getStringLength(string){
  var space=0;
  for(var i=0;i<string.length;i++){
    //add the letter
    space+=letters[string[i]][0].length;
    //add space between characters
    if(i!=string.length-1){
      space+=1;
    }
  }
  return(space);
}

//getCharacterLength to get the length of a character
//getStringLength works as well but idk why not
function getCharacterLength(character){
  return(letters[character][0].length);
}

//-9/9/2022 Friday 8:16 AM CST
//input a number between 0 and 1 and get an rgba out of it
//from the rainbow defined here
//runs modulous so going over 1 is fine but not necissarily
//under 1, i don't want to implement my previous "better modulous"
//because no
//also thanks clipboard history on chromebooks thats quite nice of 
//you to make me not need to go back for it
function getColor(x){
  return(
    `rgba(${
        (-(Math.abs(4*x)**2)+2)*255
      },${
        (-(Math.abs(4*x-2)**2)+2)*255
      },${
        (-(Math.abs(4*x-4)**2)+2)*255
      })`
  );
}



//ctx.line(2,3,4,5,6);

console.log("4 classData loaded!");

//don't just copy this over as I will create this all over YET AGAIN!?...
//no i just copied this one over...
//also the video in question: 
//https://www.youtube.com/watch?v=eED4bSkYCB8&t=195s
//oh yeah cool timestamps...


//camera:
//no, just merged with above

//initialize data
//var data={
//  camera:new Camera(0,0,0,0)
//};

//orb because its an orb

//cool proxy: 45.32.216.91

class BaseOrb extends PhysicsObject{
  constructor(x,y,xv,yv,radius,color){
    super();
    //console.log(x,y);
    this.pos=[x?x:"never defined",y?y:"not defined"];
    //why do i need to do this?! isNaN won't work and 0 is falsey...
    if(x==0)this.pos[0]=0;
    if(y==0)this.pos[1]=0;
    this.vel=[xv?xv:0,yv?yv:0];
    this.radius=radius?radius:5;
    this.color=color?color:"white";
  }
  updatePosition(){
    this.pos=[this.pos[0]+this.vel[0],this.pos[1]+this.vel[1]];
  }
  /*
  renderFilled(){
    var cx=data.camera.pos[0]?data.camera.pos[0]:0;
    var cy=data.camera.pos[1]?data.camera.pos[1]:0;
    //var coords=this.getSideCoordinates();
    ctx.moveTo(this.pos[0]-this.radius-cx,this.pos[1]-cy);
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0]-cx,this.pos[1]-cy,this.radius,0,Math.PI*2
    );
    ctx.fill();
  }
  renderOutline(){
    var cx=data.camera.pos[0]?data.camera.pos[0]:0;
    var cy=data.camera.pos[1]?data.camera.pos[1]:0;
    ctx.moveTo(this.pos[0]-this.radius-cx,this.pos[1]-cy);
    ctx.strokeStyle=this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0]-cx,this.pos[1]-cy,this.radius,0,Math.PI*2
    );
    ctx.stroke();
  }
  */
  render(filled){
    filled=filled?filled:true;
    //if(filled){
    //  this.renderFilled();
    //}else{
    //  this.renderOutline();
    //}
    
    var cameraObject=
      arguments[0]?arguments[0]:(data.camera?data.camera:{});
    var pos=
      cameraObject.getCoordsAndSize(this.pos[0],this.pos[1],this.radius);
    //console.log(this.size);
    
    //var cx=data.camera.pos[0]?data.camera.pos[0]:0;
    //var cy=data.camera.pos[1]?data.camera.pos[1]:0;
    //var coords=this.getSideCoordinates();
    //ctx.moveTo(this.pos[0]-this.radius-cx,this.pos[1]-cy);
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(
      //this.pos[0]-cx,
      //this.pos[1]-cy,
      pos.x,pos.y,
      //this.radius,
      pos.size,
      0,Math.PI*2
    );
    
    if(filled){
      ctx.fill();
      //this.renderFilled();
    }else{
      ctx.stroke();
      //this.renderOutline();
    }
    
  }
}

class WallBouncingOrb extends BaseOrb{
  //initialization function
  constructor(x,y,xv,yv,radius,color){
    super(x,y,xv,yv,radius,color);
    
    //this.pos=[x?x:"never defined",y?y:"not defined"];
    //this.vel=[xv?xv:0,yv?yv:0];
    //this.radius=radius?radius:5;
    //this.color=color?color:"white";
  }
  
  //wall bounding detection and action function, 
  //uses settings variables actually nahh...
  //takes rectangle class as input because yes
  /*
  wallBounce(rect){
    //get the corner coordinates
    var sides=rect.getSideCoordinates();
    //var topX=rect.pos[0]+rect.width/2;
    //var bottomX=rect.pos[0]-rect.width/2;
    //var topY=rect.pos[1]+rect.height/2;
    //var bottomY=rect.pos[1]-rect.height/2;
    //reverse the x velocity after compensating for the change
    var trueRight=sides.right-this.radius;
    var trueLeft=sides.left+this.radius;
    var trueTop=sides.top+this.radius;
    var trueBottom=sides.bottom-this.radius;
    //i gues implementation for the box moving is nonexistant?
    //not really sure how it even COULD be implemented, but still...
    //oh ok sure

    if(this.pos[0]>trueRight){
      this.pos[0]=(this.pos[0]-trueRight)*-1+trueRight;
      //still an incorrect way to add that...
      //in that the velocity should not be multiplied by negative 1
      //by itself, it should maybe have the rectangle's velocity
      //subtracted from ti before that... oh ok
      this.vel[0]=Math.abs(this.vel[0]-rect.vel[0])*-1+rect.vel[0];
    }
    if(this.pos[0]<trueLeft){
      this.pos[0]=(this.pos[0]-trueLeft)*-1+trueLeft;
      this.vel[0]=Math.abs(this.vel[0]-rect.vel[0])+rect.vel[0];
    }
    //remember y is reversed so top is a shorter coordinate than bottom
    if(this.pos[1]>sides.bottom-this.radius){
      this.pos[1]=(this.pos[1]-trueBottom)*-1+trueBottom;
      this.vel[1]=Math.abs(this.vel[1]-rect.vel[1])*-1+rect.vel[1];
    }
    if(this.pos[1]<trueTop){
      this.pos[1]=(this.pos[1]-trueTop)*-1+trueTop;
      this.vel[1]=Math.abs(this.vel[1]-rect.vel[1])+rect.vel[1];
    }
  }
  */
  //gravity(amountPerFrame){
  //  amountPerFrame=amountPerFrame?amountPerFrame:settings.gravity*data.dt;
  //  //remember not - but + because upside down screen...
  //  this.vel[1]+=amountPerFrame;
  //}
  accelerate(acceleration){
    acceleration=acceleration?acceleration:settings.acceleration;
    this.vel[0]+=acceleration[0]*data.dt;
    this.vel[1]+=acceleration[1]*data.dt;
  }
}

class Rectangle extends PhysicsObject{
  //x and y are the center of the rectangle
  constructor(x,y,xv,yv,width,height,color){
    super();
    this.pos=[x?x:0,y?y:0];
    this.vel=[xv?xv:0,yv?yv:0];
    //console.log(this.pos,this.vel);
    //console.log(this.pos[0],this.pos[1],this.vel[0],this.vel[1]);
    //console.log(x,y,xv,yv,width,height,color);
    this.width=width?width:100;
    this.height=height?height:100;
    this.color=color?color:"blue";
  }
  updatePosition(){
    this.pos[0]+=this.vel[0];
    this.pos[1]+=this.vel[1];
  }
  //accelerate by an ammount
  accelerate(acceleration){
    acceleration=acceleration?acceleration:settings.acceleration;
    this.vel[0]+=acceleration[0]*data.dt;
    this.vel[1]+=acceleration[1]*data.dt;
  }
  //multiply acceleration by an amount aka dampen if its between 0 and 1
  dampen(dampening){
    dampening=dampening?dampening:settings.dampening;
    if(typeof dampening=="object"){
      this.vel[0]*=dampening[0]*data.dt;
      this.vel[1]*=dampening[1]*data.dt;
    }else{
      //oh boy probably gonna need euler's number for htis...
      //yupppo... maybe??? yes... cuz continuous exponents?
      //wait no its not continuous 
      //it "compounds" settings.fps times in a second...
      //but the units need to be in... the thing multiplie by spf
      //that should work...
      //well anyways this is cool never implemented the fps thing
      //like this before!!!
      //this.vel[0]*=dampening;//*data.dt;
      //this.vel[1]*=dampening;//*data.dt;
      
      //nice.
      //https://www.desmos.com/calculator/4kgic6xwkv
      //what??? why was initial value in there...? wlelo k then...
      this.vel[0]*=(dampening)**(1/settings.fps);//*data.dt;
      this.vel[1]*=(dampening)**(1/settings.fps);//*data.dt;
      //this should work...
      
    }
  }
  getSideCoordinates(){
    return({
      left:this.pos[0]-this.width/2,
      right:this.pos[0]+this.width/2,
      top:this.pos[1]-this.height/2,
      bottom:this.pos[1]+this.height/2
    });
  }
  moveTo(targetPos,speed){
    targetPos=targetPos?targetPos:[mouse.x?mouse.x:0,mouse.y?mouse.y:0];
    speed=speed?speed:1;
    //console.log(targetPos);
    //console.log((this.pos[0]-targetPos[0])**2+(this.pos[1]-targetPos[1])**2);
    //console.log("pos: "+this.pos);
    //console.log("vel: "+this.vel);
    //fix this???!.
    var dist=Math.sqrt(
      (this.pos[0]-targetPos[0])**2+(this.pos[1]-targetPos[1])**2
    );
    //console.log("dist: "+dist);
    //console.log(0**2,Math.sqrt(0));
    //var notANumber=1/0;
    //console.log(notANumber==false);
    //console.log(notANumber==true);
    //console.log(notANumber==NaN);
    //console.log(dist==NaN);
    //console.log(NaN);
    //console.log(dist.isNaN());
    //console.log(notANumber==undefined);
    //console.log(notANumber);
    //console.log(dist);
    if(dist!=0){
      this.accelerate([
        (-this.pos[0]+targetPos[0])/dist*speed,
        (-this.pos[1]+targetPos[1])/dist*speed
      ]);
    }
  }
  dampenedMoveTo(targetPos,speed,dampen){
    targetPos=targetPos?targetPos:[mouse.x?mouse.x:0,mouse.y?mouse.y:0];
    speed=speed?speed:1;
    dampen=dampen?dampen:0.9**settings.fps;
    var dist=Math.sqrt(
      (this.pos[0]-targetPos[0])**2+(this.pos[1]-targetPos[1])**2
    );
    if(dist!=0){
      this.accelerate([
        (-this.pos[0]+targetPos[0])/Math.sqrt(dist)*speed,
        (-this.pos[1]+targetPos[1])/Math.sqrt(dist)*speed
      ]);
      //console.log();
      this.dampen(dampen);
    }
  }
  /*
  renderFilled(){
    //var coords=this.getSideCoordinates();
    var cx=data.camera.pos[0]?data.camera.pos[0]:0;
    var cy=data.camera.pos[1]?data.camera.pos[1]:0;
    var topX=this.pos[0]-this.width/2-cx;
    var topY=this.pos[1]-this.height/2-cy;
    //console.log(topX,topY);
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.rect(
      topX,topY,this.width,this.height
    );
    ctx.fill();
  }
  renderOutline(){
    var cx=data.camera.pos[0]?data.camera.pos[0]:0;
    var cy=data.camera.pos[1]?data.camera.pos[1]:0;
    var topX=this.pos[0]-this.width/2-cx;
    var topY=this.pos[1]-this.height/2-cy;
    //console.log(topX,topY);
    ctx.strokeStyle=this.color;
    ctx.beginPath();
    ctx.rect(
      topX,topY,this.width,this.height
    );
    ctx.stroke();
  }
  */
  render(filled){
    filled=filled?filled:true;
    //if(filled){
    //  this.renderFilled();
    //}else{
    //  this.renderOutline();
    //}

    var cameraObject=
      arguments[0]?arguments[0]:(data.camera?data.camera:{});
    var pos=
      cameraObject.getCoords(this.pos[0],this.pos[1]);
    var trueWidth=cameraObject.getSize(this.width);
    var trueHeight=cameraObject.getSize(this.height);
    //console.log(pos);
    //console.log(this.size);
    
    //var coords=this.getSideCoordinates();
    var cx=data.camera.pos[0]?data.camera.pos[0]:0;
    var cy=data.camera.pos[1]?data.camera.pos[1]:0;
    var topX=(this.pos[0]-this.width/2)-cx;
    var topY=(this.pos[1]-this.height/2)-cy;
    //var topX=data.camera.scale*(this.pos[0]-this.width/2)-cx;
    //var topY=data.camera.scale*(this.pos[1]-this.height/2)-cy;
    //console.log(topX,topY);
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.rect(
      //topX,topY,
      //topX*trueWidth/2,topY*trueHeight/2,
      //pos.x,pos.y,
      pos.x-trueWidth/2,pos.y-trueHeight/2,
      //data.camera.scale*this.width,
      //data.camera.scale*this.height
      trueWidth,//*this.width,
      trueHeight//*this.height
    );
    //console.log(pos.size);
    if(filled){
      ctx.fill();
    }else{
      ctx.stroke();
    }
  }
  /*
  render1(){
    //if the first argument exists use that
    //otherwise try to get the data camera
    //otherwise IDK
    //console.log(arguments[0]);
    var cameraObject=
      arguments[0]?arguments[0]:(data.camera?data.camera:{});
    //data.camera.getCoordsAndSize(this.x,this.y,this.size);
    //console.log(cameraObject);
    //console.log();
    var pos=
      cameraObject.getCoordsAndSize(this.pos[0],this.pos[1],this.size);
    //this.parent.parent;
    //console.log(pos);
    ctx.beginPath();
    ctx.moveTo(pos.x+pos.size,pos.y);
    ctx.arc(pos.x,pos.y,pos.size,0,Math.PI*2,false);
    ctx.closePath();
    if(this.filled){
      //HERE i got the Style not Color RIGHT...
      //He got the Style yooo
      ctx.fillStyle=this.color;
      ctx.fill();
    }else{
      ctx.strokeStyle=this.color;
      ctx.stroke(); //had a stroke
    }
  }
  */
}

class Graph extends Rectangle{
  constructor(
    x,y,xv,yv,
    width,height,
    data,
    multiplier,
    backgroundColor,dataColor,midlineColor
  ){
    super(x,y,xv,yv,width,height,backgroundColor);
    this.data=data?data:[-1,-0.5,0.5,0,1];
    this.dataColor=dataColor?dataColor:"white";
    this.midlineColor=midlineColor?midlineColor:"red";
    this.multiplier=multiplier?multiplier:1;
  }
  render(backgroundFilled){
    var filled=backgroundFilled?backgroundFilled:true;
    //if(filled){
    //  this.renderFilled();
    //}else{
    //  this.renderOutline();
    //}

    var cameraObject=
      arguments[0]?arguments[0]:(data.camera?data.camera:{});
    var pos=
      cameraObject.getCoords(this.pos[0],this.pos[1]);
    var trueWidth=cameraObject.getSize(this.width);
    var trueHeight=cameraObject.getSize(this.height);
    //console.log(pos);
    //console.log(this.size);
    
    //var coords=this.getSideCoordinates();
    var cx=data.camera.pos[0]?data.camera.pos[0]:0;
    var cy=data.camera.pos[1]?data.camera.pos[1]:0;
    var topX=(this.pos[0]-this.width/2)-cx;
    var topY=(this.pos[1]-this.height/2)-cy;
    //var topX=data.camera.scale*(this.pos[0]-this.width/2)-cx;
    //var topY=data.camera.scale*(this.pos[1]-this.height/2)-cy;
    //console.log(topX,topY);
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.rect(
      //topX,topY,
      //topX*trueWidth/2,topY*trueHeight/2,
      //pos.x,pos.y,
      pos.x-trueWidth/2,pos.y-trueHeight/2,
      //data.camera.scale*this.width,
      //data.camera.scale*this.height
      trueWidth,//*this.width,
      trueHeight//*this.height
    );
    //console.log(pos.size);
    if(filled){
      ctx.fill();
    }else{
      ctx.stroke();
    }
    
    //graph the stats
    //it is given to be in the range of -1 to 1 or something after
    //multiplication by the multiplier
    var multiplier=this.mulitplier;
    //console.log(multiplier);
    ctx.beginPath();
    ctx.moveTo(
      pos.x-trueWidth/2,
      pos.y-(trueHeight/2)*this.data[0]*multiplier
    );
    for(var i=0;i<this.data.length;i++){
      //percent from the left to the right
      var completionPercent=i/(this.data.length-1);
      ctx.lineTo(
        pos.x-trueWidth/2+(trueWidth*completionPercent),
        pos.y-(trueHeight/2)*this.data[i]*multiplier
      );
      //console.log(pos.x-trueWidth/2+(trueWidth*completionPercent),
      //  pos.y-(trueHeight/2)*this.data[i]
      //);
      
    }
    ctx.strokeStyle=this.dataColor;
    //ctx.closePath();
    ctx.stroke();
  }
  //thanks new statistics class for this vocab!
  addData(datum){
    this.data[this.data.length]=datum;
  }
  //amount is a number depicting how many data points 
  //should be left; if there is less than the amount, nothing is done
  //end is a boolean depicting whether the end side is kept (true), 
  //or the start side is kept (false)
  cutData(amount,end){
    end=end?end:true;
    //if it needs cutting
    if(this.data.length>=amount){
      //then cut it
      var newDataList=[];
      if(!end){
        for(var i=0;i<amount;i++){
          newDataList[i]=this.data[i];
        }
      }else{
        var indexShift=this.data.length-amount;
        for(var i=0;i<amount;i++){
          newDataList[i]=this.data[i+indexShift];
        }
      }
      this.data=newDataList;
    }
  }
}



var testRect=new Rectangle(10,10,5,5,30,30,"orange");
testRect.render();

var testGraph=new Graph(20,20,1,1,50,50,"lime");


//console.log("FPS: "+settings.fps);

console.log("4 classData loaded!");
