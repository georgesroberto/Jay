const service_id = "service_t199cup";
const temp_id = "web01"

function SendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send(service_id, temp_id, params).then(function (res) {
        alert("Email sent successfully status: " + res.status);
    })
}