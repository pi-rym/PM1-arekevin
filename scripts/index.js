class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }
    getAllActivities() {
        return this.activities;
    }
    createActivity(title, description, imgUrl) {
        const id = this.id++;
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
    }
    deleteActivity(id) {
        id = parseInt(id);
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

const activs = new Repository();

if(typeof document !== 'undefined'){

    input = document.querySelector('#nameAct');
    description = document.querySelector('#descAct');
    imgAct = document.querySelector('#imgAct');
    container = document.querySelector(".activContainer");
   
    agregar = document.getElementById("addAct");
    agregar.addEventListener("click", handlerClick);
}

function vaciarTarjetas() {
    container.innerHTML = "";
}

//Acción del botón add
function handlerClick(evento) {
    evento.preventDefault();
    if (!input.value || !description.value || !imgAct.value) {
        alert("Por favor diligencie todos los campos")
        return;
    }
    vaciarTarjetas();
    activs.createActivity(input.value, description.value, imgAct.value);
    addActivityHtml();
    input.value = "";
    description.value = "";
    imgAct.value = "";
}

//Acción del botón delete
function handlerDelete(event) {
    const getId = event.target.id;
    activs.deleteActivity(getId);
    addActivityHtml();
}

function addActivityHtml() {
    vaciarTarjetas();
    const arrayHtml = activs.getAllActivities().map(scripToHtml);
    arrayHtml.forEach(element => {
        container.append(element);
    });
    return undefined;

}
//Tarjetas a Html
function scripToHtml({id, title, description, imgUrl}){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('activity');

    const titleAct = document.createElement('h3');
    titleAct.innerText = title;

    const imgAct = document.createElement('img');
    imgAct.classList.add('logo');
    imgAct.src = imgUrl;

    const descripAct = document.createElement('p');
    descripAct.innerText = description;

    const borrar = document.createElement('img');
    borrar.src = "./Img/cross.webp";
    borrar.addEventListener('click', handlerDelete);
    borrar.classList.add('deleteBtn');
    borrar.title = "Eliminar actividad";
    borrar.id = id;

    cardDiv.append(titleAct, imgAct, descripAct, borrar);
    return cardDiv;
}

module.exports={
    Activity,
    Repository,
}
