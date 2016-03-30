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
			scope.renderValue=a.user;
		},
		replace:true,
		template:"<p>{{renderValue}}</p>| <a href=&quot;javascript:formSubmit()&quot;> Logout</a>"
	}
	
});