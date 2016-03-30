angular.module('myDirectives',[]).directive('myHeader',function(){
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			scope.renderValue=a.heading;
			console.log("checking:::"+scope.renderValue);
		},
		template:"<h1>{{renderValue}}</h1>"	
		//replace:true,
	}
}).directive('loggedEntity',function(){
	
	return{
		
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			scope.userName=a.user;
		},
		replace:false,
		template:"<p align=right>{{userName}} | <a href=javascript:formSubmit()> Logout</a></p>"
	}
	
});