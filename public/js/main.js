const submitBtn=document.getElementById("submitbtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");

const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");

const getInfo=async(event)=>{
		event.preventDefault();
		let cityVal=cityName.value;
		if(cityVal===""){
			city_name.innerText="please enter the city to search!!";
		}else{
			try{
				let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f821c4b1f0ea1d1d5355bc0b2c4318ab`;
				const response=await fetch(url);
				const data=await response.json();
				console.log(data);
				const arrData=[data];
				city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
				temp.innerText=`${arrData[0].main.temp}°C`;
				temp_status.innerText=arrData[0].weather[0].main;
				
			}catch{
				city_name.innerText="Please enter correct city name!!";
				temp.innerText=``;
				temp_status.innerText="";
			}
		
		}
	}

submitBtn.addEventListener("click",getInfo);
