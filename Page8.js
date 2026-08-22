document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("KoolAid");
  const bottle = document.getElementById("bottle");

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


  if (bottle) {

    bottle.addEventListener("click", () => {

      bottle.classList.add("clicked");

      setTimeout(() => {

        bottle.style.display = "none";

        fadeIn();

      }, 250);

    }, { once: true });

  }

  
  
  
  
const candyContainer = document.getElementById("candy-container");

let candyClicks = 0;

const bites = [


  { x: 8,  y: 43, size: 55 },
  { x: 92, y: 43, size: 55 },

  
  { x: 18, y: 56, size: 55 },
  { x: 82, y: 56, size: 55 },

 
  { x: 40, y: 30, size: 55 },
  { x: 60, y: 30, size: 55 },

  
  { x: 38, y: 84, size: 55 },
  { x: 62, y: 84, size: 55 }

];


function updateBites() {

  const mask = document.getElementById("bite-mask");

  if (!mask) return;

  const numberOfBites =
    Math.min(candyClicks * 2, bites.length);

  
  mask.querySelectorAll(".bite-hole").forEach(hole => {
    hole.remove();
  });


  for (let i = 0; i < numberOfBites; i++) {

    const bite = bites[i];

    const circle =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

    circle.classList.add("bite-hole");

    circle.setAttribute(
      "cx",
      bite.x + "%"
    );

    circle.setAttribute(
      "cy",
      bite.y + "%"
    );

    circle.setAttribute(
      "r",
      bite.size / 2 + "%"
    );

    circle.setAttribute(
      "fill",
      "black"
    );

    mask.appendChild(circle);
  }

}



  
 if (candyContainer) {

  candyContainer.addEventListener("click", () => {

    if (candyClicks >= 4) return;

    candyClicks++;

    if (munch) {

      munch.currentTime = 0;
      munch.volume = 0.7;

      const munchPromise = munch.play();

      if (munchPromise !== undefined) {
        munchPromise.catch(() => {});
      }

    }

    candyContainer.classList.remove("bounce");

    void candyContainer.offsetWidth;

    candyContainer.classList.add("bounce");

    updateBites();

  });

}
  
  
  
  
  
  
  
  
  
  

  const nextPage =
    document.getElementById("next-page");


  if (nextPage) {

    nextPage.addEventListener("click", () => {

      window.location.href =
        "Page9.html";

    });

  }


  const prevPage =
    document.getElementById("prev-page");


  if (prevPage) {

    prevPage.addEventListener("click", () => {

      window.location.href =
        "Page7.html";

    });

  }

});