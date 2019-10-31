// BACKEND LOGIC

// var romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
// var numbers = [1, 5, 10, 50, 100, 500, 1000];

// function romanTranslator(userNumber) {
//   var output = "";
//   numbers.forEach(function(number, i) {
//     if (userNumber === number) {
//       output += romanNumerals[i];
//     } else {
//       return "Nope";
//     };
//   });
//   return output;
// };

function translate(userNumber) {

  var answer = [];

  if (userNumber >= 1000) {
    var remainder1000 = 0;
    var divisibleBy = 0;
    remainder1000 += userNumber % 1000;
    divisibleBy += Math.floor(userNumber / 1000);
    for (i=divisibleBy; i > 0; i-=1) {
      answer.push("M");
    }
  } else {
      remainder1000 = userNumber;
    }

 if (remainder1000 >= 500) {
    var remainder500 = 0;
    var divisibleBy = 0;
    remainder500 += remainder1000 % 500;
    divisibleBy += Math.floor(remainder1000 / 500);
    for (i=divisibleBy; i > 0; i-=1) {
      answer.push("D");
    }
  }
  else {
    remainder500 = remainder1000;
  }

  if (remainder500 >= 100) {
     var remainder100 = 0;
     var divisibleBy = 0;
     remainder100 += remainder500 % 100;
     divisibleBy += Math.floor(remainder500 / 100);
     for (i=divisibleBy; i > 0; i-=1) {
       answer.push("C");
     }
   }
   else {
     remainder100 = remainder500;
   }

   if (remainder100 >= 50) {
      var remainder50 = 0;
      var divisibleBy = 0;
      remainder50 += remainder100 % 50;
      divisibleBy += Math.floor(remainder100 / 50);
      for (i=divisibleBy; i > 0; i-=1) {
        answer.push("L");
      }
    }
    else {
      remainder50 = remainder100;
    }

    if (remainder50 >= 10) {
       var remainder10 = 0;
       var divisibleBy = 0;
       remainder10 += remainder50 % 10;
       divisibleBy += Math.floor(remainder50 / 10);
       for (i=divisibleBy; i > 0; i-=1) {
         answer.push("X");
       }
     }
     else {
       remainder10 = remainder50;
     }

     if (remainder10 >= 5) {
        var remainder5 = 0;
        var divisibleBy = 0;
        remainder5 += remainder10 % 5;
        divisibleBy += Math.floor(remainder10 / 5);
        for (i=divisibleBy; i > 0; i-=1) {
          answer.push("V");
        }
      }
      else {
        remainder5 = remainder10;
      }

      if (remainder5 >= 1) {
         var remainder1 = 0;
         var divisibleBy = 0;
         remainder1 += remainder5 % 1;
         divisibleBy += Math.floor(remainder5 / 1);
         for (i=divisibleBy; i > 0; i-=1) {
           answer.push("I");
         }
       }
       else {
         remainder1 = remainder5;
       }

  return answer.join("");
}

// FRONTEND LOGIC

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("input#userNumber").val());

    if (userNumber > 3999) {
      alert("Halt! Everyone knows Romans don't count past 3,999. Please enter a number less than 3,999.");
      return;
    }

    var output = translate(userNumber);
    $("#numeralOutput").text(output);

  });
});
