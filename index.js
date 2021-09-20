var mysong=document.getElementById("mysong");
var onoff=document.getElementById("onoff");
onoff.onclick=function(){
    if(mysong.paused){
        onoff.style.color="#08fdd8";
        onoff.innerHTML="ON";
        mysong.play();}
    else{
        mysong.pause();
        onoff.style.color="#FD1056";
        onoff.innerHTML="OFF";}}

let hb=document.getElementById("hb");
let ab=document.getElementById("ab");
let sb=document.getElementById("sb");
let cb=document.getElementById("cb");

let cmb=document.getElementById("cmb");

let hb2=document.getElementById("hb2");
let ab2=document.getElementById("ab2");
let sb2=document.getElementById("sb2");
let pb2=document.getElementById("pb2");
let cb2=document.getElementById("cb2");

cmb.onclick=function(){
    cd.style.display="block";
    if(cd.style.display=="block"){
        hd.style.display="none";
        ad.style.display="none";
        sd.style.display="none"; 
    }
}

hb.onclick=function(){
hd.style.display="block";
if(hd.style.display=="block"){
    ad.style.display="none";
    sd.style.display="none";
    cd.style.display="none"; 
    }
}
ab.onclick=function(){
ad.style.display="block";
if(ad.style.display=="block"){
    hd.style.display="none";
    sd.style.display="none";
    cd.style.display="none"; 
    }  
} 
sb.onclick=function(){
    sd.style.display="block";
    if(sd.style.display=="block"){
        hd.style.display="none";
        ad.style.display="none";
        cd.style.display="none"; 
    }
}


cb.onclick=function(){
    cd.style.display="block";
    if(cd.style.display=="block"){
        hd.style.display="none";
        ad.style.display="none";
        sd.style.display="none"; 
    }
}

hb2.onclick=function(){
    hd.style.display="block";
    if(hd.style.display=="block"){
        ad.style.display="none";
        sd.style.display="none";
        cd.style.display="none"; 
        }
    }
ab2.onclick=function(){
ad.style.display="block";
    if(ad.style.display=="block"){
        hd.style.display="none";
        sd.style.display="none";
        cd.style.display="none"; 
        }  
} 
sb2.onclick=function(){
    sd.style.display="block";
        if(sd.style.display=="block"){
            hd.style.display="none";
            ad.style.display="none";
            cd.style.display="none"; 
        }
}

cb2.onclick=function(){
    cd.style.display="block";
        if(cd.style.display=="block"){
            hd.style.display="none";
            ad.style.display="none";
            sd.style.display="none"; 
        }
    }

document.addEventListener('DOMContentLoaded', function() {
    var plsClass = document.getElementsByClassName('pls');
    plsClass[0].style.display="none";
}, false);
      
      
