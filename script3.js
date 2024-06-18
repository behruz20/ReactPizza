// // 5530572466
let login_button = document.querySelector('.login-button');
let inputs = document.querySelectorAll('input');
let btn_oquvchi = document.querySelectorAll('.btn_oquvchi');
let bot_token = '7484970642:AAHXA8M7pb1tx7hWE3DO-iexfyU9IYn2YKM';

login_button.addEventListener('click', () => {
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: 5530572466,
            text: `name:${inputs[0].value} \n surname:${inputs[1].value} \n number:${inputs[2].value}`
        })
    })
});