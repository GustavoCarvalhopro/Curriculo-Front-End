const chk =document.getElementById('chk')

chk.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
    
})

function Relogio(){
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var s = data.getSeconds();

    var tempo_total = hr + "h" + min + "m" + s + "s";
    var tempo = window.document.getElementById('clock');
    tempo.innerHTML = tempo_total;
}

setInterval(Relogio, 500);