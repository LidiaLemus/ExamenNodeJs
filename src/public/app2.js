document.getElementById('loadinfo').addEventListener('click',getData);

async function getData(){
    const cancions = await fetch("/cancion");
    const response = await cancions.json();
    console.log(response);

    response.forEach(cancions => {
        infData.innerHTML += `
        <tr>
        <td>${cancions.nombre}</td>
        <td>${cancions.genero}</td>
        <td>${cancions.duracion}</td>
        <td>${cancions.artista}</td>
        <td>${cancions.posicion}</td>
        <td>${cancions.pais}</td>
        <td>${cancions.estado ? "Activo": "Inactivo"}</td>
        <td>
        <div class="btn-group">
        <a href="" class="btn btn-info" onclick="updateCancion(${cancions.id})">Editar</a>
        <a href="" class="btn btn-danger" onclick="deleteCancion(${cancions.id})">Eliminar</a>
        </div>
           
        </td>
    </tr>
        
        ` 
        
    });
    infData.innerHTML
}

async function eliminarCancion(cancionsId){
    console.log(cancionsId);
    var url ="/cancion"+cancionsId;
    console.log(url);
    const cancion = await fetch(url,{
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data));

const cancions = await fetch("/cancion");
const resp = await cancions.json();
console.log(resp);
infData.innerHTML = "";
resp.forEach(cancion =>{
    if(cancion.id != cancionsId){
        infData.innerHTML += `
        <tr>
        <td>${cancions.nombre}</td>
        <td>${cancions.genero}</td>
        <td>${cancions.duracion}</td>
        <td>${cancions.artista}</td>
        <td>${cancions.posicion}</td>
        <td>${cancions.pais}</td>
        <td>${cancions.estado ? "Activo": "Inactivo"}</td>
        <td>
        <div class="btn-group">
        <a href="" class="btn btn-info" onclick="updateCancion(${cancions.id})">Editar</a>
        <a href="" class="btn btn-danger" onclick="deleteCancion(${cancions.id})">Eliminar</a>
        </div>
           
        </td>
    </tr> 
        
        `
    }
});
}

