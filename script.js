var item = document.querySelectorAll('.item');

var compteur = item.length;

for (i = 0; i < compteur; i++) {

    item[i].addEventListener('click', function () {

        this.remove();

    })
}

// creation de display dans header

let tete = document.getElementById('header')
tete.style = "display : flex; justify-content : space-evenly; flex-wrap:wrap; align-items :center";
let titreTodo = document.getElementsByTagName('h1');

// creation de formulaire 
let formulaire = document.createElement('div')
tete.appendChild(formulaire);
formulaire.style = "display : flex; flex-direction : column; justify-content:space-evenly "

// items de formulaire:

let titreN = document.createElement('h3');
formulaire.appendChild(titreN);
titreN.textContent = "Titre";


let titre = document.createElement('input');
formulaire.appendChild(titre);
titre.style = "width :300px; padding : 10px"

let categorieN = document.createElement('h3');
formulaire.appendChild(categorieN);
categorieN.textContent = 'Categorie';

let categorie = document.createElement('input');
formulaire.appendChild(categorie);
categorie.style = "width :300px; padding : 10px"

let dateN = document.createElement('h3');
formulaire.appendChild(dateN);
dateN.textContent = 'Date'


let date = document.createElement('input');
formulaire.appendChild(date);
date.style = 'width :300px; padding : 10px'


let validation = document.createElement('button');
formulaire.appendChild(validation);
validation.style = "padding : 10px; width :100px; margin : 10px 0 0 0"
validation.textContent = 'Validation';


// creation de new item , j'utilise jquery!
//  à la fin pour supprimer j'ai ajuté JS dans evenement

$('button').click(function () {

    var titreMes = $(titre).val();
    var categorieMes = $(categorie).val();
    var dateMes = $(date).val();


    $('#main_container').append(`
    
    <div class="item">
        <h3>${titreMes}</h3>
        <p>${categorieMes}</p>
        <p>${dateMes}</p>
    </div>
    
    `)

    $(titre).val(' ');
    $(categorie).val(' ');
    $(date).val(' ');

    var item = document.querySelectorAll('.item');

    var compteur = item.length;

    for (i = 0; i < compteur; i++) {

        item[i].addEventListener('click', function () {

            this.remove();

        })
    }


})


