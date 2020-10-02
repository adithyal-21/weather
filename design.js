var btn=document.querySelector("#but");
var input=document.getElementById("display");
var temp=document.getElementById("temp");
var desc=document.getElementById("desc");
var humdi=document.getElementById("hum");
var pressure=document.getElementById("pres");
var winds=document.getElementById("wind");
var dat=document.getElementById("date");

var texthumdi=document.getElementById("texthum");
var textpressure=document.getElementById("textpres");
var textwinds=document.getElementById("textwind");
var textdesc=document.getElementById("textdesc");

btn.addEventListener('click',function (){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a0b88d9116af5bb3096a93b95866ee5b')
.then(response=>response.json())
.then(data=>{

    var option={weekday:"short",month:"long",day:"numeric"}
    var time=new Date();
    console.log(time);
    dat.innerHTML=time.toLocaleDateString("en-US",option)+" - "+time.getHours()+":"+time.getMinutes();

    console.log(data);

    var city_name=input.value;
    console.log(city_name);
    $("#city").append(city_name);


    var tempar=data.main.temp;
    var temparature=tempar-273.15;
    
    console.log(temparature);
    temp.innerHTML=temparature.toFixed(2)+"&#8451";


    var humidity=data.main.humidity;
    texthumdi.innerHTML="Humidity:";
   humdi.innerHTML=humidity+" %";
     
  
  
    var force=data.main.pressure;
    textpressure.innerHTML="Pressure:";
    pressure.innerHTML=force+" pa";
    
    var main=data.weather[0].description;
    textdesc.innerHTML="Climate:";
    desc.innerHTML=main;

    var wind=data.wind.speed;
    textwinds.innerHTML="Wind:";
    winds.innerHTML=wind+" km/h";

  
}).catch(()=>{
    console.log("Error while fetching data")
    alert("Please enter valiad pincode")
})

})
function refresh()
{
    location.reload();
}

document.getElementById("display").onkeydown=function(event)
{
    if(event.keyCode==13)
    {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a0b88d9116af5bb3096a93b95866ee5b')
.then(response=>response.json())
.then(data=>{

    var option={weekday:"short",month:"long",day:"numeric"}
    var time=new Date();
    console.log(time);
    dat.innerHTML=time.toLocaleDateString("en-US",option)+" - "+time.getHours()+":"+time.getMinutes();

    console.log(data);

    var city_name=input.value;
    console.log(city_name);
    $("#city").append(city_name);


    var tempar=data.main.temp;
    var temparature=tempar-273.15;
    temp.innerHTML=temparature+"&#8451";


    var humidity=data.main.humidity;
    texthumdi.innerHTML="Humidity:";
   humdi.innerHTML=humidity+" %";
     
  
  
    var force=data.main.pressure;
    textpressure.innerHTML="Pressure:";
    pressure.innerHTML=force+" pa";
    
    var main=data.weather[0].description;
    textdesc.innerHTML="Climate:";
    desc.innerHTML=main;

    var wind=data.wind.speed;
    textwinds.innerHTML="Wind:";
    winds.innerHTML=wind+" km/h";

  
})

    }
    }
