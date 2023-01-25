let homeScoreEl = document.getElementById("home");
let guestScoreEl = document.getElementById("guest");
let homeCount = 0;
let guestCount = 0;
homeScoreEl.innerText = homeCount;
guestScoreEl.innerText = guestCount;
console.log(homeScoreEl);

function homeAdd1() {
	homeCount +=1;
	homeScoreEl.innerText = homeCount;
};

function homeAdd2() {
	homeCount +=2;
	homeScoreEl.innerText = homeCount;
};
function homeAdd3() {
	homeCount +=3;
	homeScoreEl.innerText = homeCount;
};

function guestAdd1() {
	guestCount+=1;
	guestScoreEl.innerText = guestCount;
};

function guestAdd2() {
	guestCount+=2;
	guestScoreEl.innerText = guestCount;
};
function guestAdd3() {
	guestCount+=3;
	guestScoreEl.innerText = guestCount;
};