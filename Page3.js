document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("GODDESS");
  const trigger = document.getElementById("trigger-2");

  const nextPage = document.getElementById("next-page");
  const prevPage = document.getElementById("prev-page");

  let started = false;


 

  function fadeIn(audio, duration = 3000) {

    if (!audio) return;


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
            "La lecture automatique de l'audio a été bloquée par le navigateur.",
            error
          );

        });

    }

  }




  if (trigger) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

     
          if (!entry.isIntersecting) return;


    

          if (!started) {

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




  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href = "Page4.html";

    });

  }



  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href = "Page2.html";

    });

  }

});