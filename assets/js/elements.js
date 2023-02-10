var pageListings = document.getElementById('page-listings');


function displayListing (listing) {
  // Main listing container
  var listingBlock = document.createElement('div');
      listingBlock.setAttribute('class', 'block has-background-light rounded p-2');
  
    // Left side / image
    var leftColumn = document.createElement('div');
        leftColumn.setAttribute('class', 'columns');

    var listingImageContainer = document.createElement('div');
        listingImageContainer.setAttribute('class', 'column is-one-third-tablet');
    
    var listingImageFigure = document.createElement('figure');
        listingImageFigure.setAttribute('class', 'image is-16by9');

    var listingImage = document.createElement('img');
        listingImage.setAttribute('src', listing.max_photo_url);
        listingImage.setAttribute('alt', 'Hotel picture');
        listingImage.setAttribute('class', 'listing-link');

        // Append listing block elements
        listingImageFigure.appendChild(listingImage);
        listingImageContainer.appendChild(listingImageFigure);
        leftColumn.appendChild(listingImageContainer);
        listingBlock.appendChild(leftColumn);

        // Append main listing section
        pageListings.appendChild(listingBlock);


    // Right side / content
    


}