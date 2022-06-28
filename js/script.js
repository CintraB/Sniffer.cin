
// var para manipular grafico
const labelIPInX = [];
const dataIPIny = [];

var timer;

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelIPInX,
        datasets: [{
            label: 'Número de Datagramas IP Recebidos',
            data: dataIPIny,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2
        }]
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
                    text: 'Quantidade de Datagramas'
                }
            }
        }
    },
});


//adicionando eventos nos botões


document.getElementById("btnIniciar").addEventListener('click', function () {
    console.log("iniciando monitoramento !!");
    timer = setInterval(snmpGet,2000);
    
});

document.getElementById("btnParar").addEventListener('click', function () {
    console.log("parando monitoramento !!");
    clearInterval(timer);
});

//requisição SNMP
function snmpGet() {
    $.ajax({
        url: "snmpIP.php",
        method: "POST",
        data: "",
        success: function (response) {
            console.log(response);
            var dateTime = new Date();
            labelIPInX.push(dateTime.toLocaleTimeString());
            dataIPIny.push(parseInt(response));
            myChart.update();
            //console.log(response);
        }
    })
}