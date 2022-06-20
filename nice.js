var elem = document.getElementById('main');
// on elem hover set bg-link to display: block
elem.addEventListener('mouseover', function() {
  // get all bg-link elements
  var bgLinks = document.getElementsByClassName('bg-link');
  // loop through all bg-link elements
  for (var i = 0; i < bgLinks.length; i++) {
    // set display to block
    bgLinks[i].style.display = 'block';
  }

}
);

// on remove hover set bg-link to display: none
elem.addEventListener('mouseout', function() {
  // get all bg-link elements
  var bgLinks = document.getElementsByClassName('bg-link');
  // loop through all bg-link elements
  for (var i = 0; i < bgLinks.length; i++) {
    // set display to none
    bgLinks[i].style.display = 'none';
  }
}
);