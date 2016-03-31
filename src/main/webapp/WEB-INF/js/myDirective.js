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
		template:"<p><b>Requestor Name</b> : <input type=text ng-model=reqName/></p>"	
	}
}).directive('claimTelephone', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Requestor Telephone</b> : <input type=text ng-model=reqTel/></p>"	
	}
	
}).directive('claimRequestoremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Requestor Email</b> : <input type=text ng-model=reqEmail/></p>"	
	}
	
}).directive('claimManageremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Manager Email</b> : <input type=text ng-model=reqManagerEmail/></p>"	
	}
	
}).directive('claimId', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Claim Id</b> : <input type=text ng-model=reqId/></p>"	
	}
	
}).directive('claimAmount', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Claim Amount</b> : <input type=text ng-model=reqAmt/></p>"	
	}
	
}).directive('claimDate', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Request Date</b> : <input type=text ng-model=reqDt/></p>"	
	}
	
});