angular.module('angularTest', ['ui.bootstrap'])
.controller('myController', ['$scope', function($scope) {

	$scope.nothingClicked = true;
	$scope.driverNames = [
		{'driverImage':'driver1.jpg',
		 'driverName':'Lee Meng Soon',
		 'carImage':'',
		 'numberPlate':''},
		{'driverImage':'',
		 'driverName':'',
		 'carImage':'car1.png',
		 'numberPlate':'LKK1200F'},
		{'driverImage':'driver1.jpg',
		 'driverName':'Li Nanxing',
		 'carImage':'car1.png',
		 'numberPlate':'SGD1234F'},
		{'driverImage':'driver1.jpg',
 		 'driverName':'Li Yinzhu',
		 'carImage':'',
		 'numberPlate':''},
		{'driverImage':'driver1.jpg',
		 'driverName':'Lee Meng Soon',
		 'carImage':'',
		 'numberPlate':''},
		{'driverImage':'',
		 'driverName':'',
		 'carImage':'car1.png',
		 'numberPlate':'LKK1200F'},
		{'driverImage':'driver1.jpg',
		 'driverName':'Li Nanxing',
		 'carImage':'car1.png',
		 'numberPlate':'SGD1234F'},
		{'driverImage':'driver1.jpg',
		 'driverName':'Li Yinzhu',
		 'carImage':'',
		 'numberPlate':''}	
	];
	$scope.clickMenu = function(name){
		$scope.nothingClicked = false;
		$scope.data = name.driverName + '/' + name.numberPlate;
	}

}])
.directive('dropdown', function() {
  return {
    restrict: 'E',
    templateUrl: 'dropdown.html'
  };
});



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

});
$(function(){
  
  $(".dropdown-menu li a").click(function(){
    
    $(".btn:first-child").text($(this).text());
     $(".btn:first-child").val($(this).text());
  });

});

