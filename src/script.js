function sendMessage(){

let input=document.getElementById("userInput");

let chatbox=document.getElementById("chatbox");

let message=input.value;

if(message==="") return;

chatbox.innerHTML +=
"<p class='user'>" + message + "</p>";

let reply="Please visit the nearest health facility if your symptoms are severe.";

if(message.toLowerCase().includes("pregnancy")){
reply="Eat healthy foods, attend antenatal care, and get enough rest.";
}

else if(message.toLowerCase().includes("baby")){
reply="Ensure your baby receives all vaccinations and is exclusively breastfed for the first 6 months.";
}

else if(message.toLowerCase().includes("fever")){
reply="A persistent fever requires medical attention. Visit the nearest clinic.";
}

chatbox.innerHTML +=
"<p class='bot'>" + reply + "</p>";

input.value="";

chatbox.scrollTop=chatbox.scrollHeight;

}