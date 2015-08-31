$(function(){
	
	function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}

	var note = $('#note'),
		note_c = $('#note_c')
		ts = new Date(2015, 9, 6, 0, 0, 0, 0),
		tsconsole = new Date(2015, 8, 1, 6, 0, 0, 0),
		before = true;
		console = true;

	if((new Date()) > tsconsole){
		console = false;
	} 
	
	if((new Date()) > ts){
		before = false;
	}

	if(before) {	
		$('#countdown').countdown({
			timestamp	: ts,
			callback	: function(days, hours, minutes, seconds){

				var message = "";
			
				message += numberWithCommas(days) + " <b>DAY</b>" + ( days==1 ? '':'<b>S</b>' ) + "<br />";
				message += numberWithCommas(hours+days*24) + " <b>HOUR</b>" + ( hours+days*24==1 ? '':'<b>S</b>' ) + "<br />";
				message += numberWithCommas(minutes+hours*60+days*24*60) + " <b>MINUTE</b>" + ( minutes+hours*60+days*24*60==1 ? '':'<b>S</b>' ) + "<br />";
				message += numberWithCommas(seconds+minutes*60+hours*60*60+days*24*60*60) + " <b>SECOND</b>" + ( seconds+minutes*60+hours*60*60+days*24*60*60==1 ? '':'<b>S</b>' ) + "<br />";

				message += "<br />";

				note.html(message);
			}
		});
	}

	else {
		document.getElementById('title').style.display='none';
		var message='<iframe width="853" height="480" src="https://www.youtube.com/embed/6EBuKP-uc94?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
		note.html(message);
	}


	if(console) {	
		$('#countdown_c').countdown({
			timestamp	: tsconsole,
			callback	: function(days, hours, minutes, seconds){

				var message_c = "";
			
				message_c += numberWithCommas(days) + " <b>DAY</b>" + ( days==1 ? '':'<b>S</b>' ) + "<br />";
				message_c += numberWithCommas(hours+days*24) + " <b>HOUR</b>" + ( hours==1 ? '':'<b>S</b>' ) + "<br />";
				message_c += numberWithCommas(minutes+hours*60+days*24*60) + " <b>MINUTE</b>" + ( minutes==1 ? '':'<b>S</b>' ) + "<br />";
				message_c += numberWithCommas(seconds+minutes*60+hours*60*60+days*24*60*60) + " <b>SECOND</b>" + ( seconds==1 ? '':'<b>S</b>' ) + "<br />";

				message_c += "<br />";

				note_c.html(message_c);
			}
		});
	}

	else {
		document.getElementById('console').style.display='none';
		var message_c='<iframe width="853" height="480" src="https://www.youtube.com/embed/6EBuKP-uc94?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
		note_c.html(message_c);
	}

});
