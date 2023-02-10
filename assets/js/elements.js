var pageListings = document.getElementById('page-listings');


function displayListing (listing) {
  //* Main listing container
  var listingBlock = document.createElement('div');
      listingBlock.setAttribute('class', 'box has-background-light rounded p-2');

  var listingColumns = document.createElement('div');
      listingColumns.setAttribute('class', 'columns');
  
    //* Left side / image
    var listingImageContainer = document.createElement('div');
        listingImageContainer.setAttribute('class', 'column is-one-third-tablet');
    
    var listingImageFigure = document.createElement('figure');
        listingImageFigure.setAttribute('class', 'image is-16by9');

    var listingImage = document.createElement('img');
        listingImage.setAttribute('src', listing.max_photo_url);
        listingImage.setAttribute('alt', 'Hotel picture');

        //* Append listing block elements
        listingImageFigure.appendChild(listingImage);
        listingImageContainer.appendChild(listingImageFigure);
        listingColumns.appendChild(listingImageContainer);
        listingBlock.appendChild(listingColumns);

    
    
    //* Right side / content
    var listingContentContainer = document.createElement('div');
        listingContentContainer.setAttribute('class', 'column is-three-quarter-desktop is-two-third-tablet');



      //* Level one left side
      var levelOne = document.createElement('div');
          levelOne.setAttribute('class', 'level is-mobile mb-0');
      
      var levelOneLeft = document.createElement('div');
          levelOneLeft.setAttribute('class', 'level-left');
      
      var levelOneLeftItemOne = document.createElement('div');
          levelOneLeftItemOne.setAttribute('class', 'level-item');

      var listingName = document.createElement('a');
          listingName.setAttribute('class', 'listingLink is-size-6-mobile is-size-6-tablet is-size-6-desktop has-text-weight-bold');
          listingName.setAttribute('href', listing.url);
          listingName.setAttribute('target', '_blank');          

          listingName.innerHTML = listing.hotel_name;

          //* Append level one left side elements
          levelOneLeftItemOne.appendChild(listingName);
          levelOneLeft.appendChild(levelOneLeftItemOne);
          levelOne.appendChild(levelOneLeft);
          listingContentContainer.appendChild(levelOne);
          listingColumns.appendChild(listingContentContainer);
        
      //* Level one right side
      var levelOneRight = document.createElement('div');
          levelOneRight.setAttribute('class', 'level-right');

      var levelOneRightItemOne = document.createElement('div');
          levelOneRightItemOne.setAttribute('class', 'level-item p-2 has-background-warning rounded');

          levelOneRightItemOne.innerHTML = listing.review_score;

          //* Append level one right side elements
          levelOneRight.appendChild(levelOneRightItemOne);
          levelOne.appendChild(levelOneRight);

      //* Level two left side
      var levelTwo = document.createElement('div');
          levelTwo.setAttribute('class', 'level is-mobile mb-0');

      var levelTwoLeft = document.createElement('div');
          levelTwoLeft.setAttribute('class', 'level-left');

      var levelTwoLeftItemOne = document.createElement('div');
          levelTwoLeftItemOne.setAttribute('class', 'level-item');
      
      var levelTwoLeftItemOneP1 = document.createElement('p');
          levelTwoLeftItemOneP1.setAttribute('class', 'subtitle is-6');
          levelTwoLeftItemOneP1.innerHTML = listing.address + ', ' + listing.city; 

          //* Append level two left side elements
          levelTwoLeftItemOne.appendChild(levelTwoLeftItemOneP1);
          levelTwoLeft.appendChild(levelTwoLeftItemOne)



        //* Append main listing section
        pageListings.appendChild(listingBlock);
}