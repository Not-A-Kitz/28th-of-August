document.addEventListener("DOMContentLoaded", () => {

  const audio1 = document.getElementById("ALLWOUNDUP");
  const audio2 = document.getElementById("GODDESS");

  const trigger1 = document.getElementById("trigger-1");
  const trigger2 = document.getElementById("trigger-2");

  let state = 0;
  let audioUnlocked = false;


function unlockAudio() {

  if (audioUnlocked) return;

  [audio1, audio2].forEach(audio => {

    audio.volume = 0;

    audio.play()
      .then(() => {

        audio.pause();
        audio.currentTime = 0;

      })
      .catch(() => {});

  });

  audioUnlocked = true;

}


  document.addEventListener("touchstart", unlockAudio, { once: true });
  document.addEventListener("click", unlockAudio, { once: true });





  function stopAudio(audio) {

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0;

  }




  function fadeIn(audio, duration = 3000) {


    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0;


    audio.play().catch(() => {});


    const step = 100 / duration;


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




function fadeOut(audio, duration = 3000) {

  const step = 1 / (duration / 100);

  const fade = setInterval(() => {

    if (audio.volume > 0) {

      audio.volume = Math.max(
        audio.volume - step,
        0
      );

    } else {

      audio.pause();
      audio.currentTime = 0;
      clearInterval(fade);

    }

  }, 100);

}
}






  const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


      if (!entry.isIntersecting) return;



      if (
        entry.target.id === "trigger-1" &&
        state === 0
      ) {


        fadeIn(audio1);

        state = 1;


      }





if (
  entry.target.id === "trigger-2" &&
  state === 1
) {

  fadeOut(audio1, 3000, () => {

    audio2.currentTime = 0;
    audio2.volume = 0;

    fadeIn(audio2);

  });


  state = 2;

}


    });



  }, {

    threshold: 0.3

  });




  if (trigger1) observer.observe(trigger1);
  if (trigger2) observer.observe(trigger2);




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



  const prevPage = document.getElementById("prev-page");


  if (prevPage) {


    prevPage.addEventListener("click", () => {


      window.location.href = "index.html";


    });


  } 



});