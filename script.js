

const apiKey ="c1c1f51e8874aa779d9b285da992a031"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox= document.querySelector('.searchbar input');
const searchBtn = document.querySelector('.searchbar button')
const Name= document.querySelector("#name")
const Temp = document.querySelector("#temp")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data)
    Name.innerHTML= data.name;
    Temp.innerHTML= Math.round(data.main.temp)+ "°C";
   var desc = document.querySelector("#state").innerHTML= data.weather[0].description;
    var icon = data.weather[0].icon
    document.getElementById('img').src=`http://openweathermap.org/img/wn/${icon} .png`
    

    function bg(){
        var weather = data.weather[0].main;
        var container =  document.querySelector(".container")
        if (desc =='few clouds'){
            container.style.background="url(https://i.pinimg.com/564x/2a/68/29/2a68294a5d806c6c0f6b19d4d8804d56.jpg)";
             container.style.backgroundSize="cover"
            Name.style.background="transparent"
        Name.style.background="rgba(0, 0, 0, 0.152)"
        Temp.style.background="rgba(0, 0, 0, 0.152)"
        Name.style.padding="3px 10px"
        Temp.style.padding="3px 10px"
        Name.style.borderRadius="10px"
        Temp.style.borderRadius="10px"
            
        }
       else if (desc == "clouds"){
        container.style.background="url(https://images.unsplash.com/photo-1604042403941-398c711e4218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
        container.style.backgroundPosition='center'
        container.style.backgroundSize="cover"
        Name.style.background="transparent"
        Temp.style.background="transparent"
        Name.style.padding="0"
        Temp.style.padding="0"
        Name.style.borderRadius="none"
        Temp.style.borderRadius="none"
       }
       else if (desc == "clear sky"){
        container.style.background="url(https://i.pinimg.com/originals/58/0d/9b/580d9b4e98ad7cb7db97df066bb2bfb3.jpg)"
        container.style.backgroundPosition="top"
        container.style.backgroundSize="cover"       
        container.style.backgroundSize="cover"
        Name.style.background="transparent"
        Temp.style.background="transparent"
        Name.style.padding="0"
        Temp.style.padding="0"
        Name.style.borderRadius="none"
        Temp.style.borderRadius="none"
       }
       else if (weather == "thunderstorm"){
        container.style.background="url(https://w.forfun.com/fetch/b5/b57bb661592401e51a194b6e0543ef6c.jpeg)";
        Name.style.background="transparent"
        Temp.style.background="transparent"
        Name.style.padding="0"
        Temp.style.padding="0"
        Name.style.borderRadius="none"
        Temp.style.borderRadius="none"
      
       }
       else if (desc == "mist"){
        container.style.background="url(https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        container.style.backgroundPosition="center"
        container.style.backgroundSize="cover"
        Name.style.background="transparent"
        Temp.style.background="transparent"
        Name.style.padding="0"
        Temp.style.padding="0"
        Name.style.borderRadius="none"
        Temp.style.borderRadius="none"
      
       }
       else if ( desc == "broken clouds"){
        container.style.background="url(https://live.staticflickr.com/1828/28636482297_bd428f26e8_b.jpg)"
        container.style.backgroundPosition="center"
        container.style.backgroundSize="cover"
        Name.style.background="transparent"
        Temp.style.background="transparent"
        Name.style.padding="0"
        Temp.style.padding="0"
        Name.style.borderRadius="none"
        Temp.style.borderRadius="none"
       }
       else if (desc == "scattered clouds"){
        container.style.background="url(https://images.unsplash.com/photo-1701060615948-87faa7a50d4a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        container.style.backgroundPosition="center"
        container.style.backgroundSize="cover"
        Name.style.background="transparent"
        Temp.style.background="transparent"
        Name.style.padding="0"
        Temp.style.padding="0"
        Name.style.borderRadius="none"
        Temp.style.borderRadius="none"
       }
       else if (desc == "overcast clouds"){
        container.style.background="url(https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg)"
        container.style.backgroundPosition="center"
        container.style.backgroundSize="cover"
        Name.style.background="rgba(0, 0, 0, 0.152)"
        Temp.style.background="rgba(0, 0, 0, 0.152)"
        Name.style.padding="3px 10px"
        Temp.style.padding="3px 10px"
        Name.style.borderRadius="10px"
        Temp.style.borderRadius="10px"
       }
       else if (desc == "haze"){
        container.style.background="url(https://images.unsplash.com/photo-1533757704860-384affeed946?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D)"
        container.style.backgroundPosition="bottom"
        container.style.backgroundSize="cover"
       }
       else if (desc == "light rain"){
        container.style.background="url(https://24.media.tumblr.com/tumblr_m7juyhmWvO1qa9ri2o1_500.gif)"
        container.style.backgroundPosition="center"
        container.style.backgroundSize="cover"
       }
       
    }
    bg()
    

    var feel = data.main.feels_like
    document.querySelector('.feels').innerHTML=Math.round(feel)+"°C";

    var tempMax = data.main.temp_max;
    document.querySelector('.temp-max').innerHTML=(Math.round(tempMax)+2)+"°C";

    var tempMin = data.main.temp_min;
    document.querySelector('.temp-min').innerHTML=(Math.round(tempMin)-3)+"°C";

    var long = data.coord.lon;
    document.querySelector('.l').innerHTML=Math.round(long)+"°E";

    var lat = data.coord.lat;
    document.querySelector('.lat').innerHTML=Math.round(lat)+"°N";


    var humid = data.main.humidity;
    document.querySelector('.humid').innerHTML=humid+"%";

    var speed = data.wind.speed;
    document.querySelector('.spd').innerHTML=Math.round(speed*3.6);
}
 searchBtn,addEventListener("click",()=>{
    checkWeather(searchBox.value)
    searchBox.innerText=""
 } 
 )
