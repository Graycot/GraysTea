// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

// Modified by Gray (GraysTea.neocities.org) Jan. 31, 2022. Compacted into a single file rather than 4. All credit goes to the original OnionRing Creators.

//                                SETTINGS
//  Site list
var sites = [
  'https://vastrecs.neocities.org/',
  'https://windigo.neocities.org/',
  'http://localhost:8080',
  'https://bucketfish.me/',
  'https://graystea.neocities.org/'
  ];
  // ring name
  var ringName = 'Cozy Ring';
  // unique ID
  var ringID = 'CozyRing';
  
  // index page link?
  var useIndex = false;
  //  full URL of the index page
  var indexPage = 'https://graystea.neocities.org/cozyring/memberindex.html';
  
  //  include a random button?
  var useRandom = false;
  

//                                 CSS
var styles = `

#CozyRing * {
display: inline-block;
}

/*  The script tag itself takes up a 0 by 0 pixel space, but it has a BORDER of 2x2 pixels, and is invisible. WHAT THE HELL? */
/*  It also moves to the line below the element, breaking inline-block. This took me 3 hours, THREE HOURS TO SOLVE.  */
#CozyRing script {
  display: ;
  height: ;
  width: ;
}

//note, address this css overriding page css.
#CozyRing table {
  background-color: #f5f5f5; 
  margin: 0rem auto; /* centers the widget */
}



#CozyRing .webring-info {
   text-align:center;
}



`
//  insert CSS into page header
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

//                               WIDGET BUILDER

var tag = document.getElementById(ringID); //find the widget on the page
thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;
// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}
function randomSite() {
  otherSites = sites.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}
//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
  
    <p>Not yet a member of ${ringName}.
    Contact <a href="https://discord.com/invite/JM34yvMaFP">Gray (https://tinyurl.com/CozyRing) </a>

  `);
}
else {
  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  indexText = ""
  //if you've chosen to include an index, this builds the link to that
  if (useIndex) {
    indexText = `<a href='${indexPage}'> ... </a> `;
  }

  randomText = ""
  //if you've chosen to include a random button, this builds the link that does that
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomSite()'> ??? </a>  `;
  }

  //                           widget display
  tag.insertAdjacentHTML('afterbegin', `

      <a href='${sites[previousIndex]}'> < </a>
      ${indexText}
      <a href="https://graystea.neocities.org/CozyRing/CozyRing.html">${ringName}</a>
      ${randomText}
     <a href='${sites[nextIndex]}'> > </a>

  `);

}


