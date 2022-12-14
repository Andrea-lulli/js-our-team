// Viene fornito un file js in cui è definito un array di oggetti 
// che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le 
// relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa 
// della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede


// team
const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

let card = document.getElementById("card")



for (let i = 0; i < team.length; i++) {

  // stampa tutti gli oggetti dentro l'array
  console.log(team[i]);

  //stampa solo i nomi 
  console.log(team[i].name);

  //stampa solo i ruoli 
  console.log(team[i].role);

  //stampa solo le stringhe delle img
  console.log(team[i].image);

  //stampa nel dom le 6 card con tutti gli oggetti
  card.innerHTML += `
  <div class="card col-3 m-3" >
    <img src="/img/${team[i].image}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <p class="card-text"><strong>${team[i].name}</strong></p>
      <p class="card-text">${team[i].role}</p>
    </div>
  </div>`
}