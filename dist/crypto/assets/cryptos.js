  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  function getCoinData(){

    if(document.getElementById("select1").value=="Usd" || document.getElementById("select2").value=="Usd"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select1").value=='Bitcoin' && document.getElementById("select2").value=='Usd'){
            bitcoin=bitcoin* document.getElementById("input1").value
            document.getElementById("input2").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select1").value=='Ethereum' && document.getElementById("select2").value=='Usd'){
            ethereum=ethereum* document.getElementById("input1").value
            document.getElementById("input2").value=ethereum
          }
          else if(document.getElementById("select1").value=='DogeCoin' && document.getElementById("select2").value=='Usd'){
            dogecoin=dogecoin* document.getElementById("input1").value
            document.getElementById("input2").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select1").value=='Usd' && document.getElementById("select2").value=='Bitcoin'){
            Usd=document.getElementById("input1").value/bitcoin
            document.getElementById("input2").value=Usd
            console.log(Usd)
          }
          else if(document.getElementById("select1").value=='Usd' && document.getElementById("select2").value=='DogeCoin'){
            Usd=document.getElementById("input1").value/dogecoin
            document.getElementById("input2").value=Usd
            console.log(Usd)
          }
          else if(document.getElementById("select1").value=='Usd' && document.getElementById("select2").value=='Ethereum'){
            Usd=document.getElementById("input1").value/ethereum
            document.getElementById("input2").value=Usd
            console.log(Usd)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

    if(document.getElementById("select1").value=="Euro" || document.getElementById("select2").value=="Euro"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select1").value=='Bitcoin' && document.getElementById("select2").value=='Euro'){
            bitcoin=bitcoin* document.getElementById("input1").value
            document.getElementById("input2").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select1").value=='Ethereum' && document.getElementById("select2").value=='Euro'){
            ethereum=ethereum* document.getElementById("input1").value
            document.getElementById("input2").value=ethereum
          }
          else if(document.getElementById("select1").value=='DogeCoin' && document.getElementById("select2").value=='Euro'){
            dogecoin=dogecoin* document.getElementById("input1").value
            document.getElementById("input2").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select1").value=='Euro' && document.getElementById("select2").value=='Bitcoin'){
            Euro=document.getElementById("input1").value/bitcoin
            document.getElementById("input2").value=Euro
            console.log(Euro)
          }
          else if(document.getElementById("select1").value=='Euro' && document.getElementById("select2").value=='DogeCoin'){
            Euro=document.getElementById("input1").value/dogecoin
            document.getElementById("input2").value=Euro
            console.log(Euro)
          }
          else if(document.getElementById("select1").value=='Euro' && document.getElementById("select2").value=='Ethereum'){
            Euro=document.getElementById("input1").value/ethereum
            document.getElementById("input2").value=Euro
            console.log(Euro)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

    if(document.getElementById("select1").value=="Peso" || document.getElementById("select2").value=="Peso"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select1").value=='Bitcoin' && document.getElementById("select2").value=='Peso'){
            bitcoin=bitcoin* document.getElementById("input1").value
            document.getElementById("input2").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select1").value=='Ethereum' && document.getElementById("select2").value=='Peso'){
            ethereum=ethereum* document.getElementById("input1").value
            document.getElementById("input2").value=ethereum
          }
          else if(document.getElementById("select1").value=='DogeCoin' && document.getElementById("select2").value=='Peso'){
            dogecoin=dogecoin* document.getElementById("input1").value
            document.getElementById("input2").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select1").value=='Peso' && document.getElementById("select2").value=='Bitcoin'){
            Peso=document.getElementById("input1").value/bitcoin
            document.getElementById("input2").value=Peso
            console.log(Peso)
          }
          else if(document.getElementById("select1").value=='Peso' && document.getElementById("select2").value=='DogeCoin'){
            Peso=document.getElementById("input1").value/dogecoin
            document.getElementById("input2").value=Peso
            console.log(Peso)
          }
          else if(document.getElementById("select1").value=='Peso' && document.getElementById("select2").value=='Ethereum'){
            Peso=document.getElementById("input1").value/ethereum
            document.getElementById("input2").value=Peso
            console.log(Peso)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }
    if(document.getElementById("select1").value=="Bitcoin" || document.getElementById("select2").value=="Bitcoin"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select1").value=='Bitcoin' && document.getElementById("select2").value=='Bitcoin'){
            bitcoin = (bitcoin* document.getElementById("input1").value)/(bitcoin* document.getElementById("input1").value)
            document.getElementById("input2").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select1").value=='Bitcoin' && document.getElementById("select2").value=='Ethereum'){
            bitcoin = (bitcoin* document.getElementById("input1").value)/(ethereum* document.getElementById("input1").value)
            document.getElementById("input2").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select1").value=='Bitcoin' && document.getElementById("select2").value=='DogeCoin'){
            bitcoin = (bitcoin* document.getElementById("input1").value)/(dogecoin* document.getElementById("input1").value)
            document.getElementById("input2").value=bitcoin
            console.log(bitcoin)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function getCoinData2(){

    if(document.getElementById("select3").value=="Usd" || document.getElementById("select4").value=="Usd"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select3").value=='Bitcoin' && document.getElementById("select4").value=='Usd'){
            bitcoin=bitcoin* document.getElementById("input3").value
            document.getElementById("input4").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select3").value=='Ethereum' && document.getElementById("select4").value=='Usd'){
            ethereum=ethereum* document.getElementById("input3").value
            document.getElementById("input4").value=ethereum
          }
          else if(document.getElementById("select3").value=='DogeCoin' && document.getElementById("select4").value=='Usd'){
            dogecoin=dogecoin* document.getElementById("input3").value
            document.getElementById("input4").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select3").value=='Usd' && document.getElementById("select4").value=='Bitcoin'){
            Usd=document.getElementById("input3").value/bitcoin
            document.getElementById("input4").value=Usd
            console.log(Usd)
          }
          else if(document.getElementById("select3").value=='Usd' && document.getElementById("select4").value=='DogeCoin'){
            Usd=document.getElementById("input3").value/dogecoin
            document.getElementById("input4").value=Usd
            console.log(Usd)
          }
          else if(document.getElementById("select3").value=='Usd' && document.getElementById("select4").value=='Ethereum'){
            Usd=document.getElementById("input3").value/ethereum
            document.getElementById("input4").value=Usd
            console.log(Usd)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

    if(document.getElementById("select3").value=="Euro" || document.getElementById("select4").value=="Euro"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select3").value=='Bitcoin' && document.getElementById("select4").value=='Euro'){
            bitcoin=bitcoin* document.getElementById("input3").value
            document.getElementById("input4").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select3").value=='Ethereum' && document.getElementById("select4").value=='Euro'){
            ethereum=ethereum* document.getElementById("input3").value
            document.getElementById("input4").value=ethereum
          }
          else if(document.getElementById("select3").value=='DogeCoin' && document.getElementById("select4").value=='Euro'){
            dogecoin=dogecoin* document.getElementById("input3").value
            document.getElementById("input4").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select3").value=='Euro' && document.getElementById("select4").value=='Bitcoin'){
            Euro=document.getElementById("input3").value/bitcoin
            document.getElementById("input4").value=Euro
            console.log(Euro)
          }
          else if(document.getElementById("select3").value=='Euro' && document.getElementById("select4").value=='DogeCoin'){
            Euro=document.getElementById("input3").value/dogecoin
            document.getElementById("input4").value=Euro
            console.log(Euro)
          }
          else if(document.getElementById("select3").value=='Euro' && document.getElementById("select4").value=='Ethereum'){
            Euro=document.getElementById("input3").value/ethereum
            document.getElementById("input4").value=Euro
            console.log(Euro)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

    if(document.getElementById("select3").value=="Peso" || document.getElementById("select4").value=="Peso"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select3").value=='Bitcoin' && document.getElementById("select4").value=='Peso'){
            bitcoin=bitcoin* document.getElementById("input3").value
            document.getElementById("input4").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select3").value=='Ethereum' && document.getElementById("select4").value=='Peso'){
            ethereum=ethereum* document.getElementById("input3").value
            document.getElementById("input4").value=ethereum
          }
          else if(document.getElementById("select3").value=='DogeCoin' && document.getElementById("select4").value=='Peso'){
            dogecoin=dogecoin* document.getElementById("input3").value
            document.getElementById("input4").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select3").value=='Peso' && document.getElementById("select4").value=='Bitcoin'){
            Peso=document.getElementById("input3").value/bitcoin
            document.getElementById("input4").value=Peso
            console.log(Peso)
          }
          else if(document.getElementById("select3").value=='Peso' && document.getElementById("select4").value=='DogeCoin'){
            Peso=document.getElementById("input3").value/dogecoin
            document.getElementById("input4").value=Peso
            console.log(Peso)
          }
          else if(document.getElementById("select3").value=='Peso' && document.getElementById("select4").value=='Ethereum'){
            Peso=document.getElementById("input3").value/ethereum
            document.getElementById("input4").value=Peso
            console.log(Peso)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }
    if(document.getElementById("select3").value=="Ethereum" || document.getElementById("select4").value=="Ethereum"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select3").value=='Ethereum' && document.getElementById("select4").value=='Bitcoin'){
            ethereum = (ethereum* document.getElementById("input3").value)/(bitcoin* document.getElementById("input3").value)
            document.getElementById("input4").value=ethereum
            console.log(ethereum)
          }
          else if(document.getElementById("select3").value=='Ethereum' && document.getElementById("select4").value=='Ethereum'){
            ethereum = (ethereum* document.getElementById("input3").value)/(ethereum* document.getElementById("input3").value)
            document.getElementById("input4").value=ethereum
            console.log(ethereum)
          }
          else if(document.getElementById("select3").value=='Ethereum' && document.getElementById("select4").value=='DogeCoin'){
            ethereum = (ethereum* document.getElementById("input3").value)/(dogecoin* document.getElementById("input3").value)
            document.getElementById("input4").value=ethereum
            console.log(ethereum)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCoinData3(){

    if(document.getElementById("select5").value=="Usd" || document.getElementById("select6").value=="Usd"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select5").value=='Bitcoin' && document.getElementById("select6").value=='Usd'){
            bitcoin=bitcoin* document.getElementById("input5").value
            document.getElementById("input6").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select5").value=='Ethereum' && document.getElementById("select6").value=='Usd'){
            ethereum=ethereum* document.getElementById("input5").value
            document.getElementById("input6").value=ethereum
          }
          else if(document.getElementById("select5").value=='DogeCoin' && document.getElementById("select6").value=='Usd'){
            dogecoin=dogecoin* document.getElementById("input5").value
            document.getElementById("input6").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select5").value=='Usd' && document.getElementById("select6").value=='Bitcoin'){
            Usd=document.getElementById("input5").value/bitcoin
            document.getElementById("input6").value=Usd
            console.log(Usd)
          }
          else if(document.getElementById("select5").value=='Usd' && document.getElementById("select6").value=='DogeCoin'){
            Usd=document.getElementById("input5").value/dogecoin
            document.getElementById("input6").value=Usd
            console.log(Usd)
          }
          else if(document.getElementById("select5").value=='Usd' && document.getElementById("select6").value=='Ethereum'){
            Usd=document.getElementById("input5").value/ethereum
            document.getElementById("input6").value=Usd
            console.log(Usd)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

    if(document.getElementById("select5").value=="Euro" || document.getElementById("select6").value=="Euro"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select5").value=='Bitcoin' && document.getElementById("select6").value=='Euro'){
            bitcoin=bitcoin* document.getElementById("input5").value
            document.getElementById("input6").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select5").value=='Ethereum' && document.getElementById("select6").value=='Euro'){
            ethereum=ethereum* document.getElementById("input5").value
            document.getElementById("input6").value=ethereum
          }
          else if(document.getElementById("select5").value=='DogeCoin' && document.getElementById("select6").value=='Euro'){
            dogecoin=dogecoin* document.getElementById("input5").value
            document.getElementById("input6").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select5").value=='Euro' && document.getElementById("select6").value=='Bitcoin'){
            Euro=document.getElementById("input5").value/bitcoin
            document.getElementById("input6").value=Euro
            console.log(Euro)
          }
          else if(document.getElementById("select5").value=='Euro' && document.getElementById("select6").value=='DogeCoin'){
            Euro=document.getElementById("input5").value/dogecoin
            document.getElementById("input6").value=Euro
            console.log(Euro)
          }
          else if(document.getElementById("select5").value=='Euro' && document.getElementById("select6").value=='Ethereum'){
            Euro=document.getElementById("input5").value/ethereum
            document.getElementById("input6").value=Euro
            console.log(Euro)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }

    if(document.getElementById("select5").value=="Peso" || document.getElementById("select6").value=="Peso"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select5").value=='Bitcoin' && document.getElementById("select6").value=='Peso'){
            bitcoin=bitcoin* document.getElementById("input5").value
            document.getElementById("input6").value=bitcoin
            console.log(bitcoin)
          }
          else if(document.getElementById("select5").value=='Ethereum' && document.getElementById("select6").value=='Peso'){
            ethereum=ethereum* document.getElementById("input5").value
            document.getElementById("input6").value=ethereum
          }
          else if(document.getElementById("select5").value=='DogeCoin' && document.getElementById("select6").value=='Peso'){
            dogecoin=dogecoin* document.getElementById("input5").value
            document.getElementById("input6").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select5").value=='Peso' && document.getElementById("select6").value=='Bitcoin'){
            Peso=document.getElementById("input5").value/bitcoin
            document.getElementById("input6").value=Peso
            console.log(Peso)
          }
          else if(document.getElementById("select5").value=='Peso' && document.getElementById("select6").value=='DogeCoin'){
            Peso=document.getElementById("input5").value/dogecoin
            document.getElementById("input6").value=Peso
            console.log(Peso)
          }
          else if(document.getElementById("select5").value=='Peso' && document.getElementById("select6").value=='Ethereum'){
            Peso=document.getElementById("input5").value/ethereum
            document.getElementById("input6").value=Peso
            console.log(Peso)
          }
        })
      .catch((error) => {
        console.log('Something went wrong: ' + error);
      })
    }
    if(document.getElementById("select5").value=="DogeCoin" || document.getElementById("select6").value=="DogeCoin"){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20dogecoin%2C%20ethereum%2C%20&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        method: 'GET'
      })
      .then((response) => response.json())
      .then((json) => {
          //console.log(json);
          //BitCoin data
          var bitcoin= json[0].current_price;
          //Ethereum data
          var ethereum=  json[1].current_price;
          //Doge data
          var dogecoin= json[2].current_price;

          if(document.getElementById("select5").value=='DogeCoin' && document.getElementById("select6").value=='Bitcoin'){
            dogecoin = (dogecoin* document.getElementById("input5").value)/(bitcoin* document.getElementById("input5").value)
            document.getElementById("input6").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select5").value=='DogeCoin' && document.getElementById("select6").value=='Ethereum'){
            dogecoin = (dogecoin* document.getElementById("input5").value)/(ethereum* document.getElementById("input5").value)
            document.getElementById("input6").value=dogecoin
            console.log(dogecoin)
          }
          else if(document.getElementById("select5").value=='DogeCoin' && document.getElementById("select6").value=='DogeCoin'){
            dogecoin = (dogecoin* document.getElementById("input5").value)/(dogecoin* document.getElementById("input5").value)
            document.getElementById("input6").value=dogecoin
            console.log(dogecoin)
          }
        })
      }
  }
  fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=7',{
          method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {

          var x=[]
          var y=[]
          for (var i =0; i<json.prices.length ; i++) {
            x.push(i)
            y.push(json.prices[i][1])
          }


new Chart("myChartBitcoin", {
  type: "line",
  data: {
    labels: x,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: y
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:60000}}],
    }
  }
});
})
.catch((error) => {
          console.log('Something went wrong: ' + error);
        })

  fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=USD&days=7',{
          method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {

          var x=[]
          var y=[]
          for (var i =0; i<json.prices.length ; i++) {
            x.push(i)
            y.push(json.prices[i][1])
          }

new Chart("myChartEther", {
  type: "line",
  data: {
    labels: x,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: y
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:5000}}],
    }
  }
});
})
.catch((error) => {
          console.log('Something went wrong: ' + error);
        })

  fetch('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=USD&days=7',{
          method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {

          var x=[]
          var y=[]
          for (var i =0; i<json.prices.length ; i++) {
            x.push(i)
            y.push(json.prices[i][1])
          }

new Chart("myChartDogecoin", {
  type: "line",
  data: {
    labels: x,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: y
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:2}}],
    }
  }
});
})
.catch((error) => {
          console.log('Something went wrong: ' + error);
        })