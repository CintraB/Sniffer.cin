var graphThreelabelX = [];
var graphThreeDataInY = [];
var graphThreeDataOutY = [];
var timer,timer2;
var dateTime = new Date();
var rangeIn = 0;
var rangeOut = 0;

  const data = {
    labels: graphThreelabelX,
    datasets: [
      {
      label: 'Entrada',
      backgroundColor: 'rgb(255, 99, 132,0.2)',
      borderColor: 'rgb(255, 99, 132)',
      data: graphThreeDataInY,
    },
    {
      label: 'Saida',
      backgroundColor: 'rgb(54, 162, 235,0.2)',
      borderColor: 'rgb(54, 162, 235)',
      data: graphThreeDataOutY,
    }
    ]
  };

  const configThree = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false
      },
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
            text: 'Qtde de Datagramas UDP'
          }
        }
      }
    },
  };

  var myChart = new Chart(document.getElementById('myChart3'), configThree);

  
//Adicionando eventos nos botões

  document.getElementById("btnIniciar3").addEventListener('click',function (){
    console.log("Iniciando o monitoramento!!");
    graphThreelabelX.length = 0;
    graphThreeDataInY.length = 0;
    graphThreeDataOutY.length = 0;
    timer = setInterval(udpintGet,5000);
    timer2 = setInterval(udpoutGet,5000);
  });

  document.getElementById("btnParar3").addEventListener('click',function (){
    console.log("Parando o monitoramento!!");
    clearInterval(timer);
    clearInterval(timer2);
    
  });

  function udpintGet(){
      $.ajax({
        url:"udp.php",
        data: "",
        method: "POST",
        success: function(response){           

            if(rangeIn === 0) {
              rangeIn = response;
            } else {
              rangeIn = response - rangeIn;
              graphThreeDataInY.push(rangeIn);
              myChart.update();
            }
            graphThreelabelX.push(dateTime.toLocaleString());
            rangeIn = response;
        }
      })
  }

  function udpoutGet(){

      $.ajax({
        url:"udpout.php",
        data: "",
        method: "POST",
        success: function(response){

            if(rangeOut === 0){
              rangeOut = response
            }else{
              rangeOut = response - rangeOut;
              graphThreeDataOutY.push(rangeOut);
              myChart.update();
            }
            graphThreelabelX.push(dateTime.toLocaleString());
            rangeOut = response;
            
        }
      })
  }