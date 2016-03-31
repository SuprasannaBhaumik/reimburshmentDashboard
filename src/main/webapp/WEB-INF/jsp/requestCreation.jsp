<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html ng-app="myDirectives" ng-controller="validationController as validator">
<head>
<meta charset="utf-8">
<title>Claims form</title>

<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"
	type="text/javascript"></script>


<script type="text/javascript"
	src="https://rawgit.com/SuprasannaBhaumik/reimburshmentDashboard/master/src/main/webapp/WEB-INF/js/myDirective.js"></script>

</head>
<body>
	<my-header heading="Claims Form"></my-header>
	<form name="userForm" ng-submit="submitForm()" novalidate>
	<table>
		<tr>
			<td>
				<claim-requestorname></claim-requestorname>
			</td>
		</tr>
		<tr>
			<td>
				<claim-telephone></claim-telephone>
			</td>
		</tr>
		<tr>
			<td>
				<claim-requestoremail></claim-requestoremail>
			</td>
		</tr>
		<tr>
			<td>
				<claim-manageremail></claim-manageremail>
			</td>
		</tr>
		<tr>
			<td>
				<claim-id ></claim-id>
			</td>
		</tr>	
		<tr>
			<td>
				<claim-amount></claim-amount>
			</td>
		</tr>
		<tr>
			<td>
				<claim-date></claim-date>
			</td>
		</tr>
		
	</table>
	
	<button type="submit" class="btn btn-primary" ng-disabled="userForm.$invalid">Submit</button>
	</form>
</body>
</html>