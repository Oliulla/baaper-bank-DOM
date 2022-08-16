document.getElementById('login-btn').addEventListener('click', () => {
    const userMailElm = document.getElementById('user-email');
    const userMail = userMailElm.value;
    const emailValid = userMail.endsWith('.com');
    const userPassElm = document.getElementById('user-pass');
    const userPass = userPassElm.value;
    const string = 'abcd';
    if ((emailValid === true) && (userPass.length >= string.length)) {
        window.location.href = 'bank.html'
    } else {
        alert('Please enter valid email')
    }
});