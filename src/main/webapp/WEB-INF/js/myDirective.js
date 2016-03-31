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
		template:"<p><b>Requestor Name</b> : <input type=text ng-model=reqName required/></p>"	
	}
}).directive('claimTelephone', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Requestor Telephone</b> : <input type=number ng-model=reqTel required/></p>"	
	}
	
}).directive('claimRequestoremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Requestor Email</b> : <input type=email ng-model=reqEmail required/></p>"	
	}
	
}).directive('claimManageremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Manager Email</b> : <input type=email ng-model=reqManagerEmail required/></p>"	
	}
	
}).directive('claimId', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Claim Id</b> : <input type=text ng-model=reqId required/></p>"	
	}
	
}).directive('claimAmount', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Claim Amount</b> : <input type=number ng-model=reqAmt required/></p>"	
	}
	
}).directive('claimDate', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Request Date</b> : <input type=date ng-model=reqDt required/></p>"	
	}
	
});