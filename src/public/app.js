$( document ).ready(function() {
    const url = '/cancion';
    fetch(url)

    .then(response => response.json())
    .then(data => {
        mostrar(data);

       /* for(let valor of Object.keys(data.cancions)){
            var nombre = $('#nombre').val(`${data.cancions[valor].nombre}`);
            var anio = $('#anio').val(`${data.cancions[valor].genero}`);
            var genero = $('#genero').val(`${data.cancions[valor].duracion}`);
            var duracion = $('#duracion').val(`${data.cancions[valor].posicion}`);
            var artista = $('#artista').val(`${data.cancions[valor].pais}`);
            var posicion = $('#posicion').val(`${data.cancions[valor].posicion}`);
            var pais = $('#pais').val(`${data.cancions[valor].pais}`)
            $('#editar').on('click', function(){
                $.ajax({
                    type:'PUT',
                    dataType: 'json',
                    url: `/cancion/_id/${data.cancions[valor]._id}`,
                    data
                })
            });

        }*/
    }).catch(err=>console.log(err));
});

    function mostrar(data){
        for(let valor of Object.keys(data.cancions)){
            $('#tbody').append(`
            <tr>
            <td>${data.cancions[valor].nombre}</td>
            <td>${data.cancions[valor].genero}</td>
            <td>${data.cancions[valor].duracion}</td>
            <td>${data.cancions[valor].artista}</td>
            <td>${data.cancions[valor].posicion}</td>
            <td>${data.cancions[valor].pais}</td>
            <td>${data.cancions[valor].estado ? "Activo": "Inactivo"}</td>
            <td>
            <div class="btn-group">
            <a href=""   class="btn btn-outline-primary" id="${data.cancions[valor]._id} onclick(editar;)">Editar</a>
            <a href="" class="btn btn-outline-danger"" id="${data.cancions[valor]._id}" onclick="eliminar(this);">Eliminar</a>
            </div>
               
            </td>
        </tr>
            `);
        }
    }

    function agregar(d){
       d.preventDefault();
       var nombre = $('#nombre').val();
       var genero = $('#genero').val();
       var duracion = $('#duracion').val();
       var artista = $('#artista').val();
       var posicion = $('#posicion').val();
       var pais = $('#pais').val();

       console.log(nombre,genero,duracion,artista,posicion,pais);
       

       $.ajax({
           type:'POST',
           dataType: 'json',
           url: '/cancion',
           data:{
               nombre: nombre,
               genero: genero,
               duracion: duracion,
               artista: artista,
               posicion: posicion,
               pais: pais
           },
           success: function(response){
               console.log(response);
           }
       });
    }

function eliminar($this){
    $this.id;
    $.ajax({
        type: 'DELETE',
        dataType: 'json',
        url:'/cancion/_id/'+$this.id,
        success: function(response){
            console.log(response);
        }
    });
}






   

  

    

   