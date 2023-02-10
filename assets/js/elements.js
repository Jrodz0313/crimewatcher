var pageListings = document.getElementById('page-listings');


function displayListing (listing) {
  //* Main listing container
  var listingBlock = document.createElement('div');
      listingBlock.setAttribute('class', 'box has-background-light rounded p-2');

  //* Main listing columnns
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

          //* Level one 
          var levelOne = document.createElement('div');
              levelOne.setAttribute('class', 'level is-mobile mb-0');
          
              //* Level one left side
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

          //* Level two 
          var levelTwo = document.createElement('div');
              levelTwo.setAttribute('class', 'level is-mobile mb-0');

              //* Level two left side
              var levelTwoLeft = document.createElement('div');
                  levelTwoLeft.setAttribute('class', 'level-left');

              var levelTwoLeftItemOne = document.createElement('div');
                  levelTwoLeftItemOne.setAttribute('class', 'level-item');
              
              var levelTwoLeftItemOneP1 = document.createElement('p');
                  levelTwoLeftItemOneP1.setAttribute('class', 'subtitle is-6');
                  levelTwoLeftItemOneP1.innerHTML = listing.address; 

                  //* Append level two left side elements
                  levelTwoLeftItemOne.appendChild(levelTwoLeftItemOneP1);
                  levelTwoLeft.appendChild(levelTwoLeftItemOne);
                  levelTwo.appendChild(levelTwoLeft)
                  listingContentContainer.appendChild(levelTwo);
              
              //* Level two right side
              var levelTwoRight = document.createElement('div');
                  levelTwoRight.setAttribute('class', 'level-right');

              var levelTwoRightItemOne = document.createElement('div');
                  levelTwoRightItemOne.setAttribute('class', 'level-item');

              var levelTwoRightItemOneP1 = document.createElement('p');
                  levelTwoRightItemOneP1.innerHTML = listing.review_score_word;

                  //* Append level two righ side elements
                  levelTwoRightItemOne.appendChild(levelTwoRightItemOneP1);
                  levelTwoRight.appendChild(levelTwoRightItemOne);
                  levelTwo.appendChild(levelTwoRight)
                  listingContentContainer.appendChild(levelTwo);


        //* Level three 
        var levelThree = document.createElement('div');
            levelThree.setAttribute('class', 'level is-mobile');

            //* Level three left side
            var levelThreeLeft = document.createElement('div');
                levelThreeLeft.setAttribute('class', 'level-left');

            var levelThreeLeftItemOne = document.createElement('div');
                levelThreeLeftItemOne.setAttribute('class', 'level-item');

            var levelThreeLeftItemOneP1 = document.createElement('p');
                levelThreeLeftItemOneP1.setAttribute('class', 'subtitle is-6');
                levelThreeLeftItemOneP1.innerHTML = listing.city; 
            
                //* Append level three left side elements
                levelThreeLeftItemOne.appendChild(levelThreeLeftItemOneP1);
                levelThreeLeft.appendChild(levelThreeLeftItemOne);
                levelThree.appendChild(levelThreeLeft)
                listingContentContainer.appendChild(levelThree);

            //* Level three right side
            var levelThreeRight = document.createElement('div');
                levelThreeRight.setAttribute('class', 'level-right');

            var levelThreeRightItemOne = document.createElement('div');
                levelThreeRightItemOne.setAttribute('class', 'level-item');

            var levelThreeRightItemOneP1 = document.createElement('p');
                levelThreeRightItemOneP1.innerHTML = listing.review_nr + ' reviews'

                //* Append level two righ side elements
                levelThreeRightItemOne.appendChild(levelThreeRightItemOneP1);
                levelThreeRight.appendChild(levelThreeRightItemOne);
                levelThree.appendChild(levelThreeRight)
                listingContentContainer.appendChild(levelThree);


        //* Level four
        var levelFour = document.createElement('div');
            levelFour.setAttribute('class', 'level is-mobile mb-0');

            //* Level four left side
            var levelFourLeft = document.createElement('div');
                levelFourLeft.setAttribute('class', 'level-left');

            var levelFourLeftItemOne = document.createElement('div');
                levelFourLeftItemOne.setAttribute('class', 'level-item');

            var levelFourLeftItemOneP1 = document.createElement('p');
                levelFourLeftItemOneP1.setAttribute('class', 'subtitle is-6');
                levelFourLeftItemOneP1.innerHTML = "Amenities"

                //* Append level four left side elements
                levelFourLeftItemOne.appendChild(levelFourLeftItemOneP1);
                levelFourLeft.appendChild(levelFourLeftItemOne);
                levelFour.appendChild(levelFourLeft)
                listingContentContainer.appendChild(levelFour);


        //* Level five
        var levelFive = document.createElement('div');
            levelFive.setAttribute('class', 'level is-mobile mb-0');

            //* Level five left side
            var levelFiveLeft = document.createElement('div');
                levelFiveLeft.setAttribute('class', 'level-left');

            var levelFiveLeftItemOne = document.createElement('div');
                levelFiveLeftItemOne.setAttribute('class', 'level-item');

            var levelFiveLeftItemOneP1 = document.createElement('p');
                levelFiveLeftItemOneP1.setAttribute('class', 'subtitle is-6');
                
                var amenities = {
                  'free parking': listing.has_free_parking, // 0 or 1
                  'swimming pool': listing.has_swimming_pool,
                  'free breakfast': listing.hotel_include_breakfast,
                  'beach front': listing.is_beach_front,                  
                }

                var amenitiesArray= [];

                /**
                 * Source
                 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
                 */

                for (const property in amenities) {
                  if (amenities[property] === 1) {                    
                    amenitiesArray.push(property);
                  }
                }
                
                if (amenitiesArray.length > 0) {
                  levelFiveLeftItemOneP1.innerHTML = amenitiesArray.join(" | ");
                } else {
                  levelFiveLeftItemOneP1.innerHTML = "N/A"
                }

                //* Append level four left side elements
                levelFiveLeftItemOne.appendChild(levelFiveLeftItemOneP1);
                levelFiveLeft.appendChild(levelFiveLeftItemOne);
                levelFive.appendChild(levelFiveLeft)
                listingContentContainer.appendChild(levelFive);

            //* Level five right side
            var levelFiveRight = document.createElement('div');
                levelFiveRight.setAttribute('class', 'level-right');

            var levelFiveRightItemOne = document.createElement('div');
                levelFiveRightItemOne.setAttribute('class', 'level-item');

            var levelFiveRightItemOneP1 = document.createElement('p');
                levelFiveRightItemOneP1.setAttribute('class', 'subtitle is-6 p-2 has-background-warning rounded has-text-weight-bold');
                levelFiveRightItemOneP1.innerHTML = '$' + listing.price_breakdown.all_inclusive_price;

                //* Append level two righ side elements
                levelFiveRightItemOne.appendChild(levelFiveRightItemOneP1);
                levelFiveRight.appendChild(levelFiveRightItemOne);
                levelFive.appendChild(levelFiveRight)
                listingContentContainer.appendChild(levelFive);


      //* Append listing to section
      pageListings.appendChild(listingBlock);
}


function clearListings () {
  pageListings.innerHTML = ""
}

