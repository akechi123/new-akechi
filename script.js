document.getElementById("parfait-image").addEventListener("click", function() {
    let container = document.querySelector(".image-placeholder");


    let popup = document.createElement("span");
    popup.classList.add("popup-text");
    popup.innerText = "🍨🍨🍨";


    popup.style.position = "absolute";
    popup.style.left = "50%";
    popup.style.top = "0";
    popup.style.transform = "translate(-50%, 0%)"; 
    popup.style.opacity = "1";

    container.appendChild(popup);


    setTimeout(() => {
        popup.style.transform = "translate(-50%, -100%)"; 
        popup.style.opacity = "0";
    }, 10); 

   
    setTimeout(() => {
        popup.remove();
    }, 600); 
});

function checkImageInView() {
    let image = document.getElementById('bounceImage');
    let rect = image.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        image.classList.add('show-grow');
        window.removeEventListener('scroll', checkImageInView);
    }
}

window.addEventListener('scroll', checkImageInView);

function postMessage(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let messageInput = document.getElementById("messageInput").value.trim();
    let chatbox = document.getElementById("chatbox");

    console.log('Username:', username);
    console.log('Message:', messageInput);

    if (username !== "" && messageInput !== "") {
        let message = document.createElement("p");
        message.textContent = `${username}: ${messageInput}`;
        chatbox.appendChild(message);

        document.getElementById("username").value = "";
        document.getElementById("messageInput").value = "";
        chatbox.scrollTop = chatbox.scrollHeight;
    } else {
        console.log('Please enter both a username and a message');
    }
}

var colour="#fceaff"; 
var sparkles=50;


// NOTE: everything above this was written by me, everything below this is a free resource I got from a website. It makes the sparkles fall from the cursor.

/****************************
*  Tinkerbell Magic Sparkle *
*(c)2005-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i=0; i<sparkles; i++) {
        var rats=createDiv(3, 3);
        rats.style.visibility="hidden";
        rats.style.zIndex="999";
        document.body.appendChild(tiny[i]=rats);
        starv[i]=0;
        tinyv[i]=0;
        var rats=createDiv(5, 5);
        rats.style.backgroundColor="transparent";
        rats.style.visibility="hidden";
        rats.style.zIndex="999";
        var rlef=createDiv(1, 5);
        var rdow=createDiv(5, 1);
        rats.appendChild(rlef);
        rats.appendChild(rdow);
        rlef.style.top="2px";
        rlef.style.left="0px";
        rdow.style.top="0px";
        rdow.style.left="2px";
        document.body.appendChild(star[i]=rats);
    }
    set_width();
    sparkle();
}}

function sparkle() {
    var c;
    if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
        ox=x;
        oy=y;
        for (c=0; c<sparkles; c++) if (!starv[c]) {
            star[c].style.left=(starx[c]=x)+"px";
            star[c].style.top=(stary[c]=y+1)+"px";
            star[c].style.clip="rect(0px, 5px, 5px, 0px)";
            star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
            star[c].style.visibility="visible";
            starv[c]=50;
            break;
        }
    }
    for (c=0; c<sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
    }
    setTimeout("sparkle()", 40);
}

function update_star(i) {
    if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
        stary[i]+=1+Math.random()*3;
        starx[i]+=(i%5-2)/5;
        if (stary[i]<shigh+sdown) {
            star[i].style.top=stary[i]+"px";
            star[i].style.left=starx[i]+"px";
        }
        else {
            star[i].style.visibility="hidden";
            starv[i]=0;
            return;
        }
    }
    else {
        tinyv[i]=50;
        tiny[i].style.top=(tinyy[i]=stary[i])+"px";
        tiny[i].style.left=(tinyx[i]=starx[i])+"px";
        tiny[i].style.width="2px";
        tiny[i].style.height="2px";
        tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility="hidden";
        tiny[i].style.visibility="visible"
    }
}

function update_tiny(i) {
    if (--tinyv[i]==25) {
        tiny[i].style.width="1px";
        tiny[i].style.height="1px";
    }
    if (tinyv[i]) {
        tinyy[i]+=1+Math.random()*3;
        tinyx[i]+=(i%5-2)/5;
        if (tinyy[i]<shigh+sdown) {
            tiny[i].style.top=tinyy[i]+"px";
            tiny[i].style.left=tinyx[i]+"px";
        }
        else {
            tiny[i].style.visibility="hidden";
            tinyv[i]=0;
            return;
        }
    }
    else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
    if (e) {
        y=e.pageY;
        x=e.pageX;
    }
    else {
        set_scroll();
        y=event.y+sdown;
        x=event.x+sleft;
    }
}

window.onscroll=set_scroll;
function set_scroll() {
    if (typeof(self.pageYOffset)=='number') {
        sdown=self.pageYOffset;
        sleft=self.pageXOffset;
    }
    else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown=document.body.scrollTop;
        sleft=document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft=document.documentElement.scrollLeft;
        sdown=document.documentElement.scrollTop;
    }
    else {
        sdown=0;
        sleft=0;
    }
}

window.onresize=set_width;
function set_width() {
    swide=window.innerWidth;
    shigh=window.innerHeight;
}

function createDiv(height, width) {
    var div=document.createElement("div");
    div.style.position="absolute";
    div.style.height=height+"px";
    div.style.width=width+"px";
    div.style.overflow="hidden";
    return (div);
}

function newColour() {
    return `rgb(255, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*128)})`;
}
// 
