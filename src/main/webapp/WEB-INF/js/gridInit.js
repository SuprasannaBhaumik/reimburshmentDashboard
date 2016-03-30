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

	//declaring the grids
	//get first grid to populate with issues occurring in present week
	jQuery("#last5TransGrid").jqGrid({
		datatype : "local",
		data:JSON.parse($("#last5TransGrid").attr('initdata')),
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