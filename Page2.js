document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("ALLWOUNDUP");
  const trigger = document.getElementById("trigger-1");

  let started = false;
  let audioUnlocked = false;



  function unlockAudio() {

    if (audioUnlocked || !audio) return;

    audio.volume = 0;

    audio.play()
      .then(() => {

        audio.pause();
        audio.currentTime = 0;

        audioUnlocked = true;

      })
      .catch(() => {});

  }



  document.addEventListener("touchstart", unlockAudio, { once: true });
  document.addEventListener("click", unlockAudio, { once: true });




  function fadeIn(audio, duration = 3000) {

    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = 0;

    audio.play().catch(() => {});


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

  }




  const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


      if (!entry.isIntersecting) return;



      if (
        entry.target.id === "trigger-1" &&
        !started
      ) {

        fadeIn(audio);

        started = true;

      }


    });


  }, {

    threshold: 0.3

  });



  if (trigger) {
    observer.observe(trigger);
  }




  const twitterButton = document.getElementById("open-twitter");


  if (twitterButton) {

    twitterButton.addEventListener("click", () => {


      const isMobile =
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);



      if (isMobile) {

        window.location.href = "TwitterMobile.html";

      } else {

        window.location.href = "TwitterDesktop.html";

      }


    });

  }




  const nextPage = document.getElementById("next-page");


  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href = "Page3.html";

    });

  }


});