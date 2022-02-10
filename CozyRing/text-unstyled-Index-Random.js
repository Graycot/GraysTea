// onionring.js is licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24
// Modified by Gray (GraysTea.neocities.org) Jan. 31, 2022. Compacted into a single file rather than 4. Include CSS in the js file. Replaced tables with a more flexible setup.  All credit goes to the original OnionRing Creators.

var ringName = 'Cozy Ring';
var ringID = 'CozyRing';
var useIndex = true;
var indexPage = 'https://graystea.neocities.org/cozyring/memberindex.html';
var useRandom = true;
var styles = `

#CozyRingWrapper {
  display: inline-block;
}

`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
var tag = document.getElementById(ringID);
thisSite = window.location.href;
thisIndex = null;
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break;
  }
}
function randomSite() {
  otherSites = sites.slice(); 
  otherSites.splice(thisIndex, 1);
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
    <div id="CozyRingWrapper">
    <p id="CozyRingError">Not yet a member of ${ringName}.
    Contact <a href="https://discord.com/invite/JM34yvMaFP">Gray (https://tinyurl.com/CozyRing) </a>
    </div>
  `);
}
else {
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;
  indexText = ""
  if (useIndex) {
    indexText = `<a id="CozyRingIndex" href='${indexPage}'> ... </a> `;
  }
  randomText = ""
  if (useRandom) {
    randomText = `<a id="CozyRingRandom" href='javascript:void(0)' onclick='randomSite()'> ? </a>  `;
  }
  tag.insertAdjacentHTML('afterbegin', `
      <div id="CozyRingWrapper">
      <a id="CozyRingPrevious" href='${sites[previousIndex]}'> < </a>
      ${indexText}
      <a id="CozyRingSite" href="https://graystea.neocities.org/content/grays-tea/join-cozy-ring.html">${ringName}</a>
      ${randomText}
     <a id="CozyRingNext" href='${sites[nextIndex]}'> > </a>
     </div>
  `);

}


