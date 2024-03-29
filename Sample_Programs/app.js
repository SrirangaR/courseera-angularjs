(function (){
  'use strict';

  angular.module('myFirstApp',[])
  .controller('myFirstController',function($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
      var totalNameValue = calculateNumericforString($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculateNumericforString(string){
        var totalStringValue = 0;
        for(var i=0;i<string.length;i++){
          totalStringValue += string.charCodeAt(i);
        }
      return totalStringValue;
    };
  });
})();
