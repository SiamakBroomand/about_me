'use strict';

alert('I am alive!!!');
//Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical.
// Or not. It's up to you! It's your project!
//For this stage of the buiiding of this project, DO NOT USE FUNCTIONS! We'll refactor later.
//The questions in the guessing game must require a mix of yes/no answers, and user input must accept //either
// y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input //and accommodate users entering all-caps Y/N or YES/NO answers, too.
//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the
//browser console for each question of the guessing game.
var userresponse1 = prompt ('Does Sam have any cats?').toLowerCase();

//if (condition is true) {
  //do sth;
  //mayebe do something more;
  //etc. untile done;

// } else {
  //do othe thing;
  //and mayebe yet another thing;
//}

if (userresponse1 === 'yes' || userresponse1 === 'y') {
  alert('Yes, Sam has three cats!');
} else if (userresponse1 === 'no' || userresponse1 === 'n'){
  alert('sorry, you are wrong! He has three cats!');
} else {
  alert(' Sorry you have no idea about him!!')
}
