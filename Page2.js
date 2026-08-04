
document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("ALLWOUNDUP");


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



  const nextPage =
    document.getElementById("next-page");


  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href =
        "Page3.html";

    });

  }


  const prevPage =
    document.getElementById("prev-page");


  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href =
        "index.html";

    });

  }

const phoneOff = document.getElementById("phone-off");
const phoneOn = document.getElementById("phone-on");

if (phoneOff && phoneOn) {

    phoneOff.addEventListener("click", () => {

        phoneOff.classList.add("clicked");

        setTimeout(() => {

            phoneOff.style.display = "none";

            phoneOn.style.display = "block";

            fadeIn();

        }, 250);

    }, { once:true });
}
  
});
