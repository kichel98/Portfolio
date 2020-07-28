/*jslint browser:true */
const nav = document.getElementsByTagName("nav")[0];

const openNav = function () {
    nav.style.right = "0%";
};

const closeNav = function () {
    nav.style.right = "-75%";
};