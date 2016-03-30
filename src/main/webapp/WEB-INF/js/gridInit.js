$.jgrid.no_legacy_api = true;
$.jgrid.useJSON = true;
$(function() {

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

jQuery(document).ready(function($) {

	var updateIdsOfSelectedRows;

	jQuery("#last5TransGrid").jqGrid({
		datatype : "local",
		// data:releaseTrackerJSON,
		colNames : [ 'Request Id', 'Request Status', 'Request Date' ],
		colModel : [ {
			name : 'requestId',
			index : 'requestId',
			width : 60,
			sorttype : "int"
		}, {
			name : 'requestStatus',
			index : 'requestStatus',
			width : 60,
			sortable : false
		}, {
			name : 'requestDate',
			index : 'requestDate',
			width : 60,
			sorttype : "string"
		}, ],
		multiselect : true,
		height : "auto",
		rows : 5,
		width : 625,
		caption: "Employee Last 5 Claims Submitted Status",
		// - " +endDate,
		onSelectRow : function(rowid, status) {
			// updateIdsOfSelectedRows(rowid, status,'First');
		},
		onSelectAll : function(aRowids, status) {
			var i, count, id;
			for (i = 0, count = aRowids.length; i < count; i++) {
				id = aRowids[i];
				// updateIdsOfSelectedRows(id, status);
			}
		}
		
	});

	var newJson = $("#last5TransGrid").attr('initdata');
	var regex = new RegExp("\'", 'g');
	newJson = newJson.replace(regex, '"');
	var change = JSON.parse(newJson);
	
	$("#last5TransGrid").jqGrid('setGridParam', {
		data : change,
		datatype : 'local'
	}).trigger('reloadGrid');
	

	
});