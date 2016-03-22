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
	
	this.defaultExpander = [];
	this.defaultExpander.initValue=0;
	this.defaultExpander.flag=true;
	this.setExpander=function(clickedExpander,flag){
		if(this.defaultExpander.flag===flag){
			this.defaultExpander.initValue=clickedExpander;
			this.defaultExpander.symbol="-";
			this.defaultExpander.flag=false;
		}else{
			this.defaultExpander.flag=true;
			this.defaultExpander.symbol="+";
			this.defaultExpander.initValue=0;
		}
	};
	this.isExpanderClicked=function(expVal){
		return this.defaultExpander.initValue===expVal;
	};
	
	
});