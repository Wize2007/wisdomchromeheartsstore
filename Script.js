

window.onload = function () {
    alert("Welcome to Wisdom ChromeHeart Store! Enjoy shopping with us.");
};



document.addEventListener("DOMContentLoaded", function () {

    const subscribeButton = document.querySelector(".newsletter button");
    const emailInput = document.querySelector(".newsletter input");

    if (subscribeButton) {

        subscribeButton.addEventListener("click", function () {

            if (emailInput.value === "") {
                alert("Please enter your email address.");
            } else {
                alert("Thank you for subscribing!");
                emailInput.value = "";
            }

        });

    }

});


const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "15px";
topButton.style.fontSize = "18px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "black";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

topButton.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



const darkButton = document.createElement("button");

darkButton.innerHTML = "🌑";

document.body.appendChild(darkButton);

darkButton.style.position = "fixed";
darkButton.style.bottom = "80px";
darkButton.style.right = "20px";
darkButton.style.padding = "15px";
darkButton.style.border = "none";
darkButton.style.borderRadius = "50%";
darkButton.style.cursor = "pointer";

let darkMode = false;

darkButton.onclick = function () {

    if (!darkMode) {

        document.body.style.background = "#111";
        document.body.style.color = "white";

        darkMode = true;

    } else {

        document.body.style.background = "white";
        document.body.style.color = "#222";

        darkMode = false;

    }

};



document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert("Product added to cart successfully!");

        });

    });

});



const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "90px";
clock.style.right = "20px";
clock.style.background = "black";
clock.style.color = "white";
clock.style.padding = "10px";
clock.style.borderRadius = "8px";

document.body.appendChild(clock);

setInterval(function () {

    const today = new Date();

    clock.innerHTML = today.toLocaleString();

}, 1000);

// ==========================================
// Wisdom ChromeHeart Store
// script.js
// ==========================================

// Welcome Message
window.addEventListener("load", function () {
alert("Welcome to Wisdom ChromeHeart Store! Enjoy premium fashion and exclusive offers.");
});

// ==========================================
// Newsletter Subscription
// ==========================================
const subscribeBtn = document.querySelector(".newsletter button");
const emailInput = document.querySelector(".newsletter input");

if (subscribeBtn && emailInput) {
subscribeBtn.addEventListener("click", function () {

```
    if (emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        return;
    }

    alert("Thank you for subscribing to our newsletter!");
    emailInput.value = "";
});
```

}

// ==========================================
// Contact Form Validation
// ==========================================
const contactForm = document.querySelector("form");

if (contactForm) {

```
contactForm.addEventListener("submit", function (e) {

    const inputs = contactForm.querySelectorAll("input, textarea");

    for (let input of inputs) {

        if (input.value.trim() === "") {

            alert("Please fill in all fields.");

            e.preventDefault();

            return;

        }

    }

    alert("Your message has been sent successfully!");

});
```

}

// ==========================================
// Add To Cart Simulation
// ==========================================
let cart = 0;

const cartButtons = document.querySelectorAll(".card button");

cartButtons.forEach(function(button){

```
button.addEventListener("click", function(){

    cart++;

    alert("Product added to cart!\nItems in Cart: " + cart);

});
```

});

// ==========================================
// Back To Top Button
// ==========================================
const topButton = document.createElement("button");

topButton.innerHTML = "🔝";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 15px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "black";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

window.addEventListener("scroll", function(){

```
if(window.scrollY > 300){

    topButton.style.display="block";

}else{

    topButton.style.display="none";

}
```

});

topButton.onclick = function(){

```
window.scrollTo({

    top:0,

    behavior:"smooth"

});
```

};

// ==========================================
// Dark Mode
// ==========================================
const darkBtn = document.createElement("button");

darkBtn.innerHTML="🌑";

document.body.appendChild(darkBtn);

darkBtn.style.position="fixed";
darkBtn.style.bottom="80px";
darkBtn.style.right="20px";
darkBtn.style.padding="12px";
darkBtn.style.borderRadius="50%";
darkBtn.style.cursor="pointer";

let dark=false;

darkBtn.onclick=function(){

```
if(!dark){

    document.body.style.background="#111";
    document.body.style.color="white";

    dark=true;

}

else{

    document.body.style.background="white";
    document.body.style.color="#222";

    dark=false;

}
```

};

// ==========================================
// Live Date & Time
// ==========================================
const clock=document.createElement("div");

clock.style.position="fixed";
clock.style.top="90px";
clock.style.right="20px";
clock.style.background="black";
clock.style.color="white";
clock.style.padding="10px";
clock.style.borderRadius="8px";

document.body.appendChild(clock);

setInterval(function(){

clock.innerHTML=new Date().toLocaleString();

},1000);

// ==========================================
// Product Search
// (Requires an input with id="search")
// ==========================================
const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

let filter=search.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

let text=card.innerText.toLowerCase();

card.style.display=text.includes(filter)?"block":"none";

});

});

}

// ==========================================
// Simple Image Slider
// (Requires images with class="slide")
// ==========================================
let slides=document.querySelectorAll(".slide");

let current=0;

if(slides.length>0){

slides[current].style.display="block";

setInterval(function(){

slides[current].style.display="none";

current++;

if(current>=slides.length){

current=0;

}

slides[current].style.display="block";

},3000);

}

// ==========================================
// Current Year in Footer
// ==========================================
const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
