const labelIPInX = [];
const dataIPInY = [];
const dataIPOutY = [];
var timer, ValorAtual, ValorAnterior, valor;
var flag = true;

const ctx = document.getElementById('myChart2').getContext('2d');


const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelIPInX,
        datasets: [{
            label: 'Número de Datagramas UDP recebindos',
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
            label: 'Número de Datagramas UDP enviados',
            data: dataIPOutY,
            backgroundColor: [
                'rgba(54, 162, 235,0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235)',
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
document.getElementById("btnIniciar2").addEventListener('click', function () {
    console.log("Iniciando o monitoramento!!");
    timer = setInterval(snmpGet, 3000);
});

document.getElementById("btnParar2").addEventListener('click', function () {
    console.log("Parando o monitoramento!!");
    clearInterval(timer);
});

//Requisição SNMP
function snmpGet() {
    $.ajax({
        url: "udp.php",
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