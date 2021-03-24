var app = document.getElementById('title');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString("hi, i'm anish.")
    .start();