function scuberGreetingForFeet(ride){
  // Write your code here!
  let cost;
  if(ride<=400){
    cost = 'This one is on me!'
  }else if(ride > 2000 && ride <= 2500){
    cost ='I will gladly take your thirty bucks.';
  }else if(ride > 2500){
   cost = 'No can do.';
  }
  return cost;
}

function ternaryCheckCity(city){
  // Write your code here!
const validation = city==='NYC'? 'Ok, sounds good.':'No go.';
return validation;
}

function switchOnCharmFromTip(charmfromTip){
  // Write your code here!
switch(charmfromTip){
   case 'generous':
     return 'Thank you so much.';
   case 'not as generous':
     return 'Thank you.';
   default :
     return 'Bye.';
}
}