angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){
  var trvInfo = mainSrv.travelInfo;
  if ($stateParams.id === '112233') {
    $scope.blah = trvInfo[0];
    $scope.backgrnd = trvInfo[0].image;
    $scope.travelInfo =  trvInfo[0];
  }
  else if ($stateParams.id === '1122343') {
    $scope.blah = trvInfo[1];
    $scope.backgrnd = trvInfo[1].image;
    $scope.travelInfo =  trvInfo[1];
  }
  else if ($stateParams.id === '11223489'){
    $scope.blah = trvInfo[2];
    $scope.backgrnd = trvInfo[2].image;
    $scope.travelInfo =  trvInfo[2];
  }
});
