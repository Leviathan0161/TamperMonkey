(function() {
    'use strict';

    function lien(){

        function viewerdoc(){


            GM_addStyle
            (`
       /*.mastheader {
       height: 40px !important;
       }*/

       #viewer {
       top : 76px !important;
       }

       .scroll-wrapper{
       height: 100vh !important;
       }
    `)


        const titre = document.querySelector("title").textContent;
        const h1 = document.createElement("h1");
        h1.textContent = titre;

        console.log (h1);

        //SUppresion de la barre
        const barreSup = document.querySelector(".actionbar");
        barreSup.remove();

    }



        // Attente de l'élément cible via MutationObserver
        const observer = new MutationObserver(() => {
            const container = document.getElementsByClassName ("scroll-wrapper");
            if (container) {
                viewerdoc();
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

    }


    //observation mutation URL
    const observer = new MutationObserver(() => {
        const currentUrl = window.location.href;
        if (currentUrl.includes("viewer")){
            lien();
            observer.disconnect();
        }
    });

    observer.observe(document, { subtree: true, childList: true });


})();
