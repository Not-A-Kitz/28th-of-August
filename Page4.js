document.addEventListener("DOMContentLoaded", () => {

    const twitterButton = document.getElementById("open-twitter");

    if (twitterButton) {

        twitterButton.addEventListener("click", () => {

            const isMobile =
                /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

            if (isMobile) {

                window.location.href = "TwitterMobilePop.html";

            } else {

                window.location.href = "TwitterDesktopPop.html";

            }

        });

    }


    const prevPage = document.getElementById("prev-page");

    if (prevPage) {

        prevPage.addEventListener("click", () => {

            window.location.href = "Page3.html";

        });

    }

});













document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("MOZART");
    const microphone = document.getElementById("accept");


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


    if (accept) {

        accept.addEventListener("click", () => {

            accept.classList.add("clicked");

            fadeIn();

            accept.style.cursor = "default";
            accept.style.pointerEvents = "none";

        }, { once: true });

    }

}); 
