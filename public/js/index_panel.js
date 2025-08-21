let output = document.querySelector("#output");
const socket = io("http://51.75.121.124:3030");



function log(message){
    output.innerHTML += `<br>${message}`;
}
