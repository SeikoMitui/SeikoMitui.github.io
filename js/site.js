
/* * * On show bs modal, load correct image * * */
$('#paintingCloseupModal').on('show.bs.modal', function (event) {
	
	var button = $(event.relatedTarget); // Button that triggered the modal
	var imgPreview = button.find('img');
	var srcAttr = imgPreview.attr('src');  // get image's source from the button's preview image
	var altAttr = imgPreview.attr('alt');

	// Print image name on title
	var modal = $(this);
	modal.find('.modal-title').text(altAttr);

	// Set image source on modal
	var modalImage = document.getElementById('paintingCloseupModal-img').src = srcAttr; //faster?
	modalImage.src = srcAttr;
	modalImage.alt = altAttr;
});

// function iOS() {
// 	return [
// 	  'iPad Simulator',
// 	  'iPhone Simulator',
// 	  'iPod Simulator',
// 	  'iPad',
// 	  'iPhone',
// 	  'iPod'
// 	].includes(navigator.platform)
// 	// iPad on iOS 13 detection
// 	|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
//   };

/* * * Choose fullscreen background implementation on loaded * * */


function iOS() {
return true;
};

function backgroundSelect() {
	if ( iOS() ) {
		document.getElementById("ios-gallery-background").style.display = 'block';
	}
	else{
	document.getElementById("ios-gallery-background").style.display = 'none';
	}
};

/* * * Run Language Selection * * */
var language = window.navigator.userLanguage || window.navigator.language;
language = language.toLowerCase();
if ( language.includes("en") ) {
	translateToEn();
}


/* * * Settup button events * * */
let enButtons = document.getElementsByClassName("translate-to-en");
let jaButtons = document.getElementsByClassName("translate-to-ja");

for (let buttonIndex = 0; buttonIndex < enButtons.length; buttonIndex++) {

	const enButton = enButtons[buttonIndex];
	enButton.onclick = translateToEn;

	const jaButton = jaButtons[buttonIndex];
	jaButton.onclick = translateToJa;
}

function translateToEn() {
	var collectionEn = document.getElementsByClassName("show-on-english");
	var collectionJp = document.getElementsByClassName("show-on-japanese");

	showElements(collectionEn);
	hideElements(collectionJp);
}
function translateToJa() {
	var collectionEn = document.getElementsByClassName("show-on-english");
	var collectionJp = document.getElementsByClassName("show-on-japanese");

	showElements(collectionJp);
	hideElements(collectionEn);
}

function hideElements(elements) {
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];
		element.style.display = "none";
	}
}
function showElements(elements){
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];
		element.style.display = "block";
	}
}