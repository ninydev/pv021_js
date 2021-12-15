
let token = "5059470839:AAHDwvP4-FqYsY_Po2BPPi2jfplL-PV1oRU";
//let chatId = "581007391"; // Мой номер в сети телеграмм
let chatId = "-1001277396998"; // Id группового чата


document.getElementById("btn").onclick = function () {
    let msg = document.getElementById("txt").value;

    fetch("https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + msg)
        .then(res => {
            console.log(res);
        })
        .catch(err=> {
            console.log(err);
        })
}


let ul = document.getElementById("bootMsg");
let last_update_id = 0;
function getUpdates() {
    fetch("https://api.telegram.org/bot" + token + "/getUpdates")
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(messages => {
            if(!messages.ok ) {
                console.log(messages);
                return;
            }
            console.log(messages.result);
        })
        .catch(err=> {
            console.log(err);
        })
}

let ptr = setInterval(getUpdates, 5000);
