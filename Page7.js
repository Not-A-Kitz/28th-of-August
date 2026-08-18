document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("Placebo");
  const K7 = document.getElementById("K7");

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


  if (K7) {

    K7.addEventListener("click", () => {

      K7.classList.add("clicked");

      setTimeout(() => {

        K7.style.display = "none";

        fadeIn();

      }, 250);

    }, { once: true });

  }


  const nextPage =
    document.getElementById("next-page");


  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href =
        "Page8.html";

    });

  }


  const prevPage =
    document.getElementById("prev-page");


  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href =
        "Page6.html";

    });

  }

});