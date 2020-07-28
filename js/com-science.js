/*jslint browser:true */
const adapterImage = document.createElement("img");
adapterImage.src = "images/adapter.png";
adapterImage.style.margin = "auto";
adapterImage.style.width = "100%";


const section = document.getElementsByTagName("section")[0];


setTimeout(function () {
    section.appendChild(adapterImage);
}, 2000);