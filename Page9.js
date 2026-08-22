document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("Lito");

  const roomW = document.getElementById("roomW");
  const roomS = document.getElementById("roomS");

  const windows = document.getElementById("Windows");


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


  if (windows) {

    windows.addEventListener("click", () => {

      windows.classList.add("clicked");


      setTimeout(() => {

        windows.style.display = "none";

        if (roomW) {
          roomW.style.display = "none";
        }

        if (roomS) {
          roomS.style.display = "block";
        }

        fadeIn();

      }, 250);

    }, { once: true });

  }

});







  const nextPage =
    document.getElementById("next-page");


  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href =
        "Page10.html";

    });

  }


  const prevPage =
    document.getElementById("prev-page");


  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href =
        "Page8.html";

    });

  }