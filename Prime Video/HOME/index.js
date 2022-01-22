function signIn() {
  window.location.href = "/SIGN-IN/signin.html";
}

var favChannels = JSON.parse(localStorage.getItem("favChannels"));

favChannels.map(function (elem, index) {
  var div = document.createElement("div");
  div.setAttribute("class", "channelDiv");
  var image = document.createElement("img");
  image.setAttribute("src", elem.img_url);

  div.append(image);
  document.querySelector(".channelBtn").append(div);

  div.addEventListener("click", function () {
    window.location.href = `/channels/channel${index + 1}.html`;
  });
});

