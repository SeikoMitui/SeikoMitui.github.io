const en = "en";
const ja = "ja";
const langKey = "language";


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

let success = loadLanguagePref();
if (!success) {
	// if no language was specified
	var language = window.navigator.userLanguage || window.navigator.language;
	language = language.toLowerCase();
	if ( language.includes("en") ) {
		translateToEn();
	}
}


/* * * Settup button events * * */

let enButtons = document.getElementsByClassName("translate-to-en");
let jaButtons = document.getElementsByClassName("translate-to-ja");

for (let buttonIndex = 0; buttonIndex < enButtons.length; buttonIndex++) {

	const enButton = enButtons[buttonIndex];
	enButton.onclick = translateEn_onClick;

	const jaButton = jaButtons[buttonIndex];
	jaButton.onclick = translateJa_onClick;
}

function translateEn_onClick() {
	translateToEn();
	saveLanguagePref(en);
}
function translateJa_onClick() {
	translateToJa();
	saveLanguagePref(ja);
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

/* * * language preference cookies * * */

function saveLanguagePref(lang){
	setCookie(langKey, lang, 7);
}
function loadLanguagePref(){
	let lang = getCookie(langKey);

	if (lang == en) {
		translateToEn();
	}
	else if (lang == ja) {
		translateToJa();
	}
	else {
		return false;
	}

	return true;
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');

	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}


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