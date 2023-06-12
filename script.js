let [milisekunds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".watch .time");
let btnStart = document.getElementById("start");
let btnStop = document.getElementById("stop");
let btnReset = document.getElementById("reset");

let interval = null;

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);

function start() {
	if (interval !== null) {
		clearInterval(interval);
	}

	interval = setInterval(displayTimer, 10);
}

function stop() {
	clearInterval(interval);
}

function reset() {
	clearInterval(interval);
	[milisekunds, seconds, minutes, hours] = [0, 0, 0, 0];
	timeRef.innerText = "00:00:00:000";
}

function displayTimer() {
	milisekunds += 10;
	if (milisekunds == 1000) {
		milisekunds = 0;
		seconds++;
		if (seconds == 60) {
			seconds = 0;
			minutes++;
			if (minutes == 60) {
				minutes = 0;
				hours++;
			}
		}
	}

	let hrs = hours < 10 ? "0" + hours : hours;
	let mins = minutes < 10 ? "0" + minutes : minutes;
	let secs = seconds < 10 ? "0" + seconds : seconds;
	let milis =
		milisekunds < 10
			? "00" + milisekunds
			: milisekunds < 100
			? "0" + milisekunds
			: milisekunds;

	timeRef.innerText = `${hrs}:${mins}:${secs}:${milis}`;
}
