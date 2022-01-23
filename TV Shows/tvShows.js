         // You may Like
         var userName = JSON.parse(localStorage.getItem('userName')) || 'Ram';
         document.querySelector('#userName').innerText = userName;

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
        // Drama
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
          // Kids
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
          // Throwback
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
                    // Cover Pics
var link = document.querySelectorAll('.carousel-item');
for(var i = 0; i < link.length; i++)
{
  if(i === 0)
  {
    link[i].addEventListener('click',function(){
      window.location.href = 'https://www.primevideo.com/detail/0H3DDB4KBJFNDCKKLHNRLRLVKQ/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08T76677S&qid=1642850258';
      });
  }
  else if(i === 1)
  {
      link[i].addEventListener('click',function(){
      window.location.href = 'https://www.primevideo.com/detail/0OANI8DOBF15C7HWYN1PFW8WB8/ref=atv_hm_hom_1_c_bV3MWc_0sGFql_1_12';
      });
  }
  else if(i === 2)
  {
      link[i].addEventListener('click',function(){

          window.location.href = 'https://www.primevideo.com/detail/0PT5LAVW7XHRXGXI2KB9G6QABQ/ref=atv_tv_hom_1_c_Tx6cTd_3dVDz8_1_9'; 
      });
  }
  else if(i === 3)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0TUVXIO58IUNEPNBF8363Z7YGL/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09PF9T6HX&qid=1642857903'; 
      });
  }
  else if(i === 4)
  {
      link[i].addEventListener('click',function(){
      window.location.href = 'https://www.primevideo.com/detail/0U3073DE9J38JXZ5WLZW5O8MH3/ref=atv_tv_hom_1_c_Tx6cTd_cLstQv_1_2';
      });
  }
  else if(i === 5)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0FBF7DWFYG99Y3TSNVJ4ELOLBO/ref=atv_tv_hom_1_c_oWa4KH_brws_3_1'; 
      });
  }
  else if(i === 6)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0JHM6QAB9RTNCFOWOG2IN8TUY3/ref=atv_tv_hom_1_c_Tx6cTd_vQ6NM0_1_6'; 
      });
  }
  else if(i === 7)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0HJ9F7NMBHJKO5BN5IM83530VO/ref=atv_tv_hom_1_c_oWa4KH_brws_3_3'; 
      });
  }
  else if(i === 8)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0JAAV4S93G7CF868E58BVZEAME/ref=atv_tv_hom_1_c_Tx6cTd_5S0rJd_1_5'; 
      });
  }
}
                  // You may Like
var likes = document.querySelectorAll('.L');
for(var i = 0; i < likes.length; i++)
{
  if(i === 0)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0I1XM2OLB9Y41N90KUJD7OABUN/ref=atv_tv_hom_1_c_r1Fy2u_4_1';
    });
  }
  else if(i === 1)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0KIXRYI0OOWVY1RPTY4Z134WFR/ref=atv_tv_hom_1_c_r1Fy2u_4_3';
    });
  }
  else if(i === 2)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0S3QYI59BAEI5KVLHCKSR91YGD/ref=atv_tv_hom_1_c_Ktj1Ut_2_1'; 
    });
  }
  else if(i === 3)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0G9IEOHCN8KMY6COD9ILGH7IY5/ref=atv_tv_hom_1_c_oWa4KH_brws_3_12'; 
    });
  }
  else if(i === 4)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0SGH7918KG4DSTEVP4NH9HLZ6G/ref=atv_tv_hom_1_c_r1Fy2u_4_7';
    });
  }
  else if(i === 5)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0O71IX5EUTTAYSGMEG6TAM9DYN/ref=atv_tv_hom_1_c_r1Fy2u_5_11'; 
    });
  }
  else if(i === 6)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0FMT1CQKUUZKQ9KVDEIS6I9V7S/ref=atv_tv_hom_1_c_r1Fy2u_5_4'; 
    });
  }
  else if(i === 7)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0GUT4NOIVAFUW3YDBI2TSSHS35/ref=atv_tv_hom_1_c_r1Fy2u_5_8'; 
    });
  }
  else if(i === 8)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0TZXL00XCKTUHFBO67U01EGMCX/ref=atv_tv_r1Fy2u_1_22'; 
    });
  }
}
                  // Drama TV
var dramas = document.querySelectorAll('.D');
for(var i = 0; i < dramas.length; i++)
{
  if(i === 0)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0FBF7DWFYG99Y3TSNVJ4ELOLBO/ref=atv_tv_hom_1_c_oWa4KH_brws_3_1';
    });
  }
  else if(i === 1)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0H3DDB4KBJFNDCKKLHNRLRLVKQ/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08T76677S&qid=1642850258';
    });
  }
  else if(i === 2)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0IR0KJK3V5E5G74K10N186O0B7/ref=atv_tv_oWa4KH_brws_1_23'; 
    });
  }
  else if(i === 3)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0TIXTH4G4FJBGABFDCLUEF1OU7/ref=atv_tv_oWa4KH_brws_1_38'; 
    });
  }
  else if(i === 4)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0HOK2IOF5E6RFUO8LL6L4LAW3W/ref=atv_tv_hom_1_c_oWa4KH_brws_3_8';
    });
  }
  else if(i === 5)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0HBU0DV03Q2R9RLV7NJP5H6CXK/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07MD4JLMM&qid=1642852871'; 
    });
  }
  else if(i === 6)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0JAAV4S93G7CF868E58BVZEAME/ref=atv_tv_hom_1_c_Tx6cTd_5S0rJd_1_5'; 
    });
  }
  else if(i === 7)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0KEP4A6DWRKFYQFTSU5RXHEAN2/ref=atv_tv_oWa4KH_brws_1_22'; 
    });
  }
  else if(i === 8)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0RMNVF1U4KJSQJQGZ029FUN1FN/ref=atv_tv_hom_1_c_oWa4KH_brws_3_11'; 
    });
  }
}
                     //  Amazon original kids
var kids = document.querySelectorAll('.K');
for(var i = 0; i < kids.length; i++)
{
  if(i === 0)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0GD02T4MAIDMK8CLRN1HT2ZHW8/ref=atv_tv_hom_c_eUpBnT_brws_9_1';
    });
  }
  else if(i === 1)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0NTKI8G7N80NWEJMA1GRMXBHY7/ref=atv_tv_hom_c_eUpBnT_brws_9_2';
    });
  }
  else if(i === 2)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0GM91ITQZNXR482JF9FXTQT8GZ/ref=atv_hm_hom_c_eUpBnT_brws_46_1'; 
    });
  }
  else if(i === 3)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0JT9QJ3BTFIO33XC836JB6XJIV/ref=atv_hm_hom_c_eUpBnT_brws_46_2'; 
    });
  }
  else if(i === 4)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0FBEEK0WIMGBXWHSLYNUPKY4KW/ref=atv_hm_hom_c_eUpBnT_brws_46_3';
    });
  }
  else if(i === 5)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0MNL6NMMJG6WQTRXO4UT6G978X/ref=atv_br_def_r_br_c_unkc_1_6'; 
    });
  }
  else if(i === 6)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0R1ACLMAWOVXJZVL2JQ8T3B9G2/ref=atv_br_def_r_br_c_unkc_1_7'; 
    });
  }
  else if(i === 7)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0KRDXXBRK7HVX7UIA271Y08I14/ref=atv_br_def_r_br_c_unkc_1_8'; 
    });
  }
  else if(i === 8)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0S7XEJH05MBMIK43P3SR2AU7X1/ref=atv_br_def_r_br_c_unkc_1_9'; 
    });
  }
}
                      // Throwback TV
var tb = document.querySelectorAll('.T');
for(var i = 0; i < tb.length; i++)
{
  if(i === 0)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0H3A0XW2NW9GL1O2Q3Y0J0MI8Q/ref=atv_hm_hom_c_0dDZWV_brws_72_8';
    });
  }
  else if(i === 1)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0HBTCGAP208OLZ7I2A5DUPFQYG/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07D2X1WGH&qid=1642847096';
    });
  }
  else if(i === 2)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0F72BBX87B1XG7OBEZ1C7JDLPO/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07484GYX7&qid=1642847172'; 
    });
  }
  else if(i === 3)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0IZID3P2H1VSNT4TIG31RTDFYB/ref=atv_tv_hom_c_0dDZWV_brws_10_14'; 
    });
  }
  else if(i === 4)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0KIVO3J0DV7ZDGZWQAYVNQJN34/ref=atv_tv_hom_c_0dDZWV_brws_10_9';
    });
  }
  else if(i === 5)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0FWN0FPZXQTFLFF8DOIJEIUV0C/ref=atv_tv_hom_c_0dDZWV_brws_10_7'; 
    });
  }
  else if(i === 6)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0G51VHYWT2OBH34B7UXCP7FTJ4/ref=atv_br_def_r_br_c_unkc_1_6'; 
    });
  }
  else if(i === 7)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0G9FADHDF6GYCE0N2WF39MG492/ref=atv_br_def_r_br_c_unkc_1_17'; 
    });
  }
  else if(i === 8)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0RNIJ129L3NBZNVJ1E0SUY5LA4/ref=atv_br_def_r_br_c_unkc_1_16'; 
    });
  }
}
