var myApp = angular.module("myModule",[]);


/*myApp.controller("myController",function($scope){
	$scope.message = "my Controller scope message property";
});
*/

myApp.controller("PanelController",function($scope){
	
	this.tab=1;
	this.selectTab = function(selectedTab){
		this.tab = selectedTab;
	}
	this.isSelected=function(tabInQues){
		return this.tab === tabInQues;
	}
	
	this.expander=false;
	this.symbol="+"; 
	this.expanderClicked=function(){
		if(this.expander === true){
			this.expander=false;
			this.symbol="+";
		}else if(this.expander===false){
			this.expander=true;
			this.symbol="-";
		}
	};
	
	
});