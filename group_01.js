

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];
var threeStar = .04;
var fourStar = .06;
var fiveStar = .10;
var longevity =.05;
var baller = .01;

// var onePercent = function(x){
//   x = Math.round(.99 * x);
// };
var bonus = function(){
  for (var i = 0; i < employees.length; i++){
    //3 star ratings
    if (employees[i][3] === 3){
      //longevity bonus
      if (employees[i][1] <= 9999){
        //people who make too much
        if (employees[i][2] > 65000){
          var bonusPercent = threeStar-baller+longevity;
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
        else {
          bonusPercent = threeStar+longevity;
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
      }
      else {
        //people who make too much
        if (employees[i][2] > 65000){
          bonusPercent =(threeStar-baller);
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
        else {
          employees[i][3] = Math.round(employees[i][2]*.04);
          bonusPercent = threeStar;
          employees[i][3] = Math.round(employees[i][2]*threeStar);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
      }
    }
    //4 star ratings
    else if (employees[i][3] === 4){
      //longevity bonus
      if (employees[i][1] <= 9999){
        //people who make too much
        if (employees[i][2] > 65000){
          bonusPercent=fourStar+longevity-baller;
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
        else {
          bonusPercent = fourStar+longevity;
          employees[i][3] = Math.round(bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
      }
      else {
        //people who make too much
        if (employees[i][2] > 65000){
          bonusPercent = fourStar-baller;
          employees[i][3] = Math.round(bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
        else {
          bonusPercent = fourStar;
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
      }
    }
    //5 star ratings
    else if (employees[i][3] === 5){
      //longevity bonus
      if (employees[i][1] <= 9999){
        //people who make too much - doesnt matter cap at 13%
          bonusPercent = .13;
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
      else {
        //people who make too much
        if (employees[i][2] > 65000){
          bonusPercent = fiveStar - baller;
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
        else {
          bonusPercent = fiveStar;
          employees[i][3] = Math.round(employees[i][2]*bonusPercent);
          employees[i][1] = ((bonusPercent*100)+"%");
        }
      }
    }
    //people who suck
    else {
      bonusPercent = 0;
      employees[i][3] = bonusPercent;
      employees[i][1] = ((bonusPercent*100)+"%");
    }
  }
};
var payDay = function(){
  for (var i = 0; i < employees.length; i++) {
    employees[i][2]=parseInt(employees[i][2])+parseInt(employees[i][3]);
  }
};





bonus();
payDay();
console.log(employees);
