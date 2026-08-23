const prevPage =
    document.getElementById("prev-page");


  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href =
        "Page10.html";

    });

  }








document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("Blink");
    const microphone = document.getElementById("microphone");


    let started = false;
    let fadeInterval = null;


    function fadeIn() {

        if (!audio || started) return;

        started = true;

        audio.currentTime = 0;
        audio.volume = 0;

        const playPromise = audio.play();

        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    let volume = 0;

                    fadeInterval = setInterval(() => {

                        volume += 0.033;

                        if (volume >= 1) {

                            volume = 1;
                            clearInterval(fadeInterval);

                        }

                        audio.volume = volume;

                    }, 100);

                })
                .catch(() => {

                    started = false;

                });

        }

    }


    if (microphone) {

        microphone.addEventListener("click", () => {

            microphone.classList.add("clicked");

            fadeIn();

            microphone.style.cursor = "default";
            microphone.style.pointerEvents = "none";

        }, { once: true });

    }

}); 



document.addEventListener("DOMContentLoaded", () => {

    const tvscene = document.getElementById("tvscene");
    const video = document.getElementById("kocmoc");

    if (!tvscene || !video) return;


    tvscene.addEventListener("click", () => {

        if (tvscene.classList.contains("clicked")) return;


       

        tvscene.classList.add("clicked");


        

        tvscene.classList.add("video-playing");


        video.currentTime = 0;

        video.play().catch(error => {
            console.log("VIDEO ERROR:", error);
        });

    });

});