<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html ng-app="myModule">
<head>
<meta charset="utf-8">

<script src="http://code.jquery.com/jquery-1.11.0.js"></script>

<script src="http://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>

<link rel="stylesheet" type="text/css"
	href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css" />

<link rel="stylesheet" type="text/css"
	href="http://www.trirand.com/blog/jqgrid/themes/ui.jqgrid.css" />

<!-- <link rel="stylesheet" type="text/css"
	href="http://twitter.github.com/bootstrap/assets/css/bootstrap.css" /> -->
<!-- https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css -->

<script
	src="http://www.trirand.com/blog/jqgrid/js/i18n/grid.locale-en.js"
	type="text/javascript"></script>

<script src="http://www.trirand.com/blog/jqgrid/js/jquery.jqGrid.min.js"
	type="text/javascript"></script>

<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"
	type="text/javascript"></script>

<script
	src="https://rawgit.com/SuprasannaBhaumik/reimburshmentDashboard/master/src/main/webapp/WEB-INF/js/custom.js"></script>
<!-- https://raw.githubusercontent.com/SuprasannaBhaumik/reimburshmentDashboard/master/src/main/webapp/WEB-INF/js/custom.js -->
<!-- https://rawgit.com/SuprasannaBhaumik/reimburshmentDashboard/master/src/main/webapp/WEB-INF/js/custom.js -->

<script type="text/javascript"
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<script type="text/javascript"
	src="https://rawgit.com/SuprasannaBhaumik/reimburshmentDashboard/master/src/main/webapp/WEB-INF/js/gridInit.js"></script>

<style>
body {
	font: 100% "Trebuchet MS", sans-serif;
	margin: 50px;
}
</style>

</head>
<body>

	<%@ include file="header.jsp"%>

	<hr />

	<div ng-controller="PanelController as panel">
		<section class="tab">
			<ul class="nav nav-pills">
				<li ng-class="{active:panel.isSelected(1)}"><a href
					ng-click="panel.selectTab(1)">Employee</a></li>
				<li ng-class="{active:panel.isSelected(2)}"><a href
					ng-click="panel.selectTab(2)">Manager</a></li>
			</ul>
		</section>

		<div class="panel" ng-show="panel.isSelected(1)">
			<div ng-click="panel.setExpander(4,true)">
				<span>{{panel.isExpanderClicked(4)===true?"-":"+"}}</span>Last 5
				transactions
			</div>
			<div ng-show="panel.isExpanderClicked(4)" >
				<table id="last5TransGrid" initdata="${initDataForEmpSubsLastFive}" >
					<tr>
						<td />
					</tr>
				</table>

				<p ng-show="panel.isExpanderClicked(4)" align="right">
					<a style="color: orange; font-size: 11px !important;">Show more</a>
				</p>
			</div>
			<br />
			<div ng-click="panel.setExpander(5,true)">
				<span>{{panel.isExpanderClicked(5)===true?"-":"+"}}</span>Submit New
			</div>
			<div ng-show="panel.isExpanderClicked(5)">
				<a target="_blank" href="/reimburshmentDashboard/reqCreatePage">Link to New
					Window</a>
			</div>
		</div>

		<div class="panel" ng-show="panel.isSelected(2)">
			<div ng-click="panel.setExpander(1,true)">
				<span>{{panel.isExpanderClicked(1)===true?"-":"+"}}</span>Approved
				Request
			</div>
			<div ng-show="panel.isExpanderClicked(1)">jqGridTable with
				approved records</div>

			<br />

			<div ng-click="panel.setExpander(2,true)">
				<span>{{panel.isExpanderClicked(2)===true?"-":"+"}}</span>Pending
				Request
			</div>
			<div ng-show="panel.isExpanderClicked(2)">jqGridTable with
				pending records</div>

			<br />

			<div ng-click="panel.setExpander(3,true)">
				<span>{{panel.isExpanderClicked(3)===true?"-":"+"}}</span>Cancelled
				Request
			</div>
			<div ng-show="panel.isExpanderClicked(3)">
				<p>jqGridTable with cancelled records</p>
				<p ng-show="panel.isExpanderClicked(3)" align="right">
					<a href style="color: orange; font-size: 11px !important;">Show
						more</a>
				</p>
			</div>
		</div>

	</div>
</body>
</html>