
fcViews.singleRowMonth = SingleRowMonthView;

function SingleRowMonthView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	// imports
	BasicView.call(t, element, calendar, 'singleRowMonth');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;
	
	t.calendar.options.contentHeight = 58;
	t.calendar.options.isSingleRow = true;
	
	function render(date, delta) {
		if (delta) {
			addMonths(date, delta);
			date.setDate(1);
		}
		var start = cloneDate(date, true);
		start.setDate(1);
		var end = addMonths(cloneDate(start), 1);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var firstDay = opt('firstDay');

		t.title = formatDate(start, opt('titleFormat'));
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		renderBasic(1, 1, 31, true);
	}
	
	
}
