'use strict';

alert('This is all about you!!!');
alert('we are going to answer aseries of yes/no questions.')


var userresponse1 = prompt ('Have you been to school?').toLowerCase();

if (userresponse1 === 'yes' || userresponse1 === 'y') {
  alert('Seems you are literate :)');
} else if (userresponse1 === 'no' || userresponse1 === 'n'){
  alert('Are you telling the truth?!');
} else {
  alert('Try to answer yes or no next time!')
}

var userResponse2 = prompt ('Did you like school?').toLowerCase();

if (userResponse2 === 'yes' || userResponse2 === 'y'){
  alert('You must have had a lot of fun in there');
} else if (userResponse2 === 'no' || userResponse2 === 'n'){
  alert('That must have been tough to go to school everyday!');
} else {
  alert('Think a little more about it.');
}

var userResponse3 = prompt ('Do you have enough experience in coding?').toLowerCase();
if (userResponse3 === 'yes' || userResponse3 === 'y') {
  alert('I hope you are not a beginner!');
} else if (userResponse3 === 'no' || userResponse3 === 'n') {
  alert('No worries, not everybody knows coding!');
} else {
  alert('You\'d better think about takign some coding classes.');
}

var userResponse4 = prompt ('Are you looking for a valuable job?').toLowerCase();
if(userResponse4 === 'yes' || userResponse4 === 'y'){
  alert('Bravo, You are among the ones who want a change.');
} else if (userResponse4 === 'no' || userResponse4 ==='n') {
  alert('Do what you are doing and be on the HOPE PLAN');
  console.log(userResponse4 + ' never works. ');
} else {
  alert('People are different!!!')
}

var userResponse5 = prompt ('Do you consider yourself hardworking and ambitious?').toLowerCase();
if (userResponse5 === 'yes' || userResponse5 ==='y'){
  alert('You are the right person to make your life.');
} else if (userResponse5 === 'no' || userResponse5 === 'n'){
  alert('Read some success stories!!');
} else {
  alert('Be more active!!!');
}




//var response6 = 0;
  //var counter = 0;
  //while (response6 !== 26 && counter < 4){
    //response6 = parseInt(prompt('Q: In how many hours does a chicken lay one egg? \n Hint: It\'s less than 30!\nYou have 4 tries!'));
    //console.log('userName thinks the answer is: ' + response6);
    //counter += 1;
    //if (response6 > 26){
      //alert('Your number it greater than the answer!');
    //} //else if (response6 === 26) {
      //alert('You\'re right, chickens take ' + response6 + ' hours to lay one egg!');
    //} else if (isNaN(response6)) {
      //alert('Hey! Don\'t be a smartass!');
    //} else {
      //alert('Your number is lesser than the answer!');
    //}
  //}
var userResponse6 = 0;
var counter = 0;
while (userResponse6 !== 32 && counter <4){
  userResponse6 = parseInt (prompt ('Q: How old am I? \n Hint: It is between 30 and forty!\n You have 4 tries!'));
  console.log('You think I am ' + userResponse6 + 'years old.');
  counter += 1;
  if (userResponse6 > 32){
    alert ('Your guess is greater than my age!');
  } else if (userResponse6 === 32){
    alert('You are right! I am ' + userResponse6 + 'years old.');
  } else {
    alert (' Your guess is lower than my age!');
  }
}

var language = ['english', 'farsi', 'french', 'italian'];
var counter1 = 0;
var isMatch = false;
while (counter1 < 6) {
  var userResponse7 = prompt(' What languages can I speak?').toLowerCase();
  for (var i = 0; i < language.length; i++){
    console.log('you think I can speak ' + userResponse7 + '!');
    if (userResponse7 === language[i]){
      isMatch = true;
      break;
    }
  }
  if (isMatch === true){
    alert ('You are damn right');
    break;
  } else {
    alert('Try again, you are wrong!');
  }
  counter1 += 1;
}
