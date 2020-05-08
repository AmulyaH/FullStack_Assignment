
function saveForm(){
    let letterOn = "off";
    let name = document.getElementById("txtname").value;
    let email = document.getElementById("txtemail").value;
    let message = document.getElementById("txtmessage").value;
    let newsLetter = document.getElementById("chk");
    if(newsLetter.checked == true)
    {
        letterOn = "on";
    }
    console.log(" name: " + name + "\n email: " + email + "\n comments: " + message + "\n newsletter: " + letterOn);
}
 