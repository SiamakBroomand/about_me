'use strict';

//declare a variable called `rightAnswers` or the like at the top of your JS and assign it
// a value of 0.

//Every time a user gets a correct answer, in the same spot where you alert them that they got
//a right answer, add one to that variable.

//After the last question, that variable will hold the number of questions they got right.
//if (user got a right answer) {
  //tell them so;
  //add one to their tally of correct answers;
//} else {
  //tell them they got the wrong answer;
//}
alert('This is all about you!!!');
alert('We are going to answer a series of yes/no questions.')

var rightAnswers = 0;

function question1(){
  var userResponse1 = prompt ('Have you been to school?').toLowerCase();

  if (userResponse1 === 'yes' || userResponse1 === 'y') {
    alert('Seems you are literate :)');
    rightAnswers +=1;
    console.log('user said ' + userResponse1 + ' to this question' );
  } else if (userResponse1 === 'no' || userResponse1 === 'n'){
    alert('Are you telling the truth?!');
  } else {
    alert('Try to answer yes or no next time!')
  }
}
question1();

function question2(){
  var userResponse2 = prompt ('Did you like school?').toLowerCase();

  if (userResponse2 === 'yes' || userResponse2 === 'y'){
    alert('You must have had a lot of fun in there');
    rightAnswers +=1;
  } else if (userResponse2 === 'no' || userResponse2 === 'n'){
    alert('That must have been tough to go to school everyday!');
  } else {
    alert('Think a little more about it.');
  }
}
question2();

function question3(){
  var userResponse3 = prompt ('Do you have enough experience in coding?').toLowerCase();
  if (userResponse3 === 'yes' || userResponse3 === 'y') {
    alert('I hope you are not a beginner!');
    rightAnswers += 1;
  } else if (userResponse3 === 'no' || userResponse3 === 'n') {
    alert('No worries, not everybody knows coding!');
  } else {
    alert('You\'d better think about takign some coding classes.');
  }
}
question3();

function question4(){
  var userResponse4 = prompt ('Are you looking for a valuable job?').toLowerCase();
  if(userResponse4 === 'yes' || userResponse4 === 'y'){
    alert('Bravo, You are among the ones who want a change.');
    rightAnswers +=1;
  } else if (userResponse4 === 'no' || userResponse4 ==='n') {
    alert('Do what you are doing and be on the HOPE PLAN');
    console.log(userResponse4 + ' never works. ');
  } else {
    alert('People are different!!!')
  }
}
question4();

function question5(){
  var userResponse5 = prompt ('Do you consider yourself hardworking and ambitious?').toLowerCase();
  if (userResponse5 === 'yes' || userResponse5 ==='y'){
    alert('You are the right person to make your life.');
    rightAnswers+=1;
  } else if (userResponse5 === 'no' || userResponse5 === 'n'){
    alert('Read some success stories!!');
  } else {
    alert('Be more active!!!');
  }
}
question5();

function question6(){
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
      rightAnswers+=1;
    } else {
      alert (' Your guess is lower than my age!');
    }
  }
}
question6();

function question7 (){
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
      rightAnswers+=1;
      break;
    } else {
      alert('Try again, you are wrong!');
    }
    counter1 += 1;
  }
}
question7();


document.getElementById('response').innerHTML = rightAnswers;
alert('you have ' + rightAnswers + 'correct answers');
