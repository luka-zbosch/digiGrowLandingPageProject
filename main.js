const exitBtn = document.getElementById('exitBtn');
const subscriptionPopupContainer = document.getElementById('subscriptionPopupContainer');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function() {
    let email = document.forms["subscriptionForm"]["email"].value;
    if (email == "") {
        alert("Please fill in the required information!");
        return;
    }

    if (email.indexOf("@") < 0) {
        alert("Not a valid email address");
        return;
    } 

    subscriptionPopupContainer.style.display = "flex";
    document.body.style.overflow = 'hidden';
});



exitBtn.addEventListener("click", function() {
    subscriptionPopupContainer.style.display = "none";
    document.body.style.overflow = '';
});
