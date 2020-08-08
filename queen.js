// Checkpoint 1 | Creating the queen object
var queen={
    direction:"s",
    position:{x:4,y:0},
    whereabouts:[]
  };
  
  // Checkpoint 2 | Turning the queen
  function changeDirection(x){
    if(x =="N")
      return x;
    else if (x=="S")
       return x;
    else if(x =="E")
      return x;
    else if (x=="W")
       return x
    else if (x=="NE")
       return x;
    else if(x =="NW")
      return x;
    else if (x=="SE")
       return x;
    else if (x=="SW")
        return x;
  }
  let changed_dir=changeDirection("N");
  queen.direction= changed_dir;
  
  
  // Checkpoint 3 | Moving the queen
  function moveForward(){
    if(queen.direction=="N"){
      queen.position.y++;
    }
    else if(queen.direction=="S"){
      queen.position.y--;
    }
    else if(queen.direction=="W"){
      queen.position.x--;
    }
    else if(queen.direction=="E"){
      queen.position.x++;
      
    }
    else if(queen.direction=="NE"){
      queen.position.x++;
      queen.position.y++
    }
    else if(queen.direction=="NW"){
      queen.position.x--;
      queen.position.y++;
    }
    else if(queen.direction=="SE"){
      queen.position.x++;
      queen.position.y--;
    }
    else{
      queen.position.x--;
      queen.position.y--;
      
    }
    queen.whereabouts.push(queen.position);
  
  }
  moveForward();
  console.log(queen.position)
  
  
  
  // Checkpoint 4 | Jump move the queen
  function jumpMoveForward(n){
    if(queen.direction=="N"){
      queen.position.y+=n;
    }
    else if(queen.direction=="S"){
      queen.position.y-=n;
    }
    else if(queen.direction=="W"){
      queen.position.x-=n;
    }
    else if(queen.direction=="E"){
      queen.position.x+=n;
      
    }
    else if(queen.direction=="NE"){
      queen.position.x+=n;
      queen.position.y+=n;
    }
    else if(queen.direction=="NW"){
      queen.position.x-=n;
      queen.position.y+=n;
    }
    else if(queen.direction=="SE"){
      queen.position.x+=n;
      queen.position.y-=n;
    }
    else{
      queen.position.x-=n;
      queen.position.y-=n;
      
    }
    queen.whereabouts.push(queen.position);
  
  
  
  }
  jumpMoveForward(7)
  console.log(queen.position)
  
  // Checkpoint 5 |  Tracking the position
  console.log(queen.whereabouts)
  
  