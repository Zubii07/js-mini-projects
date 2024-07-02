const  clock = document.getElementById('clock');
//  we can also use const clock = document.querySelector('#clock')

setInterval( function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);