//not necessary anymore as we delete the entire main panel
/* const player = document.getElementById('player');
player.style.visibility = "hidden";*/


//delete the player
 const mainpanel = document.getElementById('main-panel');
 mainpanel.remove();

//horizontally centers the sidepanel box 
 const sidepanel = document.getElementsByClassName('side-panel');
 sidepanel[1].style.margin = "0px auto 0px auto";
 //playlist[1].style.margin = "auto";


 //seperate up next, lyrics and related into taking 3 parts of the screen
 // further see if you can add albumart or if video a thumbnail


