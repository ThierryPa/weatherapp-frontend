// Insert your code here
//const URL = "http://localhost:3000";
const URL = "https://weatherapp-backend-ten-bay.vercel.app";

// Sur le click Sign Up
document.querySelector("#register").addEventListener("click", function () {
    const user = {
        name: document.querySelector('#registerName').value,
        email: document.querySelector('#registerEmail').value,
        password: document.querySelector('#registerPassword').value,
    };

    fetch(URL+"/users/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    }).then(response => response.json()).then(data => {
        if (data.result) {
            document.querySelector('#registerName').value = "";
            document.querySelector('#registerEmail').value = "";
            document.querySelector('#registerPassword').value = "";
            window.location.assign("index.html");
            return true;
        }
        else {
            console.log("Error");
        }
    });
});


// Sur le click Sign In
document.querySelector("#connection").addEventListener("click", function () {
    const user = {
        email: document.querySelector('#connectionEmail').value,
        password: document.querySelector('#connectionPassword').value,
    };

    fetch(URL+"/users/signin", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    }).then(response => response.json()).then(data => {
        if (data.result) {
            window.location.assign("index.html");
            return true;
        }
        else {
            console.log("Error");
        }
    });
});