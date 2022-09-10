const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");



const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");



const signinBtn = document.querySelector(".signin-button");


signinBtn.addEventListener("click", signIn);

function signIn(e) {
    e.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    // console.log("sign in")
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    console.log(usernameValue, passwordValue);

    let isSendData = true;

    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1) {
        usernameMsg.innerText = "Please enter a valid Email";
        isSendData = false;
    }
    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please enter your password";
        isSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "your password is too short";
        isSendData = false;
    }
    if (isSendData) {
        console.log('send data to server');
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        })
        const headers = {
            'Content-type': 'application/json; charset=UTF-8',
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: body,
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    signinMsg.innerText = "you signed in successfully"
                }
            })
    }
}

