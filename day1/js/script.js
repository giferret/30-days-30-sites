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

	document.getElementById('countdown').innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
}

countDown();

var submit = document.querySelector('button');
submit.addEventListener('submit', changeText);

function changeText(e) {
	e.preventDefault;
	document.getElementById('book-forms').innerHTML = 'Thanks for Registering!';
}


	
	
var html, body, sttbtn;

	window.onload = function() {
		html = document.documentElement;
		body = document.body;
		sttbtn = document.getElementById('btt');
	}

	window.onscroll = stt;

	function stt() {
		var windowInnerHeightX2 = 2 * innerHeight;
		if (body.scrollTop > windowInnerHeightX2 || html.scrollTop > windowInnerHeightX2) {
			sttbtn.classList.add('show');
		}
		else {
			sttbtn.classList.remove('show');
		}
	}

	function sttop(totalTime, easingPower) {
		var timeInterval = 1;
		var scrollTop = Math.round(body.scrollTop || html.scrollTop);

		var timeLeft = totalTime;
		var scrollByPixel = setInterval(function() {
			var percentSpent = (totalTime - timeLeft) / totalTime;
			if (timeLeft >= 0) {
				var newscroll = scrollTop * (1 - ease(percentSpent, easingPower));

				body.scrollTop = newscroll;
				html.scrollTop = newscroll;
				timeLeft--;
			}

			else {
				clearInterval(scrollByPixel);
			}
		}, timeInterval);
	}

	function ease(t, power) {
		if (t < 0.5) {
			return  0.5 * Math.pow(2 * t, power)
		}

		else {
			return  0.5 * ( 2 - Math.pow(2 * (1 - t), power));
		}
	}
	
	document.getElementById('btt').addEventListener('click', function() {
		sttop(300, 3);
	});
	
