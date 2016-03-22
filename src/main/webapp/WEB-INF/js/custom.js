var myApp = angular.module("myModule",[]);


myApp.controller("myController",function($scope){
	$scope.message = "my Controller scope message property";
});


myApp.controller("PanelController",function($scope){
	
	this.tab=1;
	this.selectTab = function(selectedTab){
		this.tab = selectedTab;
	}
	this.isSelected=function(tabInQues){
		return this.tab === tabInQues;
	}
	
	
});