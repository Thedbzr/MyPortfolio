function showDemo() {
    var x = document.getElementById("demoDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  //use .one to ensure this only happens once
  $("#playvideo").one(function () {
    //as noted in addendum, check for querystring exitence
    var symbol = $("#video1")[0].src.indexOf("?") > -1 ? "&" : "?";
    //modify source to autoplay and start video
    $("#video1")[0].src += symbol + "autoplay=1";
  });
