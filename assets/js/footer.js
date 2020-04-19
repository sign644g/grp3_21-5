let footer = document.createElement("footer");
let kontakt = document.createElement("h3");
kontakt.textContent = "Kontakt os";
let mail = document.createElement("p");
mail.textContent = "Mail: info@21-5.dk";
let tlf = document.createElement("p");
tlf.textContent = "Telefon: +45 70 26 11 55";
let facebook = document.createElement("a");
let facebook_img = document.createElement("img");
facebook_img.src = "assets/img/fb.svg";
facebook_img.alt = "Facebook icon";
facebook.appendChild(facebook_img);
let insta = document.createElement("a");
let insta_img = document.createElement("img");
insta_img.src = "assets/img/insta.svg";
insta_img.alt = "instagram icon";
insta.appendChild(insta_img);
let input_wrap = document.createElement("div");
input_wrap.id = "input_wrap"
let nyhed = document.createElement("h3");
nyhed.textContent = "Tilmeld dig vores nyhedsbrev!";
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Din mail...");
let tilmeld = document.createElement("button");
tilmeld.textContent = "Tilmeld";
input_wrap.appendChild(nyhed);
input_wrap.appendChild(input);
input_wrap.appendChild(tilmeld);
let AS_21_5 = document.createElement("p");
AS_21_5.textContent = "21-5 A/S, Rungstedvej 41, 2970 Hørsholm, Danmark.";
let CVR = document.createElement("p");
CVR.textContent = "CVR: 33084862";
let copyright = document.createElement("p");
copyright.textContent = "Copyright © 2010-2020";
footer.appendChild(kontakt);
footer.appendChild(mail);
footer.appendChild(tlf);
footer.appendChild(facebook);
footer.appendChild(insta);
footer.appendChild(input_wrap);
footer.appendChild(AS_21_5);
footer.appendChild(CVR);
footer.appendChild(copyright);
document.querySelector("main").appendChild(footer);