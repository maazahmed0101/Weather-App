const inputer = document.querySelector('.inputer')
const Btn = document.querySelector('.search')
const H3sel = document.querySelector('.H3sel')
const h1selde = document.querySelector('.h1selde')
const pseldes = document.querySelector('.pseldes')
let img = document.querySelector('.icon')
Btn.addEventListener('click', () => {

    let hi = inputer.value
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${hi}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`
    )
        .then(e => e.json())
        .then(e => {
            try {

                H3sel.innerHTML = `${e.name}, ${e.sys.country}`;
                h1selde.innerHTML = `${Math.floor(e.main.temp)} °C`
                pseldes.innerHTML = `${e.weather[0].description}`
                let icon = e.weather[0].icon
                if (pseldes.innerHTML === 'haze') {

                    img.innerHTML = `<img src="https://weather-app-abc.vercel.app/img/clouds.png" alt="" class=" imgg">`
                } else if (pseldes.innerHTML === 'scattered clouds') {

                    img.innerHTML = `<img src="https://weather-app-abc.vercel.app/img/clouds.png" alt="" class=" imgg">`
                } else if (pseldes.innerHTML === 'moderate rain') {
                } else {
                    img.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="" class=" imgtarla imgg">`
                }
            } catch (error) {
                alert('Please enter a valid city name')
            }


        })
})


