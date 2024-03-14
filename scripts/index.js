const input = document.querySelector('#nameAct');
const description = document.querySelector('#descAct');
const imgAct = document.querySelector('#imgAct');
const add = document.querySelector('#addAct')
const container = document.querySelector(".activContainer")

class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.tilte = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities=[];
        this.id=0;    
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(tilte, description, imgUrl){
        const id = this.id++;
        const activity = new Activity (id, tilte, description, imgUrl)
        this.activities.push(activity)
    }
    deleteActivity(id){
    }
}
const activs = new Repository();

/* <div class="activity">
    <h3>Pintar</h3>
    <img src="./Img/paint-brush.png" class="logo">
    <p>Me encanta pintar cuadros en mi tiempo libre</p>
</div> */

for (activite in activs){
    const div = document.createElement('div');
    div.classList.add('activity');
    const title = document.createElement('h3');
    title.innerText= activite.tilte;
    const img = document.createElement('img');
    img.setAttribute = ('src', activite.imgUrl);
    const descrip = document.createElement('p');
    descrip.innerText = activite.description;

}
function testActivity(){
    console.log("entra");
    // activs.createActivity(input.value, description.value, imgAct.value);
    // console.log(activs)
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('activity');
    const title = document.createElement('h3');
    title.innerText= "activite.tilte";
    const img = document.createElement('img');
    img.classList.add('logo');
    img.setAttribute('src', 'https://cdn3d.iconscout.com/3d/premium/thumb/3-d-movie-4680526-3902087.png');
    const descrip = document.createElement('p');
    descrip.innerText = 'activite.description';
    cardDiv.append(title);
    cardDiv.append(img);
    cardDiv.append(descrip);
    container.append(cardDiv);
}



//https://cdn3d.iconscout.com/3d/premium/thumb/3-d-movie-4680526-3902087.png
