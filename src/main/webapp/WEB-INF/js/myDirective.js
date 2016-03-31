angular.module('myDirectives',[]).directive('myHeader',function(){
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			scope.renderValue=a.heading;
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
		template:"<p><b>Requestor Name</b> : <input ng-model=reqName type=text required  ></input></p>"	
	}
}).directive('claimTelephone', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Requestor Telephone</b> : <input ng-model=reqTel type=number required /></p>"	
	}
	
}).directive('claimRequestoremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Requestor Email</b> : <input ng-model=reqEmail type=email required /></p>"	
	}
	
}).directive('claimManageremail', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Manager Email</b> : <input ng-model=reqManagerEmail type=email required /></p>"	
	}
	
}).directive('claimId', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Claim Id</b> : <input ng-model=reqId type=text required  /></p>"	
	}
	
}).directive('claimAmount', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Claim Amount</b> : <input ng-model=reqAmt type=number  required /></p>"	
	}
	
}).directive('claimDate', function() {
	return{
		scope:{},
		restrict:'E',
		link:function(scope,e,a){
			//scope.renderValue=a.heading;
		},
		template:"<p><b>Request Date</b> : <input ng-model=reqDt type=text required /></p>"	
	}

}).controller('validationController',function($scope){
	$scope.submitForm=function(){
		console.log("entries are ::: ");
		console.log("user name ::: "+$scope.reqName);
		if ($scope.userForm.$valid) {
            alert('our form is amazing');
        }
	}
});



