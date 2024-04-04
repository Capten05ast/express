function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email : document.getElementById("email").value,
        phoneNumber : document.getElementById("phoneNumber").value,
        gender : document.getElementById("gender").value,
        roomNumber : document.getElementById("roomNumber").value,
    }

    emailjs.send("service_92ip7xi", "template_hznecku",parms).then(alert("your personal details sent !"))
}
