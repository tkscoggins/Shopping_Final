//confirms subscription upon email entry
function subscribeFunction(){
    var fullName = document.getElementById("name").value;
    // var fullName = "Tina";
    var email = document.getElementById("email").value;
    alert("Hello " + fullName + "\nYou will now receive our newletter at " + email + ".");
}

