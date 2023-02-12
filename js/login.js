// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input filed
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    // step-3: get password
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    // console.log(email, password);

    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email & password and check the wheter valid user or not
    if (email === 'iqbalhossainmohon3057@gmail.com' && password === 'bangladesh'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Toi password vule gasos.!! Tuke ami teijjo sontan gosona korlam')
    }

})