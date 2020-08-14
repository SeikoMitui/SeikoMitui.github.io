
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

  
document.getElementById("translate-to-en").onclick = translateToEn;
document.getElementById("translate-to-ja").onclick = translateToJa;

function translateToEn() {
	window.alert("English");

	document.getElementsByClassName("english").forEach(showElement);
	document.getElementsByClassName("japanese").forEach(hideElement);
}
function translateToJa() {
	window.alert("Japanese");

	document.getElementsByClassName("japanese").forEach(showElement);
	document.getElementsByClassName("english").forEach(hideElement);
}

function hideElement(element) {
	element.display = "none";
}
function showElement(element){
	element.display = "block";
}