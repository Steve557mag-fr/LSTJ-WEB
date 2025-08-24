let SOCKET_ADDR = "ws://51.75.121.124:3030";

let input  = document.querySelector("#input");
let output = document.querySelector("#output");
let utf_encoder = new TextEncoder(); 
let socket = new WebSocket(SOCKET_ADDR);
socket.onopen = (ev)=>{
    log("[+] <i>socket connected!</i>");
};
socket.onerror = (err)=>{
    log("[!] <b>ERR</b>");
};
socket.onmessage = (message)=>{
    message.data.text().then((txt)=>{ log( JSON.parse(txt) ); });
};

input.addEventListener('keydown',(e)=>{
    
    if(e.key == 'Enter'){
        build_request(e.target.value);
    }
})

function build_request(str){
    
    let req = {};

    let args = str.split(',');
    for(let i = 0; i < args.length;i++){
        let params = args[i].split(':');
        req[params[0]] = params[1];
    }

    send_request(req);
}

function send_request(req){
    let bytes = utf_encoder.encode(JSON.stringify(req));
    socket.send(bytes);
}

function log(message){
    output.innerHTML += `<br>${message}`;
}
