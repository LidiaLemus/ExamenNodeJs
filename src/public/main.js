const url = '/cancion'

fetch(url)
.then(response => response.json())
.then(data => {
    let element = document.getElementById('element')
    element.innerHTML = `
    <p>${data.pais}</p>
    
    
    `;
    console.log(data)
})
.catch(err=>console.log(err))
