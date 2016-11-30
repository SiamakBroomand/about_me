'use strict';

alert('This is all about you!!!');


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
