var tID;

function stopAnimate() {
	clearInterval(tID);
} // end stopAnimate function

function animateScript() {
	var position = 256;
	const interval = 100;
	const diff = 256;

	tID = setInterval ( () => {


	document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;

if (position < 1536)
	{ position = position + diff;}
 // increment position by 256each time
 else 
 { position = 256; }
// reset position 

}
, interval ); // end of setInerval function

} // end of animateScripr function

