document.addEventListener("DOMContentLoaded", () => {

    const scene = document.getElementById("music-scene");

    const desktop = document.getElementById("DesktopNeutral");
    const agathaRio = document.getElementById("AgathaRio");

    const phone = document.getElementById("Phone");
    const screen = document.getElementById("Screen");
    const headphones = document.getElementById("Headphones");

    const phoneUp = document.getElementById("PhoneUp");

    const audio = document.getElementById("Kyo");


    

    let musicStarted = false;

    if (headphones) {

        headphones.addEventListener("click", () => {

            if (!audio || musicStarted) return;

            musicStarted = true;

            audio.currentTime = 0;
            audio.volume = 1;

            const playPromise = audio.play();

            if (playPromise !== undefined) {

                playPromise.catch(() => {

                    musicStarted = false;

                });

            }

        });

    }


  

    let screenActive = false;

    if (screen) {

        screen.addEventListener("click", () => {

            if (!desktop || !agathaRio) return;

            if (screenActive) return;

            screenActive = true;

            desktop.style.display = "none";

            agathaRio.style.display = "block";

            agathaRio.currentTime = 0;

            const playPromise = agathaRio.play();

            if (playPromise !== undefined) {

                playPromise.catch(() => {

                    screenActive = false;

                });

            }

        });


   

        if (agathaRio) {

            agathaRio.addEventListener("ended", () => {

                agathaRio.style.display = "none";

                agathaRio.currentTime = 0;

                desktop.style.display = "block";

                screenActive = false;

            });

        }

    }




    let phoneActive = false;
    let phoneClosing = false;


    function closePhone() {

        if (!phoneActive || phoneClosing) return;

        phoneClosing = true;

        scene.classList.remove("phone-focus");

        phoneUp.classList.add("phone-closing");


        setTimeout(() => {

            phoneUp.classList.remove("phone-closing");

            phoneUp.style.display = "none";

            phoneUp.pause();

            phoneUp.currentTime = 0;

            phoneActive = false;
            phoneClosing = false;

        }, 500);

    }


    if (phone) {

        phone.addEventListener("click", (event) => {

            event.stopPropagation();

            if (!scene || !phoneUp) return;

            if (phoneActive) return;

            phoneActive = true;

            phoneUp.style.display = "block";

            scene.classList.add("phone-focus");

            phoneUp.currentTime = 0;


            const playPromise = phoneUp.play();

            if (playPromise !== undefined) {

                playPromise.catch(() => {

                    phoneActive = false;

                    scene.classList.remove("phone-focus");

                    phoneUp.style.display = "none";

                });

            }

        });

    }


   

    if (phoneUp) {

        phoneUp.addEventListener("ended", () => {

            closePhone();

        });

    }




    if (scene) {

        scene.addEventListener("click", (event) => {

            if (!phoneActive) return;

            if (
                event.target === phone ||
                event.target === phoneUp
            ) {
                return;
            }

            closePhone();

        });

    }

});




















const nextPage =
 
      document.getElementById("next-page");


  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href =
        "Page11.html";

    });

  }


  const prevPage =
    document.getElementById("prev-page");


  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href =
        "Page9.html";

    });

  }