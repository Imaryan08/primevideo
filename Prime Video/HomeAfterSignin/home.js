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
  
  function subscription(duration){
    console.log(duration)
    if(duration === 'freeSubscription'){
      window.location.href = '/subscription/freeSubscription.html';
    }else if(duration === 'annualSubscription'){
      window.location.href = '/subscription/annualSubscription.html';
    }else if(duration === 'monthlySubscription'){
      window.location.href = '/subscription/monthlySubscription.html';
    }else if(duration === 'quarterlySubscription'){
      window.location.href = '/subscription/quarterlySubscription.html';
    }

  }

var userName = JSON.parse(localStorage.getItem('userName')) || 'Rampukar';
document.querySelector('#userName').innerText = userName;