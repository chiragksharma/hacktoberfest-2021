function setClock() {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString('en-GB');
    document.querySelector('.clock').innerHTML = `<h1>${time}</h1><p>${date}</p>` ;
}
var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];
var myDate = new Date();
myDate.setDate(myDate.getDate()+7);
var curr_day  = myDate.getDay();
document.write(`<h1 style="color: red;text-align: center;">${d_names[curr_day]}</h1>`);

  
setInterval(setClock, 1000);
