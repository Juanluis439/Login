const container = document.getElementById("padre")
const datos = [
    {
        nombre: "juan",
        alias: "J",
        edad: "26"
    },
    {
        nombre: "Luis",
        alias: "L",
        edad: "25"
    }
];

const usuarios = datos.map((dato) => {
    const newDiv = document.createElement("div")
    const card = ` <div id="${dato.id}">
    <p> nombre: ${dato.nombre}</p>
    <p> alias: ${dato.alias}</p>
    <p> edad: ${dato.edad}</p>
    </div>`;
    newDiv.innerHTML = card
    container.appendChild(newDiv);
});

