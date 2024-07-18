let endDate = "18 July 2024 7:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if( diff < 0) return;
    // Conversions
    inputs[0].value = Math.floor(diff / 3600 / 24);  // It will give days
    inputs[1].value = Math.floor(diff / 3600) % 24;  // It will give Hours
    inputs[2].value = Math.floor(diff / 60) % 60; // It will give Minutes
    inputs[3].value = Math.floor(diff) % 60;  // It will give Hours
}
// initial Call
clock();

setInterval( () =>{
    clock();
},1000);