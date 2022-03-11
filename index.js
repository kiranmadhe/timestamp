let a;
let time;
let date;

setInterval(() => {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    a = new Date();
    date = a.toLocaleDateString(undefined, options)
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();


    document.getElementById('time').innerHTML = time + "<br>" + date;

}, 1000);