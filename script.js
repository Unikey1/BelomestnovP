function checkFirst() { 
    let first = document.getElementById("first-name").value; 
    let regex = /^[a-zA-Z\s]{2,15}$/; 

    if (first.trim() === "") {
        document.getElementById("first_Check").style.color = "black"; 
        document.getElementById("first_Check").innerHTML = "This field is required"; 
        return false; 
    }

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "purple"; 
        document.getElementById("first_Check").innerHTML = "Input correct!"; 
        return true; 
    } 
    else {
        document.getElementById("first_Check").style.color = "red"; 
        document.getElementById("first_Check").innerHTML = "Please, enter 2-15 characters"; 
        return false; 
    } 
}

function checkLast() { 
    let last = document.getElementById("last-name").value; 
    let regex = /^[a-zA-Z\s]{2,25}$/; 

    if (last.trim() === "") {
        document.getElementById("last_Check").style.color = "black"; 
        document.getElementById("last_Check").innerHTML = "This field is required"; 
        return false; 
    }

    if (regex.test(last)) {
        document.getElementById("last_Check").style.color = "purple"; 
        document.getElementById("last_Check").innerHTML = "Input correct!"; 
        return true; 
    } 
    else {
        document.getElementById("last_Check").style.color = "red"; 
        document.getElementById("last_Check").innerHTML = "Please, enter 2-25 characters"; 
        return false; 
    } 
} 

function checkAge() { 
    let age = document.getElementById("age").value; 
    let regex = /^(1[89]|[2-9][0-9]|1[01][0-9]|120)$/; 

    if (age.trim() === "") {
        document.getElementById("age_Check").style.color = "black"; 
        document.getElementById("age_Check").innerHTML = "This field is required"; 
        return false; 
    }

    if (regex.test(age)) {
        document.getElementById("age_Check").style.color = "purple"; 
        document.getElementById("age_Check").innerHTML = "Input correct!"; 
        return true; 
    } 
    else {
        document.getElementById("age_Check").style.color = "red"; 
        document.getElementById("age_Check").innerHTML = "Please, enter your age (18 - 120)"; 
        return false; 
    } 
} 

function checkPhone() { 
    let phone = document.getElementById("phone").value; 
    let regex = /^\d{3}-(\d{3})-\d{4}$/; 

    if (phone.trim() === "") {
        document.getElementById("phone_Check").style.color = "black"; 
        document.getElementById("phone_Check").innerHTML = "This field is required"; 
        return false; 
    }

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "purple"; 
        document.getElementById("phone_Check").innerHTML = "Input correct!"; 
        return true; 
    } 
    else {
        document.getElementById("phone_Check").style.color = "red"; 
        document.getElementById("phone_Check").innerHTML = "Please, enter telnum (123-123-1234)"; 
        return false; 
    } 
} 

function checkEmail() { 
    let email = document.getElementById("email").value; 
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (email.trim() === "") {
        document.getElementById("email_Check").style.color = "black"; 
        document.getElementById("email_Check").innerHTML = "This field is required"; 
        return false; 
    }

    if (regex.test(email)) {
        document.getElementById("email_Check").style.color = "purple"; 
        document.getElementById("email_Check").innerHTML = "Input correct!"; 
        return true; 
    } 
    else {
        document.getElementById("email_Check").style.color = "red"; 
        document.getElementById("email_Check").innerHTML = "Please, enter email (example@mail.boo)"; 
        return false; 
    } 
} 

function checkProf() { 
    let prof = document.getElementById("profession").value; 
    let regex = /^[a-zA-Z\s]{2,30}$/; 

    if (prof.trim() === "") {
        document.getElementById("prof_Check").style.color = "black"; 
        document.getElementById("prof_Check").innerHTML = "This field is required"; 
        return false; 
    }

    if (regex.test(prof)) {
        document.getElementById("prof_Check").style.color = "purple"; 
        document.getElementById("prof_Check").innerHTML = "Input correct!"; 
        return true; 
    } 
    else {
        document.getElementById("prof_Check").style.color = "red"; 
        document.getElementById("prof_Check").innerHTML = "Please, enter 2-30 characters"; 
        return false; 
    } 
} 
   
function outputData() {
    var first = document.getElementById("first-name").value;
    var last = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var prof= document.getElementById("profession").value;

    if (first != "" && last != "" && age != "" && phone != "" && email != "" && prof != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Hello, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: </p>";
        document.getElementById("summary").innerHTML += "<p>Your age: " + age + ".</br>";
        document.getElementById("summary").innerHTML += "Your phone number: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Email for communication with you: " + email + ".</br>";
        document.getElementById("summary").innerHTML += "Your profession: " + prof + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>We are glad that You use our company's services!</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}

const imageElement0 = document.getElementById("bigimgclick");

const imageElement1 = document.getElementById("imgclick1");
const imageElement2 = document.getElementById("imgclick2");
const imageElement3 = document.getElementById("imgclick3");

const textElement0 = document.getElementById("txtclick0");
const textElement1 = document.getElementById("txtclick1");

imageElement0.addEventListener("click", function() {
    if (this.style.transform === "rotateY(180deg)") {
        this.style.transform = "rotateY(0deg)";
    } else {
        this.style.transform = "rotateY(180deg)";
    }
});

imageElement1.addEventListener("click", function(){
    if (this.style.transform === "scale(2.4)") {
        this.style.transform = "scale(1)"; 
    } 
    else {
        this.style.transform = "scale(2.4)"; 
    }
});

imageElement2.addEventListener("click", function() {
    if (this.style.transform === "scale(2.4)") {
        this.style.transform = "scale(1)"; 
    } 
    else {
        this.style.transform = "scale(2.4)"; 
    }
});

imageElement3.addEventListener("click", function() {
    if (this.style.transform === "scale(2.4)") {
        this.style.transform = "scale(1)"; 
    } 
    else {
        this.style.transform = "scale(2.4)"; 
    }
});

textElement0.addEventListener("click", function() {
    this.style.color = this.style.color === "green" ? "black" : "green"; 
});

textElement1.addEventListener("click", function() {
    if (this.innerHTML === "® Все на этом сайте защищено") {
        this.innerHTML = "Но это не точно...";
    } 
    else {
            this.innerHTML = "® Все на этом сайте защищено";
    }
});
