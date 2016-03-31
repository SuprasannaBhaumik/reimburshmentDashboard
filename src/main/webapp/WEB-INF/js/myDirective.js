angular.module('myDirectives',[]).directive('myHeader',function(){
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			scope.renderValue=a.heading;
			console.log("checking:::"+scope.renderValue);
		},
		template:"<h1>{{renderValue}}</h1>"	
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
}).directive('claimRequestorname', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
		},
		template:"<tr><td><b>Requestor Name</b> : <input type=text ng-model=reqName/></td></tr>"	
	}
}).directive('claimTelephone', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<tr><td><b>Requestor Telephone</b> : <input type=text ng-model=reqTel/></td></tr>"	
	}
	
}).directive('claimRequestoremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<tr><td><b>Requestor Email</b> : <input type=text ng-model=reqEmail/></td></tr>"	
	}
	
}).directive('claimManageremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<tr><td><b>Manager Email</b> : <input type=text ng-model=reqManagerEmail/></td></tr>"	
	}
	
}).directive('claimId', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<tr><td><b>Claim Id</b> : <input type=text ng-model=reqId/></td></tr>"	
	}
	
}).directive('claimAmount', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<tr><td><b>Claim Amount</b> : <input type=text ng-model=reqAmt/></td></tr>"	
	}
	
}).directive('claimDate', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<tr><td><b>Request Date</b> : <input type=text ng-model=reqDt/></td></tr>"	
	}
	
});