
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

function iOS() {
	return [
	  'iPad Simulator',
	  'iPhone Simulator',
	  'iPod Simulator',
	  'iPad',
	  'iPhone',
	  'iPod'
	].includes(navigator.platform)
	// iPad on iOS 13 detection
	|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  };

  function backgroundSelect() {
	  if ( iOS() ) {
		  document.getElementById("ios-gallery-background").style.display = 'block';
	  }
	  else{
		document.getElementById("ios-gallery-background").style.display = 'none';
	  }
  }  