angular.module('title',[]).directive('title',function(){
	return{
		scope:true,
		restrict:'E',
		link:function(scope,e,a){
			scope.renderValue=e.value;
		},
		template:"<h1>{{renderValue}}</h1>"	
	}
});