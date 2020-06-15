/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

function myAccFunc(elementId) {
    var x = document.getElementById(elementId);
    const showClass = " show";
    if (!x) {
        console.error(elementId + " not found!");
        return;
    }
    if (!x.className.endsWith(showClass)) { // If there is no class "show" in x, then x(id) is shown (see css .show)
        x.className += showClass;
    } else {
        x.className = x.className.slice(0, -showClass.length); // If there is a class "show", it is replaced with nothing, .show is not displayed
    }
}

// Open and close sidebar
function openNavBar() {
    for (var elementId of ["mySidebar", "myOverlay"]) {
        var x = document.getElementById(elementId);
        const showClass = " force-show";
        if (!x) {
            console.error(elementId + " not found!");
            return;
        }
        if (!x.className.endsWith(showClass)) { // If there is no class "force-show" in x, then x(id) is shown (see css .show)
            x.className += showClass;
        }
    }
}

function closeNavBar() {
    for (var elementId of ["mySidebar", "myOverlay"]) {
        var x = document.getElementById(elementId);
        const showClass = " force-show";
        if (!x) {
            console.error(elementId + " not found!");
            return;
        }
        if (x.className.endsWith(showClass)) {
            x.className = x.className.slice(0, -showClass.length); // If there is a class "force-show", it is replaced with nothing, .force-show is not displayed
        }
    }
}

function contactClicked() {
    var x = document.getElementById('contactButton');
    if (x) {
        const showClass = " light-grey";
        if (!x.className.endsWith(showClass)) {  // If there is no class "light-grey" in x, then x(id) is shown (see css .light-grey)
            x.className += showClass;
        }   
    }
}

// https://stackoverflow.com/a/14560718
history.scrollRestoration = 'manual';
window.onscroll = function() {
    var x = document.getElementById('contact');
    var y = document.getElementById('contactButton');
    if (!x || !y) {
        return;
    }
    const showClass = " light-grey";
    if (window.innerHeight >= x.getBoundingClientRect().top 
            && 0.0 <= x.getBoundingClientRect().bottom) {
        if (!y.className.endsWith(showClass)) {
            y.className += showClass;
            history.pushState({}, '', window.location.pathname + y.hash);
        }
    } else {
        if (y.className.endsWith(showClass)) {
            y.className = y.className.slice(0, -showClass.length); // If there is a class "light-grey", it is replaced with nothing, .light-grey is not displayed
            history.pushState({}, '', window.location.pathname);
        }
    }
};


