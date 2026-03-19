(function() {
    'use strict';

  function Commentaire(){
      GM_addStyle
    (`
        textarea.form-control {
          height : 120px;
        }

    `)

  }
    

  

window.onload = function() {
    console.log("Page entièrement chargée !");
};
Commentaire();
  
})();
