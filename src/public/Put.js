document.getElementById('guardar').addEventListener('click',putCancion);


async function putCancion(){
    console.log('llego');
    const create = await fetch('/cancion'+identifier.value,{
        method: 'PUT',
        body: JSON.stringify({
            nombre: nombre.value,
            anio: anio.value,
            genero: genero.value,
            duracion: duracion.value,
            artista: artista.value,
            posicion: posicion.value,
            address:{
                street: "z-13",
                suite: "Apt. 556",
                city: "Neveland",
                zipcode: "21007",
                goo: {
                    lat: "37.3150",
                    ing: "81.1496"
                }
            },
            websive: "website.org",
            company:{
                name:"A/N",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            },
            pais: pais.value


        }),
        headers: {
            "Content-type": "Application/json; charset-UTF-8",
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
    
}