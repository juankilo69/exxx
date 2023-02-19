const lista = document.getElementById("lista")
const url = "https://randomuser.me/api/"

let profesores = []
let alumnos = []

document.querySelector("button").addEventListener("click",()=>{
    for(let i = 0; i < 20 ; i++){
        let peticion = new XMLHttpRequest()
        peticion.open("GET",url,true)
        peticion.send(null)
        peticion.onreadystatechange = function(){
            if(peticion.status == 200 && peticion.readyState == 4){
                if(lista.value == "profesores"){
                    let datos = JSON.parse(this.responseText)
                    profesores.push(datos.results[0])
                }
                else if(lista.value == "alumnos"){
                    let datos = JSON.parse(this.responseText)
                    alumnos.push(datos.results[0])
                }
            }
            
        }
    }

    if(lista.value == "profesores"){
        document.querySelector("div").innerHTML = ""
        profesores.forEach((p)=>{
            document.querySelector("div").innerHTML +=
            `<div class="objetos">
                <img src="${p.picture.medium}">
                <p>${p.name.title} ${p.name.first} ${p.name.last}</p>
                <p>${p.email}</p>
                <p>${p.gender}</p>
            </div>
            `
        })
    }else if(lista.value == "alumnos"){
        document.querySelector("div").innerHTML = ""
        for(let a of alumnos){
            document.querySelector("div").innerHTML +=
            `<div class="objetos">
                <img src="${a.picture.medium}">
                <p>${a.name.title} ${a.name.first} ${a.name.last}</p>
                <p>${a.email}</p>
                <p>${a.gender}</p>
            </div>
            `
        }
    }
})

console.log(profesores)
console.log(alumnos)

