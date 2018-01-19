function getYear() {
	var date = new Date();
	var year = date.getFullYear();
	document.getElementById('year').innerHTML = year;
}

getYear();

function countDown() {
	var weddingDate = new Date("December 1, 2018 10:00:00");
	var now = new Date();
	var timeDiff = weddingDate.getTime() - now.getTime();

	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);

	hours %= 24;
	minutes %= 60
	seconds %= 60;



	setTimeout(countDown, 1000);


	console.log(days);
	console.log(hours);
	console.log(minutes);
	console.log(seconds);
}