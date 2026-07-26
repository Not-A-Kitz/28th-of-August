document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("GODDESS");
  const trigger = document.getElementById("trigger-2");

  const nextPage = document.getElementById("next-page");
  const prevPage = document.getElementById("prev-page");

  let audioUnlocked = false;
  let triggerReached = false;
  let started = false;


  /*
  ========================================
  DÉVERROUILLAGE DE L'AUDIO
  ========================================
  */

  function unlockAudio() {

    if (audioUnlocked || !audio) return;

    // On met le son à zéro temporairement
    audio.volume = 0;

    const playPromise = audio.play();

    if (playPromise !== undefined) {

      playPromise
        .then(() => {

          // Le navigateur autorise maintenant l'audio
          audio.pause();
          audio.currentTime = 0;
          audio.volume = 1;

          audioUnlocked = true;


          // Si le trigger a déjà été atteint,
          // on lance la musique maintenant
          if (triggerReached && !started) {

            fadeIn(audio);
            started = true;

          }

        })
        .catch(() => {

          // Le navigateur n'a pas autorisé l'audio
          audioUnlocked = false;

        });

    }

  }


  /*
  ========================================
  INTERACTION UTILISATEUR
  ========================================
  */

  document.addEventListener(
    "click",
    unlockAudio,
    { once: true }
  );

  document.addEventListener(
    "touchstart",
    unlockAudio,
    { once: true, passive: true }
  );

  document.addEventListener(
    "keydown",
    unlockAudio,
    { once: true }
  );


  /*
  ========================================
  FADE-IN DE LA MUSIQUE
  ========================================
  */

  function fadeIn(audio, duration = 3000) {

    if (!audio || started) return;


    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0;


    const playPromise = audio.play();


    if (playPromise !== undefined) {

      playPromise
        .then(() => {

          const step = 1 / (duration / 100);


          const fade = setInterval(() => {

            if (audio.volume < 1) {

              audio.volume = Math.min(
                audio.volume + step,
                1
              );

            } else {

              clearInterval(fade);

            }

          }, 100);

        })
        .catch(error => {

          console.log(
            "Impossible de lancer la musique :",
            error
          );

        });

    }

  }


  /*
  ========================================
  TRIGGER DE LA MUSIQUE
  ========================================
  */

  if (trigger) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;


          // Le trigger est visible
          triggerReached = true;


          // Si l'audio est déjà déverrouillé,
          // on peut lancer la musique
          if (
            audioUnlocked &&
            !started
          ) {

            fadeIn(audio);

            started = true;

          }

        });

      },
      {
        threshold: 0.3
      }
    );


    observer.observe(trigger);

  }


  /*
  ========================================
  PAGE SUIVANTE
  ========================================
  */

  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href = "Page4.html";

    });

  }


  /*
  ========================================
  PAGE PRÉCÉDENTE
  ========================================
  */

  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href = "Page2.html";

    });

  }

});