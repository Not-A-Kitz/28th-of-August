document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("GODDESS");
  const trigger = document.getElementById("trigger-2");

  const nextPage = document.getElementById("next-page");
  const prevPage = document.getElementById("prev-page");

  let audioUnlocked = false;
  let triggerReached = false;
  let started = false;



  function unlockAudio() {

    if (audioUnlocked || !audio) return;

   
    audio.volume = 0;

    const playPromise = audio.play();

    if (playPromise !== undefined) {

      playPromise
        .then(() => {

       
          audio.pause();
          audio.currentTime = 0;
          audio.volume = 1;

          audioUnlocked = true;


          if (triggerReached && !started) {

            fadeIn(audio);
            started = true;

          }

        })
        .catch(() => {

        
          audioUnlocked = false;

        });

    }

  }




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




  if (trigger) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;


          triggerReached = true;


     
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

  
  
 
  const video = document.getElementById("videoRonde");
  const playButton = document.getElementById("playVideo");
  const videoMessage = document.querySelector(".video-message");

  let firstPlay = true;

  if (video && playButton && videoMessage) {

    function playVideo() {

      video.play();

      playButton.style.display = "none";

      
      
      
      if (firstPlay) {

        videoMessage.classList.add("bounce");
        firstPlay = false;

      }

    }

    playButton.addEventListener("click", playVideo);

    video.addEventListener("click", () => {

      if (video.paused) {

        playVideo();

      } else {

        video.pause();
        playButton.style.display = "block";

      }

    });

    video.addEventListener("ended", () => {

      playButton.style.display = "block";

    });

  }
  
  });







const canvas = document.getElementById("dust");
const ctx = canvas.getContext("2d");

const message = document.getElementById("dust-message");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;



const dustCanvas = document.createElement("canvas");
const dustCtx = dustCanvas.getContext("2d");

dustCanvas.width = canvas.width;
dustCanvas.height = canvas.height;



dustCtx.fillStyle = "rgba(120,120,120,0.85)";
dustCtx.fillRect(0, 0, dustCanvas.width, dustCanvas.height);



for(let i = 0; i < 2500; i++){

    const x = Math.random() * dustCanvas.width;
    const y = Math.random() * dustCanvas.height;

    const size = Math.random() * 20 + 5;

    const opacity = Math.random() * 0.25;

    dustCtx.fillStyle = `rgba(180,180,180,${opacity})`;

    dustCtx.beginPath();
    dustCtx.arc(x, y, size, 0, Math.PI * 2);
    dustCtx.fill();

}



ctx.drawImage(dustCanvas,0,0);



ctx.globalCompositeOperation = "destination-out";


function erase(x,y){

    const radius = 46;

 
    const gradient = ctx.createRadialGradient(
        x,y,0,
        x,y,radius
    );

    gradient.addColorStop(0,"rgba(0,0,0,1)");
    gradient.addColorStop(0.7,"rgba(0,0,0,0.6)");
    gradient.addColorStop(1,"rgba(0,0,0,0)");

    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fill();

}



canvas.addEventListener("mousedown", () => {

    if(message){
        message.style.opacity = 0;
    }

});


canvas.addEventListener("mousemove",(e)=>{

    if(e.buttons !== 1) return;

    const rect = canvas.getBoundingClientRect();

    erase(
        e.clientX - rect.left,
        e.clientY - rect.top
    );

});



canvas.addEventListener("touchmove",(e)=>{

    e.preventDefault();

    if(message){
        message.style.opacity = 0;
    }


    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];


    erase(
        touch.clientX - rect.left,
        touch.clientY - rect.top
    );


},{
    passive:false
});






const finalMessage = document.getElementById("final-message");
const finalTrigger = document.getElementById("trigger-text");
const paperBall = document.getElementById("paper-ball");
const paperSheet = document.getElementById("paper-sheet");
const paperFocus = document.getElementById("paper-focus");


if (finalMessage && finalTrigger) {

    const finalObserver = new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (!entry.isIntersecting) return;



            finalMessage.classList.add("show");



            const words = finalMessage.querySelectorAll("span");


            words.forEach((word, index) => {

                word.style.animationDelay = `${index * 0.15}s`;

            });



const paperNotif = document.getElementById("paper-notif");


if (paperBall) {


    setTimeout(() => {


        paperBall.style.display = "block";


        paperBall.classList.add("fall");



      

        setTimeout(() => {

            paperBall.classList.add("clickable");


        }, 1900);




        

        if (paperNotif) {


            setTimeout(() => {


                paperNotif.classList.add("show");



                setTimeout(() => {


                    paperNotif.classList.remove("show");

                    paperNotif.classList.add("hide");


                }, 7000);



            }, 2200);


        }



    }, 6000);





 

    if (paperSheet) {


      paperBall.addEventListener("click", () => {

    paperFocus.classList.add("show");

});
      
paperSheet.addEventListener("click", () => {


    paperFocus.classList.remove("show");


    paperFocus.classList.add("hide");



    setTimeout(() => {


        paperFocus.classList.remove("hide");


    }, 800);


});


    }



}



finalObserver.disconnect();


        });


    }, {

        threshold: 0.3

    });



    finalObserver.observe(finalTrigger);


}