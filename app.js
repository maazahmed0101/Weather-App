const inputer = document.querySelector('.inputer')
const Btn = document.querySelector('.search')
const H3sel = document.querySelector('.H3sel')
const h1selde = document.querySelector('.h1selde')
const pseldes = document.querySelector('.pseldes')
let img = document.querySelector('.icon')
Btn.addEventListener('click',()=>{
    
    let hi = inputer.value
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${hi}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`
    )
    .then(e=>e.json())
    .then(e=>{
        H3sel.innerHTML = `${e.name}, ${e.sys.country}`  ;
        h1selde.innerHTML = `${ Math.floor(  e.main.temp)} °C`
        pseldes.innerHTML = `${e.weather[0].description}`

        
        // console.log(weatherIcon);
        
        console.log(e);
        // console.log();
        
        
        if(pseldes.innerHTML === 'haze'){
            img.src="	https://weather-app-abc.vercel.app/img/clouds.png" 
           
        }else if(pseldes.innerHTML === 'scattered clouds'){
            
            img.innerHTML = `<img src="https://weather-app-abc.vercel.app/img/clouds.png" alt="" class="p-5 imgg">`
        } 
    })
})


