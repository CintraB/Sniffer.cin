const labelIPInX = [];
const dataIPInY = [];
const dataIPOutY = [];
var timer,timer2, ValorAtual,ValorAtual2,ValorAnterior,ValorAnterior2,valor,valor2;
timer=0;
timer2=0;
var flag = true;
var flag2 = true;

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelIPInX,
        datasets: [{
            label: 'Número de Datagramas IP Recebidos',
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
            label: 'Número de Datagramas IP enviados',
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
                    text: 'Qtde de Datagramas'
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
document.getElementById("btnIniciar").addEventListener('click', function () {
    console.log("Iniciando o monitoramento!!");
    timer = setInterval(snmpGet, 5000);
    timer2 = setInterval(snmpoutGet, 5000);
});

document.getElementById("btnParar").addEventListener('click', function () {
    console.log("Parando o monitoramento!!");
    clearInterval(timer);
    clearInterval(timer2);
});

//Requisição SNMP
function snmpGet() {
    $.ajax({
        url: "php/snmpIP.php",
        method: "POST",
        data: "",
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

function snmpoutGet() {
    $.ajax({
        url: "php/snmpout.php",
        method: "POST",
        data: "",
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
