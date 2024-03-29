# arithmeticFlashCards
***
https://elegant-raman-8fbfbb.netlify.app/

***
## Description:
This is a mathematics learning game, with a variety of difficulty levels.  It is a web-based game, so no installation is needed.  On a given browser, either one person can keep track of their score in order to "compete" against themselves.  Or, multiple players can take turns, with all of the scores being tracked.  The player can choose their operation, difficulty level, and time.  

## Installation Instructions
This is a purely web-based game.  

## Technologies used:
HTML
CSS
JavaScript

## Attributions
Photo by <a href="https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Liverani</a> on <a href="https://unsplash.com/s/photos/math?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Photo by <a href="https://unsplash.com/@enric_moreu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Enric Moreu</a> on <a href="https://unsplash.com/s/photos/math?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  

## Approach Taken
The build history is below, and shows how the functionality was built up.  The scores are saved using localStorage.

## Missing Capability
ordering the scores from highest to lowest and only keeping the top 10.

## Planned Future Enhancements:
Timed test challenge
Ability to change display
Ability to keep scores for each operation seperately
Ability to clear out scores

## Build History 

In the ninth commit, the score now persists across sessions.

In the eight commit, the focus was on adding the other arithmetic functionality: subtraction, multiplication, and division.

The seventh commit was minor bug fixes.

In the sixth commit, added ability to move to next problem with enter key or mouse click, fixed the reset button functionality: stopped it from reloading the page, which allowed to keep the old values.  Now, in addition session, old scores are displayed with the number correct and the time.  The timing functionality displays the time it took for the player to complete the set of 10 problems.

In the fifth commit, the timed practice functionality was added for the addition operation.  There is a display of how many correct per how many tries for the individual practice session.  With the addition of the timing element, the following functionalities are prioritized: the reset button, enter functionality with the "next problem" button, and having the cursor default to the answer box.

In the fourth commit, the focus was on adding the ability to check the answer using the enter key, in addition to the mouse click.  This will be more important in the timed practice than in the untimed practice

In the third commit, the focus was on checking the user answer, hiding the correct answer from the player, repeating the addition function 10 times, and letting the player know how many correct out of how many attempts.  This is all only within the addition function, and all untimed.  The next addition will be to add the timing element, and then to add in the other functions.  Once the functionality is complete, there will be updates to the formatting.

In the second commit, the focus was on updating the flashCards files: flashcards.html, flashCardScript.js, and flashCardStyle.css.  There is now a form that will accept the user choices for the practice session.  The functionality is also there to display the addition practice problems for each of the levels.

In the first commit, the initial project files were added.  There is a prototype of each page and navigation among the pages.