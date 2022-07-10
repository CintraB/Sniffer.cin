const labelIPInX = [];
const dataIPInY = [];
const dataIPOutY = [];
var timer,timer2, ValorAtual,ValorAtual2,ValorAnterior,ValorAnterior2,valor,valor2;
timer=0;
timer2=0;
var flag = true;
var flag2 = true;

const ctx = document.getElementById('myChart2').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelIPInX,
        datasets: [{
            label: 'Entrada',
            data: dataIPInY,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2
        },
        {
            label: 'Saida',
            data: dataIPOutY,
            backgroundColor: [
                'rgb(54, 162, 235,0.2)',
            ],
            borderColor: [
                'rgb(54, 162, 235)',
            ],
            borderWidth: 2
        }
    ]
    },
    options: {
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Data/Hora'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Qtde de segmentos TCP'
                },
                //beginAtZero: true,
                // type: 'logarithmic',
                // min: 100000,
                // max: 300000,
            }
        }
    }
});

//Adicionando eventos nos botões
document.getElementById("btnIniciar2").addEventListener('click', function () {
    console.log("Iniciando o monitoramento!!");
    timer = setInterval(() =>tcpGet(document.getElementById("campoIPtcp").value), 5000);
    //timer = setInterval(tcpGet, 5000);
    timer2 = setInterval(() =>tcpoutGet(document.getElementById("campoIPtcp").value), 5000);
    //timer2 = setInterval(tcpoutGet, 5000);
});

document.getElementById("btnParar2").addEventListener('click', function () {
    console.log("Parando o monitoramento!!");
    clearInterval(timer);
    clearInterval(timer2);
});

//Requisição SNMP
function tcpGet(campoIPtcp) {
    $.ajax({
        url: "php/tcp.php",
        method: "POST",
        data: `campoIPtcp=${campoIPtcp}`,
        success: function (response) {
            if (flag) {
                ValorAnterior = response;
                flag = false;
            }
            else {
                ValorAtual = parseInt(response);
                valor = ValorAtual - ValorAnterior;
                ValorAnterior = ValorAtual;
                console.log(response);
                var dateTime = new Date();
                labelIPInX.push(dateTime.toLocaleTimeString());
                dataIPInY.push(parseInt(valor));
                myChart.update();
            }
        }
    })
}

function tcpoutGet(campoIPtcp) {
    $.ajax({
        url: "php/tcpout.php",
        method: "POST",
        data: `campoIPtcp=${campoIPtcp}`,
        success: function (response2) {
            if (flag2) {
                ValorAnterior2 = response2;
                flag2 = false;
            }
            else {
                ValorAtual2 = parseInt(response2);
                valor2 = ValorAtual2 - ValorAnterior2;
                ValorAnterior2 = ValorAtual2;
                console.log(response2);
                var dateTime = new Date();
                labelIPInX.push(dateTime.toLocaleTimeString());
                dataIPOutY.push(parseInt(valor2));
                myChart.update();
            }
        }
    })
}
