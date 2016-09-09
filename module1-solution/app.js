(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.displayMessage = function() {
    var numDishes = countNumDishes($scope.dishes);
    if(numDishes > 2){
      $scope.message = "Too much!";
    }else{
      $scope.message = "Enjoy!";
    }

  };

  function countNumDishes(string)
  {
    var count = 0;
    for(var i=0; i<string.length; i++){
      if(string.charAt(i) == ',')
         count++;
    }
    return count;
  }

});


})();
