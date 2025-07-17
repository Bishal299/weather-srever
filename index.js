import readline from 'readline/promises';

const API_KEY= '7bd1f2ad81098ac7683e49088d64d996';
const base_URL = 'https://api.openweathermap.org/data/2.5/weather';
 const rl=readline.createInterface({
    input:process.stdin,
    output: process.stdout
 });


 const getweather=async(city) => {
   const url = `${base_URL}?q=${city}&appid=${API_KEY}&units=metric`;
     try{
        const response= await fetch(url);
        if(!response.ok){
            throw new Error('city not found .please try again');
        }
        const weatherdata= await response.json();
        console.log(`temperature:${weatherdata.main.temp}`);
        console.log(`description: ${weatherdata.weather[0].description}` );
        console.log(`humidity :${weatherdata.main.humidity}%`);
     }catch(er) {
        console.log(er);
     }
 }

 const city =await rl.question('Enter a city name to get its weather:');

 await getweather(city);
 rl.close();