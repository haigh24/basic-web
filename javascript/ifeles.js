const time = new Date().getHours();
let greeting;
if ( time < 10) {
    greeting = "Chao buoi sang";
}
else if (time <20) {
 greeting = "Chao buoi toi";
}
else {
    greeting = "chao buoi khuya";
}

document.getElementById( 'dorime' ).innerHTML = greeting;




