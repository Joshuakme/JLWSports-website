var video = document.getElementById("promotion-video");
//video volume
video.volume = 0.5;

//video play only when visible
function videoVisible(video) {
  var videoTop    = video.getBoundingClientRect().top,
      videoBottom = video.getBoundingClientRect().bottom;

  return videoTop >= -100 && videoBottom <= window.innerHeight - 100;
}

window.addEventListener("scroll", function(){
  if (videoVisible(video)) {
    video.play();
  }
  else {
    video.pause();
  }
})

    //News onclick to other web
    function newsGo1(){
      window.open("https://www.puma.com");
  }

  function newsGo2(){
      window.open("https://www.champion.com");
  }

  function newsGo3(){
      window.open("https://www.nike.com/my/jordan");
  }

  function newsGo4(){
      window.open("https://www.vans.com");
  }

  function newsGo5(){
      window.open("https://www.adidas.com");
  }

  function newsGo6(){
      window.open("https://www.underarmour.com");
  }