angular.module('myDirectives',[]).directive('myHeader',function(){
	return{
		scope:true,
		restrict:'E',
		link:function(scope,e,a){
			scope.renderValue=a.value;
		},
		replace:true,
		template:"<h1>{{renderValue}}</h1>"	
	}
});