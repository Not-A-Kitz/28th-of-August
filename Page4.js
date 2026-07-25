document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("MOZART");
  const trigger = document.getElementById("trigger-2");

  let started = false;

  if (!audio || !trigger) {
    return;
  }


  function fadeIn(audio, duration = 3000) {

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
        .catch(() => {

        });

    }

  }


  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        if (
          entry.target === trigger &&
          !started
        ) {

          started = true;

          fadeIn(audio);

        }

      });

    },
    {
      threshold: 0.3
    }
  );


  observer.observe(trigger);


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