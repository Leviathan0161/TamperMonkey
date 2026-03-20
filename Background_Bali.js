(function() {
    'use strict';

    GM_addStyle
    (`
        .card{
        background-color: rgba(0,0,0,0.3) !important;
        }


       .title{
       color : #ffffff !important;
       }


           #youtube-bg-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }
        #youtube-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            pointer-events: none;
        }
        #blur-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(0px);
        }


     `)


    function injectBackground() {
        const container = document.querySelector(".page-content");



        const YOUTUBE_VIDEO_ID = "IWVJq-4zW24";


        const wrapper = document.createElement("div");

        wrapper.id = "youtube-bg-wrapper";
        wrapper.innerHTML = `
      <iframe
        id="youtube-bg"
        src="https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <div id="blur-overlay"></div>
    `;

        container.insertBefore(wrapper, container.firstChild);
    }





    // Attente de l'élément cible via MutationObserver
   /* const observer = new MutationObserver(() => {
        const container = document.getElementsByClassName("ng-star-inserted");
        if (container) {
            injectBackground();
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });*/
  
    //Attente chargement de la page
    window.onload = injectBackground();



})();
