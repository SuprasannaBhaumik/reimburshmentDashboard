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