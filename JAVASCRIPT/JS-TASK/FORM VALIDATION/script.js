function seterror(id , error) {
    element = document.getElementById(id);
    element = element.getElementsByClassName('formerror')[0].innerHTML = error;     
}

function validateform() {
    var retureval = true;
    var name = document.forms['myForm']["fname"].value;
    // console.log(name);
    if (name.length<7 ) {
        seterror("name", "*This filed is required enter your full name")
        retureval = false;
    }

    if (name.length == 0 ) {
        seterror("name", "*This filed is blank")
        retureval = false;
    }

    var email = document.forms['myForm']["femail"].value;

    if (email.length>15 ) {
        seterror("email", "*Email length is too long")
        retureval = false;
    }
    
    var phone = document.forms['myForm']["fphone"].value;

    if (phone.length != 10 ) {
        seterror("phone", "*Phone number should be of 10 digits ")
        retureval = false;
    }

    var password = document.forms['myForm']["fpass"].value;

    if (password.length < 6 ) {
        seterror("pass", "* Password should be atleast 6 characters long")
        retureval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;

    if (cpassword != password ) {
        seterror("cpass", "* Password and confirm password should match")
        retureval = false;
    }

    return retureval;
}