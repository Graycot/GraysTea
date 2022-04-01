var originalTitle;
var offFocusTitle = "See you later!";

var interval;

document.addEventListener('visibilitychange', event => {
    if(document.hidden) {
        // Document is hidden
        originalTitle = document.title;
        document.title = offFocusTitle;
        
        let swapState = "old";
        interval = setInterval(function () {
            if(swapState == "old") {
                swapState = "new";
                document.title = offFocusTitle;
            }
            else if (swapState == "new") {
                swapState = "old";
                document.title = originalTitle;
            }
        }, 3000);
    } else {
        // Document is not hidden
        document.title = originalTitle;
        clearInterval(interval);
    }
});

/* Swaps title on unfocus without changing back & forth. 

var title;
document.addEventListener('visibilitychange',function(){
 if(document.hidden){
   title=document.title;
   document.title="you are on a different tab";
 }else{
  document.title=title //reset title to normal
}},false);

*/