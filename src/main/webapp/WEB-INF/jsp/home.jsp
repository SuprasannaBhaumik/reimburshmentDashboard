<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html ng-app="myModule" >
<head>
<meta charset="utf-8">
<script src="http://code.jquery.com/jquery-1.11.0.js"></script>
<script src="http://code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
<link rel="stylesheet" type="text/css"
	href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css" />
<link rel="stylesheet" type="text/css"
	href="http://www.trirand.com/blog/jqgrid/themes/ui.jqgrid.css" />
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
<style>
body {
	font: 100% "Trebuchet MS", sans-serif;
	margin: 50px;
}
</style>

<script>
	$.jgrid.no_legacy_api = true;
	$.jgrid.useJSON = true;
	$(function() {
		$("#tabs").tabs();

		$(".question").click(function() {
			if ($(this).next(".answer").is(":hidden")) {
				$(this).next(".answer").slideDown("slow");
				$(this).children('span').text('-');
			} else {
				$(this).next(".answer").slideUp("slow");
				$(this).children('span').text('+');
			}
		});

		$("#fromDate").datepicker({
			defaultDate : "+1w",
			changeMonth : true,
			numberOfMonths : 1,
			dateFormat : 'dd/mm/yy',
			onClose : function(selectedDate) {
				$("#to").datepicker("option", "minDate", selectedDate);
			}
		});

		$("#toDate").datepicker({
			defaultDate : "+1w",
			changeMonth : true,
			numberOfMonths : 1,
			dateFormat : 'dd/mm/yy',
			onClose : function(selectedDate) {
				$("#from").datepicker("option", "maxDate", selectedDate);
			}
		});

	});
</script>

<script type="text/javascript">
	jQuery(document).ready(function($) {

		var updateIdsOfSelectedRows;

		//declaring the grids
		//get first grid to populate with issues occuring in present week
		jQuery("#last5TransGrid").jqGrid({
			datatype : "local",
			//data:response_json.dateERPList,
			colNames : [ 'Claim No', 'Claim Date', 'Status' ],
			colModel : [ {
				name : 'Issue',
				index : 'Issue',
				width : 60,
				sorttype : "int"
			}, {
				name : 'Description',
				index : 'Description',
				width : 60,
				sortable : false
			}, {
				name : 'Status',
				index : 'Status',
				width : 60,
				sorttype : "string"
			}, ],
			multiselect : true,
			height : "40%",
			rows : 5,
			width : 625,
			//caption: "Issue Grid : ERPs raised for the time period "+startDate+" - " +endDate,
			onSelectRow : function(rowid, status) {
				//updateIdsOfSelectedRows(rowid, status,'First');
			},
			onSelectAll : function(aRowids, status) {
				var i, count, id;
				for (i = 0, count = aRowids.length; i < count; i++) {
					id = aRowids[i];
					//updateIdsOfSelectedRows(id, status);
				}
			}

		});
	});
</script>

</head>
<body>

	<%@ include file="header.jsp"%>


	<!-- <div id="tabs"
		class="ui-tabs ui-widget ui-widget-content ui-corner-all">
		<ul
			class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
			role="tablist">
			<li
				class="ui-state-default ui-corner-top ui-tabs-active ui-state-active"
				role="tab" tabindex="0" aria-controls="tabs-1"
				aria-labelledby="ui-id-8" aria-selected="true" aria-expanded="true">
				<a href="#tabs-1" class="ui-tabs-anchor" role="presentation"
				tabindex="-1" id="ui-id-8">Employee</a>
			</li>
			<li class="ui-state-default ui-corner-top" role="tab" tabindex="-1"
				aria-controls="tabs-2" aria-labelledby="ui-id-9"
				aria-selected="false" aria-expanded="false"><a href="#tabs-2"
				class="ui-tabs-anchor" role="presentation" tabindex="-1"
				id="ui-id-9">Manager</a></li>
		</ul>
		<div id="tabs-1">
			<div class="question">
				<span>+</span>Last 5 transactions
			</div>
			<div class="answer" style="display: none;">
				<table id="last5TransGrid">
					<tr>
						<td />
					</tr>
				</table>
			</div>
			<br />
			<div class="question">
				<span>+</span>Submit New
			</div>
			<div class="answer" style="display: none;">
				<a target="_blank" href="http://www.google.com">Link to New
					Window</a>
			</div>
		</div>
		<div id="tabs-2">
			<div class="question">
				<span>+</span>Approved Request
			</div>
			<div class="answer" style="display: none;">jqGridTable with
				approved records</div>
			<br />
			<div class="question">
				<span>+</span>Pending Request
			</div>
			<div class="answer" style="display: none;">jqGridTable with
				pending records</div>
			<br />
			<div class="question">
				<span>+</span>Cancelled Request
			</div>
			<div class="answer" style="display: none;">jqGridTable with
				cancelled records</div>
		</div>
	</div> -->
	<!-- <div>
		10 + 20 ::: {{10+20}} <br /> {{ {name:'Suprasanna',age:'30'}.name }}
	</div>
	<b>{{10+20}}</b> -->

	<hr />

<div ng-controller="PanelController as panel">
	<section >
		<ul>
			<li ng-class="{active:panel.isSelected(1)}">
				<a href ng-click="panel.selectTab(1)">Employee</a>
			</li>
			<li ng-class="{active:panel.isSelected(2)}">
				<a href ng-click="panel.selectTab(2)">Manager</a>
			</li>
		</ul>
	</section>

	<div class="panel" ng-show="panel.isSelected(1)">
		<div class="question">
			<span>+</span>Last 5 transactions
		</div>
		<div class="answer" style="display: none;">
			<table id="last5TransGrid">
				<tr>
					<td />
				</tr>
			</table>
		</div>
		<br />
		<div class="question">
			<span>+</span>Submit New
		</div>
		<div class="answer" style="display: none;">
			<a target="_blank" href="http://www.google.com">Link to New
				Window</a>
		</div>
	</div>

	<div class="panel" ng-show="panel.isSelected(2)">
		<div class="question">
			<span>+</span>Approved Request
		</div>
		<div class="answer" style="display: none;">jqGridTable with
			approved records</div>
		<br />
		<div class="question">
			<span>+</span>Pending Request
		</div>
		<div class="answer" style="display: none;">jqGridTable with
			pending records</div>
		<br />
		<div ng-click="panel.expanderClicked()">
			<span>{{panel.symbol}}</span>Cancelled Request
		</div>
		<div ng-show="panel.expander">jqGridTable with
			cancelled records</div>
	</div>

</div>
</body>
</html>