let div4=document.querySelector(".div-4")
let input=document.querySelector(".input1")
z()
function z(){
    fetch(`https://restcountries.com/v3.1/all`)
    .then((malumod)=>{
        return malumod.json()
    }).then((malumod2)=>{
        malumod3(malumod2)
    })
}
function malumod3(malumod2){
    malumod2.forEach((data)=>{
        let div=document.createElement('div')
        div.classList='div10'
        let pul=data.currencies ? data.currencies[Object.keys(data.currencies)[0]].name : "N/A"
        div.innerHTML=`
        <img src="${data.flags.png}"</img>
        <h3><b>Davlat: </b> ${data.name.common}</h3>
        <p><b>Aholi son: </b> ${data.population}</p>
        <p><b>Poytahti: </b> ${data.continents}</p>
        <p><b>Pul birligi: </b> ${pul}</p>`
        div4.appendChild(div)   
    })
}

input.addEventListener('keyup',()=>{
    div4.innerHTML=''
    qidiruv(input.value)
})
function qidiruv(input5){
    fetch(`https://restcountries.com/v3.1/all`)
    .then((malumod)=>{
        return malumod.json()
    }).then((malumod2)=>{
        malumod2.forEach((data2)=>{
            let d=data2.name.common.toLowerCase()
            let x=input5.toLowerCase()
            if(d.includes(x)){
                console.log(d)
                let div=document.createElement('div')
                div.classList='div10'
                let pul=data2.currencies ? data2.currencies[Object.keys(data2.currencies)[0]].name : "N/A"
                div.innerHTML=`
                <img src="${data2.flags.png}"</img>
                <h3><b>Davlat: </b> ${data2.name.common}</h3>
                <p><b>Aholi son: </b> ${data2.population}</p>
                <p><b>Poytahti: </b> ${data2.continents}</p>
                <p><b>Pul birligi: </b> ${pul}</p>`
                div4.appendChild(div)
           }
        })
    })
}
let p=document.querySelectorAll('.p')
let header=document.querySelector('header')
let main=document.querySelector('main')
let h1=document.querySelectorAll('h1')
let button=document.querySelectorAll("button")
let k=true
button[0].addEventListener('click',()=>{
    if(k){
        div4.style=`
        display: grid;
        grid-template-columns:auto auto auto auto auto ;
        `
        header.style.width='5%'
        main.style.width='95%'
        h1[0].textContent='Dll'
        h1[1].textContent='Mlm'
        p[0].textContent=''
        p[1].textContent=''
        p[2].textContent=''
        p[3].textContent=''
        p[4].textContent=''
        p[5].textContent=''
    }else{
        div4.style=`
        display: grid;
        grid-template-columns:auto auto auto auto;
        `
        header.style.width='18%'
        main.style.width='82%'
        h1[0].textContent='Davlatlar'
        h1[1].textContent='Malumod'
        p[0].textContent='Home'
        p[1].textContent='Xaritalar'
        p[2].textContent='Fayllar'
        p[3].textContent='Yoqanlar'
        p[4].textContent='Settings'
        p[5].textContent='Log in'
    }
    k=!k
})























// let div1201=document.querySelector('h5')
// console.log(div1201)
// function qidiruv(qidiruv2){
//                 console.log(data.name.common)
//                 for(let i=0;i<=250;i++){
                            //  if(data.name.common.includes(`${data.name.common}`)){
//                                  }else{
//                                         console.log('hayif ')
//                                      }
//                             }
                        // }
                // input.addEventListener("keyup",qidiruv)
