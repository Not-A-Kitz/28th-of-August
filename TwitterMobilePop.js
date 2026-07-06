const like = document.querySelector(".like");
const completeLike = document.querySelector(".CompleteLike");

let liked = false;

function animate(el) {
  el.style.animation = "none";
  void el.offsetWidth; 
  el.style.animation = "popIn 0.4s ease";
}

like.addEventListener("click", () => {

  liked = true;

  like.style.display = "none";
  completeLike.style.display = "block";

  animate(completeLike);
});

completeLike.addEventListener("click", () => {

  liked = false;

  completeLike.style.display = "none";
  like.style.display = "block";

  animate(like);
});





const trigger = document.querySelector(".reply-trigger");
const video = document.getElementById("reply-video");
const finalImg = document.getElementById("reply-final");
const secret = document.getElementById("secret");

trigger.addEventListener("click", () => {

  video.style.display = "block";
  video.play();

  video.onended = () => {

    // Cache la vidéo et affiche l'image de réponse
    video.style.display = "none";
    finalImg.style.display = "block";

    // Affiche la notification
    setTimeout(() => {

      secret.style.opacity = "1";
      secret.style.animation = "notifBounce 0.6s ease";

      setTimeout(() => {
        secret.style.animation = "";
      }, 600);

      setTimeout(() => {
        secret.style.opacity = "0";
        secret.style.transform = "translateX(-50%) translateY(-20px) scale(0.9)";
      }, 3000);

    }, 300);

    
  setTimeout(() => {
  document.getElementById("new-post").style.display = "block";
}, 2000);

setTimeout(() => {

  const gif = document.getElementById("gif");

  gif.style.display = "block";
  gif.currentTime = 0;
  gif.play();

}, 4000);

  };

});
