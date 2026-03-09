
const whatsapp="33600000000"

let vehicle="3m3"
let priceDay=80

function selectTruck(v,p){
vehicle=v
priceDay=p
document.getElementById("vehicle").value=v
updatePrice()
document.getElementById("booking").scrollIntoView({behavior:"smooth"})
}

function calcDays(){
let s=document.getElementById("start").value
let e=document.getElementById("end").value
if(!s||!e)return 1
let d=(new Date(e)-new Date(s))/(1000*60*60*24)
return Math.max(1,Math.ceil(d))
}

function updatePrice(){
let days=calcDays()
let total=days*priceDay
document.getElementById("price").innerText=total+"€"
}

function sendWhats(){
let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let start=document.getElementById("start").value
let end=document.getElementById("end").value

let msg=`Bonjour je souhaite louer un camion K-MION
Vehicule: ${vehicle}
Nom: ${name}
Telephone: ${phone}
Depart: ${start}
Retour: ${end}`

window.open("https://wa.me/"+whatsapp+"?text="+encodeURIComponent(msg))
}
