function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email : document.getElementById("email").value,
        phoneNumber : document.getElementById("phoneNumber").value,
        male : document.getElementById("male").value,
        female : document.getElementById("female").value,
        roomNumber : document.getElementById("roomNumber").value,
    }

    emailjs.send("service_92ip7xi", "template_hznecku",parms).then(alert("your personal details sent !"))
}