function formTable(selector) {
	var wrapper = document.querySelector(selector);
	var form = wrapper.getElementsByTagName("form")[0];
	var table = wrapper.getElementsByTagName("table")[0];

	form.onkeyup = function (ev) {

		var
			dt = form.elements[0].value,
			block = form.elements[1].value,
			day = form.elements[2].value;
		audit = form.elements[3].value;
		group = form.elements[4].value;
		teacher = form.elements[5].value;

		for (var i = 1; i < table.rows.length; i++) {
			table.rows[i].className = "";

			if (
				table.rows[i].cells[0].innerHTML.indexOf(dt) == -1 ||
				table.rows[i].cells[1].innerHTML.indexOf(block) == -1 ||
				table.rows[i].cells[2].innerHTML.indexOf(day) == -1 ||
				table.rows[i].cells[3].innerHTML.indexOf(audit) == -1 ||
				table.rows[i].cells[4].innerHTML.indexOf(group) == -1 ||
				table.rows[i].cells[6].innerHTML.indexOf(teacher) == -1
			) {
				table.rows[i].className = "hide";
			}
		}
	}
}
formTable(".wrapper");

/*...........................*/

