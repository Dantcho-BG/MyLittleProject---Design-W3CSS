$(document).ready(function() {
    var x = $("#profile-image");
    x.hover(function(){
            profileImageHover();
    },
    function(){
        profileImageNotHover();
    });

    x.click(function () {
        uploadImage();
    });

    var y = $("#upload-image-text");
    y.hover(function(){
            profileImageHover();
        },
        function(){
            profileImageNotHover();
        });

    y.click(function () {
        uploadImage();
    });
});

function uploadImage() {
    var x = document.getElementById("upload-image-input");
    x.click();
}

function profileImageHover() {
    var a = document.getElementById("profile-image");
    var b = document.getElementById("upload-image-text");
    a.className += " w3-opacity-max";
    b.className = b.className.replace(" w3-hide", "");
}

function profileImageNotHover() {
    var a = document.getElementById("profile-image");
    var b = document.getElementById("upload-image-text");
    a.className = a.className.replace(" w3-opacity-max", "");
    b.className += " w3-hide";
}