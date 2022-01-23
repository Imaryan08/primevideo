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

                    // Cover Pics
var link = document.querySelectorAll('.carousel-item');
for(var i = 0; i < link.length; i++)
{
  if(i === 0)
  {
    link[i].addEventListener('click',function(){
      window.location.href = 'https://www.primevideo.com/detail/0S7S9MYFI8GFVSEB88SCV8XOL2/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0963WQVF9&qid=1642865862';
      });
  }
  else if(i === 1)
  {
      link[i].addEventListener('click',function(){
      window.location.href = 'https://www.primevideo.com/detail/0QH32UG7NRSFRGZT78NFD6KED7/ref=atv_mv_hom_1_c_SshBeZ_tQUViC_1_2';
      });
  }
  else if(i === 2)
  {
      link[i].addEventListener('click',function(){

          window.location.href = 'https://www.primevideo.com/detail/0GM849EL7XCHGQWP3XACA2Q8QI/ref=atv_mv_hom_1_c_SshBeZ_e9YgYy_1_3'; 
      });
  }
  else if(i === 3)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0J3P7DO2UHT2IGF8UY24C2I94C/ref=atv_mv_hom_1_c_SshBeZ_K8XB5E_1_8'; 
      });
  }
  else if(i === 4)
  {
      link[i].addEventListener('click',function(){
      window.location.href = 'https://www.primevideo.com/detail/0GD02T4MAIDMK8CLRN1HT2ZHW8/ref=atv_mv_hom_1_c_SshBeZ_gFgmSY_1_5';
      });
  }
  else if(i === 5)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0R5OYLLWKBCH8VX5YEUVCQSFEU/ref=atv_mv_hom_1_c_SshBeZ_WEdis5_1_12'; 
      });
  }
  else if(i === 6)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0INGR1HT6OZXBI5GN9BL9JTF6S/ref=atv_mv_hom_1_c_SshBeZ_3kX5vK_1_7'; 
      });
  }
  else if(i === 7)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0IVAJWJANPV4X1WQNJULSZEB66/ref=atv_mv_hom_1_c_SshBeZ_okzcdM_1_4'; 
      });
  }
  else if(i === 8)
  {
      link[i].addEventListener('click',function(){
          window.location.href = 'https://www.primevideo.com/detail/0HMCGK9NCZLXOF74KZFSD3B1AF/ref=atv_mv_hom_1_c_SshBeZ_AdPSTJ_1_11'; 
      });
  }
}
                  // Recommended
var likes = document.querySelectorAll('.L');
for(var i = 0; i < likes.length; i++)
{
  if(i === 0)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0L8V88NU7CFYRKM857QDN2O5B4/ref=atv_mv_hom_1_c_r1Fy1u_2_26';
    });
  }
  else if(i === 1)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0NPZVHCWFV5VAHMMMZF8BO6OUR/ref=atv_mv_r1Fy1u_1_29';
    });
  }
  else if(i === 2)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0P5G40A88E18YNOZUSRDROBTTN/ref=atv_mv_hom_1_c_r1Fy1u_2_19'; 
    });
  }
  else if(i === 3)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0JCBF5QEUAZ8Q0VCOTFZHSNEOJ/ref=atv_mv_r1Fy1u_1_36'; 
    });
  }
  else if(i === 4)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0JH7B87WL3S6K4CH7F515N3BOE/ref=atv_mv_r1Fy1u_1_40';
    });
  }
  else if(i === 5)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0HMCGK9NCZLXOF74KZFSD3B1AF/ref=atv_mv_hom_1_c_r1Fy1u_2_10'; 
    });
  }
  else if(i === 6)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0T61PEFBHQ9GWXQ6RJ2NB41579/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B073ZMYCLQ&qid=1642866750'; 
    });
  }
  else if(i === 7)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0LAX0XFANPXMFOTVAFV5H0LD1H/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09HNMMSHC&qid=1642866849'; 
    });
  }
  else if(i === 8)
  {
    likes[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0IVA8FFJRSQ0L646NNEJWHOTGJ/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B085NYJN7J&qid=1642866908'; 
    });
  }
}
                  // Drama movies
var dramas = document.querySelectorAll('.D');
for(var i = 0; i < dramas.length; i++)
{
  if(i === 0)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0INGR1HT6OZXBI5GN9BL9JTF6S/ref=atv_mv_hom_c_2eQwSg_brws_8_1';
    });
  }
  else if(i === 1)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0PQIDCRPKKH2EELNOXDPIDDEW0/ref=atv_mv_hom_c_2eQwSg_brws_8_4';
    });
  }
  else if(i === 2)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0JCBF5QEUAZ8Q0VCOTFZHSNEOJ/ref=atv_mv_r1Fy1u_1_36'; 
    });
  }
  else if(i === 3)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0IE81NLJ76SMXNZFNXSO19XWRK/ref=atv_mv_hom_c_2eQwSg_brws_8_9'; 
    });
  }
  else if(i === 4)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0MX5AAZIX0U145KLRJ6HCYRND3/ref=atv_mv_hom_c_2eQwSg_brws_8_10';
    });
  }
  else if(i === 5)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0PHI2T6P8GAK2A02EZKP76Y1QG/ref=atv_mv_hom_c_2eQwSg_brws_8_12'; 
    });
  }
  else if(i === 6)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0SLMN2R18R8XIZ69O4V1D6MJBS/ref=atv_mv_hom_c_2eQwSg_brws_8_13'; 
    });
  }
  else if(i === 7)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0Q7LG009V5WRSP3D8B4IZESWQT/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08ZYFP3H9&qid=1642867291'; 
    });
  }
  else if(i === 8)
  {
    dramas[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0QH32UG7NRSFRGZT78NFD6KED7/ref=atv_mv_hom_1_c_r1Fy1u_2_1'; 
    });
  }
}
                      //  Sci-Fi
var kids = document.querySelectorAll('.K');
for(var i = 0; i < kids.length; i++)
{
  if(i === 0)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0TSH8XUC5MB61IXPHQ9E42SOHN/ref=atv_br_def_r_br_c_unkc_1_1';
    });
  }
  else if(i === 1)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0M66XYQ9F132SGDS3548OPSKRR/ref=atv_br_def_r_br_c_unkc_1_4';
    });
  }
  else if(i === 2)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0TZVVH2RSQD0SA85R3EFS7R3V6/ref=atv_br_def_r_br_c_unkc_1_5'; 
    });
  }
  else if(i === 3)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0JGIGZRDFZI6JBPR2XLFQJPHU2/ref=atv_br_def_r_br_c_unkc_1_6'; 
    });
  }
  else if(i === 4)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0JBP0XI6ES6T11A5U4UC7SDEC4/ref=atv_br_def_r_br_c_unkc_1_7';
    });
  }
  else if(i === 5)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0MNMSXF63GQDYGKL8E4HV9BYO2/ref=atv_br_def_r_br_c_unkc_1_8'; 
    });
  }
  else if(i === 6)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0I9WWNH0WX2Q545OV1W8O1SFE1/ref=atv_br_def_r_br_c_unkc_1_9'; 
    });
  }
  else if(i === 7)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0I9W62JMEYIHAM6X9XUKKCCVA9/ref=atv_br_def_r_br_c_unkc_1_10'; 
    });
  }
  else if(i === 8)
  {
    kids[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0LTVOZI56FO4ZEJ8GUM4LPVDDI/ref=atv_br_def_r_br_c_unkc_1_11'; 
    });
  }
}
                      // Comedey movies
var tb = document.querySelectorAll('.T');
for(var i = 0; i < tb.length; i++)
{
  if(i === 0)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0MKS1V6XMXMEJJSWBLE68NNEEL/ref=atv_br_def_r_br_c_unkc_1_1';
    });
  }
  else if(i === 1)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0OBSTJQ3ZBK2ZKFEQ88IY25XKO/ref=atv_br_def_r_br_c_unkc_1_2';
    });
  }
  else if(i === 2)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0OAP855TXSVOPBWL2QOSWL0ULW/ref=atv_br_def_r_br_c_unkc_1_3'; 
    });
  }
  else if(i === 3)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0PHI2T6P8GAK2A02EZKP76Y1QG/ref=atv_br_def_r_br_c_unkc_1_4'; 
    });
  }
  else if(i === 4)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0T48SH2ZZJW6KJAM7J0OZ85WUJ/ref=atv_br_def_r_br_c_unkc_1_5';
    });
  }
  else if(i === 5)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0SLMN2R18R8XIZ69O4V1D6MJBS/ref=atv_br_def_r_br_c_unkc_1_6'; 
    });
  }
  else if(i === 6)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0RBE0W7LKVHWU4FMBYF0ZBW08E/ref=atv_br_def_r_br_c_unkc_1_7'; 
    });
  }
  else if(i === 7)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0HYUAU32E04EN6K0X43AGFVZ07/ref=atv_br_def_r_br_c_unkc_1_8'; 
    });
  }
  else if(i === 8)
  {
    tb[i].addEventListener('click',function(){
    window.location.href = 'https://www.primevideo.com/detail/0K30TVXNM4P9KPENX3E5GX72KA/ref=atv_br_def_r_br_c_unkc_1_9'; 
    });
  }
}
                    
