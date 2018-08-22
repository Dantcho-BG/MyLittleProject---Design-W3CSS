// Event Listener
$(document).ready(function() {

    //Profile Image Events

    var profileImage = $("#profile-image");
    profileImage.hover(function(){
        profileImageHover("profile-image", "change-image-text");
    },
    function(){
        profileImageNotHover("profile-image", "change-image-text");
    });

    profileImage.click(function () {
        openImageChangeModal();
    });

    var changeImageText = $("#change-image-text");
    changeImageText.hover(function(){
            profileImageHover("profile-image", "change-image-text");
        },
        function(){
            profileImageNotHover("profile-image", "change-image-text");
        });

    changeImageText.click(function () {
        openImageChangeModal();
    });

    //Modal Profile Image Events

    var modalProfileImage = $("#modal-profile-image");
    modalProfileImage.hover(function(){
        profileImageHover("modal-profile-image", "upload-image-text");
    },
    function(){
        profileImageNotHover("modal-profile-image", "upload-image-text");
    });

    modalProfileImage.click(function () {
        uploadImage();
    });

    var uploadImageText = $("#upload-image-text");
    uploadImageText.hover(function(){
            profileImageHover("modal-profile-image", "upload-image-text");
        },
        function(){
            profileImageNotHover("modal-profile-image", "upload-image-text");
        });

    uploadImageText.click(function () {
        uploadImage();
    });

    //Change Profile Image Modal Discard Button

    var changeProfileImageModalDiscardButton = $("#profile-image-modal-discard-button");
    changeProfileImageModalDiscardButton.click(function () {
        discardProfileImageChanges();
    });

});

// Show The Open A File Window

function uploadImage() {
    var x = document.getElementById("image-upload-input");
    x.click();
}

// Show The Change Profile Image Modal

function openImageChangeModal() {
    var x = document.getElementById('profile-image-change-modal');
    x.style.display='block';
}

// Add Hover Effects To The Profile Images

function profileImageHover(image, text) {
    var a = document.getElementById(image);
    var b = document.getElementById(text);
    a.className += " w3-opacity-max";
    b.className = b.className.replace(" w3-hide", "");
}

// Remove Hover Effects Of The Profile Images

function profileImageNotHover(image, text) {
    var a = document.getElementById(image);
    var b = document.getElementById(text);
    a.className = a.className.replace(" w3-opacity-max", "");
    b.className += " w3-hide";
}

// Discard Modal Button

function discardProfileImageChanges() {

    location.reload();

}

// Change Profile Image Modal Close On Outside Click
var profileImageChangeModal = document.getElementById('profile-image-change-modal');

window.onclick = function(event) {
    if (event.target == profileImageChangeModal) {
        profileImageChangeModal.style.display = "none";
    }
}
