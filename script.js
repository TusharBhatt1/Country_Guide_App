let okBtn=document.getElementById("ok")
okBtn.addEventListener("click",()=>{

    document.getElementById("main").style.display="block"
    document.querySelector(".intro").style.display="none"
    document.body.style.background="black"
})

let searchbutton= document.getElementById("searchbtn")
let inputfield= document.getElementById("inputfield")

searchbutton.onclick=()=>{

let result= document.getElementById("resultfield")
let countryname=inputfield.value
let finalUrl=`https://restcountries.com/v3.1/name/${countryname}?fullText=true`

fetch(finalUrl).then(response=> response.json()).then(data=>{

    result.innerHTML=` 
    <img src="${data[0].flags.svg}"class="flag-img" width="65px">
    <p>${data[0].name.common}</p>
    <p>Capital: ${data[0].capital[0]}<p>
    <p>Currency: ${Object.values(data[0].currencies)[0].name} (${Object.values(data[0].currencies)[0].symbol})
    <p>Population: ${data[0].population}</p>

    `
    
})



}