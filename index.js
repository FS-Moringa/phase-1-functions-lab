// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if(blocks>42){
        return blocks-42;
    }
    else{
        return 42-blocks;
    }
    
  }

  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
    
  } 
  
  function distanceTravelledInFeet(start, destination) {
      if (start<destination){
          return (destination-start)*264
      } 
      else{
          return (start-destination) *264
      }
    
  }

  function calculatesFarePrice(start, destination) {
      if(distanceTravelledInFeet(start, destination)<=400){
          return 0;
      }
      else if(distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination) <=2000 ){
          return  .02 * (distanceTravelledInFeet(start, destination) - 400);
      }
      else if(distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination) <2500 ){
          return  25;
      }
      else{
          return 'cannot travel that far'
      }
   
  }