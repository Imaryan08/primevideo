var likeController = document.querySelectorAll(".likeController");
  var likePics = document.getElementsByClassName("L");
  var l=0;
  likeController[1].onclick = ()=>{
    l++;
    for(var i of likePics)
    {
      if(l==0) {i.style.left = "0px";}
      if(l==1) {i.style.left = "-740px";}
      if(l==2) {i.style.left = "-1480px";}
      if(l==3) {i.style.left = "-2220px";}
      if(l==4) {i.style.left = "-2960px";}
      if(l>4) {l=4;}
    }
  }
  likeController[0].onclick = ()=>{
    l--;
    for(var i of likePics)
    {
      if(l==0) {i.style.left = "0px";}
      if(l==1) {i.style.left = "-740px";}
      if(l==2) {i.style.left = "-1480px";}
      if(l==3) {i.style.left = "-2220px";}
      if(l<0) {l=0;}
    }
  }

var dramaController = document.querySelectorAll(".dramaController");
  var dramaPics = document.getElementsByClassName("D");
  var d=0;
  dramaController[1].onclick = ()=>{
    d++;
    for(var i of dramaPics)
    {
      if(d==0) {i.style.left = "0px";}
      if(d==1) {i.style.left = "-740px";}
      if(d==2) {i.style.left = "-1480px";}
      if(d==3) {i.style.left = "-2220px";}
      if(d==4) {i.style.left = "-2960px";}
      if(d>4) {d=4;}
    }
  }
  dramaController[0].onclick = ()=>{
    d--;
    for(var i of dramaPics)
    {
      if(d==0) {i.style.left = "0px";}
      if(d==1) {i.style.left = "-740px";}
      if(d==2) {i.style.left = "-1480px";}
      if(d==3) {i.style.left = "-2220px";}
      if(d<0) {d=0;}
    }
  }

var kidController = document.querySelectorAll(".kidController");
  var kidPics = document.getElementsByClassName("K");
  var k=0;
  kidController[1].onclick = ()=>{
    k++;
    for(var i of kidPics)
    {
      if(k==0) {i.style.left = "0px";}
      if(k==1) {i.style.left = "-740px";}
      if(k==2) {i.style.left = "-1480px";}
      if(k==3) {i.style.left = "-2220px";}
      if(k==4) {i.style.left = "-2960px";}
      if(k>4) {k=4;}
    }
  }
  kidController[0].onclick = ()=>{
    k--;
    for(var i of kidPics)
    {
      if(k==0) {i.style.left = "0px";}
      if(k==1) {i.style.left = "-740px";}
      if(k==2) {i.style.left = "-1480px";}
      if(k==3) {i.style.left = "-2220px";}
      if(k<0) {k=0;}
    }
  }

var throwbackController = document.querySelectorAll(".throwbackController");
  var throwbackPics = document.getElementsByClassName("T");
  var t=0;
  throwbackController[1].onclick = ()=>{
    t++;
    for(var i of throwbackPics)
    {
      if(t==0) {i.style.left = "0px";}
      if(t==1) {i.style.left = "-740px";}
      if(t==2) {i.style.left = "-1480px";}
      if(t==3) {i.style.left = "-2220px";}
      if(t==4) {i.style.left = "-2960px";}
      if(t>4) {t=4;}
    }
  }
  throwbackController[0].onclick = ()=>{
    t--;
    for(var i of throwbackPics)
    {
      if(t==0) {i.style.left = "0px";}
      if(t==1) {i.style.left = "-740px";}
      if(t==2) {i.style.left = "-1480px";}
      if(t==3) {i.style.left = "-2220px";}
      if(t<0) {t=0;}
    }
  }