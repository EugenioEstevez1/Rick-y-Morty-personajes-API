function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => { done(data) })

}

getCharacters(data => {
    const main = document.querySelector("main");

    data.results.forEach(personaje => {
        const article = document.createElement("article");
        article.classList.add("personaje");

        article.innerHTML = `
            <div class="imagen">
                <img src="${personaje.image}" alt="Personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        `;
        main.appendChild(article)

    });


})

























// getCharacters(data => {
//     const main = document.querySelector("main");

//     data.results.forEach(personaje => {
//         // Crear un nuevo artículo para cada personaje
//         const article = document.createElement("article");
//         article.classList.add("personaje"); // Agrega una clase en lugar de un id

//         article.innerHTML = `
//             <div class="imagen">
//                 <img src="${personaje.image}" alt="Personaje">
//             </div>
//             <h2>${personaje.name}</h2>
//             <span>${personaje.status}</span>
//         `;

//         // Agregar cada artículo al contenedor principal
//         main.appendChild(article);
//     });
// });

