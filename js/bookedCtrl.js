angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){
  if ($stateParams.id === '112233') {
    $scope.blah = mainSrv.travelInfo[0];
  }
  else if ($stateParams.id === '1122343') {
    $scope.blah = mainSrv.travelInfo[1];
  }
  else if ($stateParams.id === '11223489'){
    $scope.blah = mainSrv.travelInfo[2];
  }
});
