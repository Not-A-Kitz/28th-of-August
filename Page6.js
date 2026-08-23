document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("MAPHRA");


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
        "Page7.html";

    });

  }


  const prevPage =
    document.getElementById("prev-page");


  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href =
        "Page4.html";

    });

  }

const jukeboxOff = document.getElementById("jukebox-off");
const jukeboxOn = document.getElementById("jukebox-on");

if (jukeboxOff && jukeboxOn) {

    jukeboxOff.addEventListener("click", () => {

        jukeboxOff.classList.add("clicked");

        setTimeout(() => {

            jukeboxOff.style.display = "none";

            jukeboxOn.style.display = "block";

            fadeIn();

        }, 250);

    }, { once:true });
}
  
});




console.log("JS CHARGÉ");

document.addEventListener("DOMContentLoaded", () => {

    const tv = document.querySelector(".tv");

    const staticNoise = document.getElementById("static");
    const video = document.getElementById("memory-video");
    const black = document.getElementById("screen-black");
    const tvSound = document.getElementById("tv-sound");

    let started = false;


    if (!tv) return;


    tv.addEventListener("click", () => {

        if (started) return;

        started = true;

    
        tv.classList.add("clicked");

        console.log("TV START OK");



        if (tvSound) {

            tvSound.currentTime = 0;
            tvSound.volume = 1;

            tvSound.play().catch(error => {

                console.log("TV SOUND ERROR:", error);

            });

        }


    

      let i = 0;
const max = 14;

const interval = setInterval(() => {

  
    black.style.opacity = "1";

    
    staticNoise.style.opacity = (i % 2 === 0) ? "1" : "0";

    i++;

    if (i > max) {

        clearInterval(interval);

       
        black.style.opacity = "1";

       
        staticNoise.style.opacity = "0";


        
        if (tvSound) {

            tvSound.pause();
            tvSound.currentTime = 0;

        }


       
        if (video) {

            video.style.opacity = "1";
            video.currentTime = 0;

            video.play().catch(error => {

                console.log("VIDEO ERROR:", error);

            });

        }

    }

}, 120);

    });

});
