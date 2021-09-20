
var read=require("readline-sync");
var score =0;
var username=read.question("what is your name ,please provide the name to proceed further----");
console.log("hi " + username + " Do you know about your friend ,test your friendship here");


function glay(question,answer)
{  var reply=read.question(question);
    if (reply==answer){
  console.log("Your answer is correct")
  score=score+1;

    }
    else {
      console.log("Your answer is wrong")
}
}

glay(`"Whaat is your freind favourite color"  
a:red
b:blue `,`a`
);


console.log(">>>>>>>>>>")

glay(`"Whaat is your freind favourite fruit"  
a:orange
b:Apple `,`b`
);


console.log("Your score is  " +score );


if (score>5)
{console.log ("WOW! you did great ")}
else{

console.log("YOu loose try next time ")
}



