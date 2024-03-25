
const randomNum = function () {
    let min = 1;
    let max = 152;
    let random = Math.floor(Math.random() * (max - min) + min);
    return random;

};

let mainPokemon = "";
async function getPokemon() {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum());
    mainPokemon = await response.json();
    return mainPokemon;


};

let botaoGenerate = document.getElementById('gerar-pokemon');
let divContent = document.getElementById('content');

let botaoShiny = document.getElementById("shiny-pkm");
let botaoNormal = document.querySelector('button#normal-version');

function pkmname(data) {
    let a = document.getElementById('name-pkm');
    let Upper_name = mainPokemon.forms[0].name;
    Upper_name = Upper_name.charAt(0).toUpperCase() + Upper_name.slice(1);
    a.innerText = Upper_name;
    // divContent.appendChild(a);

};
function pkmimg(data) {
    let pkmimg = document.getElementById("imgpokemon");
    // let img = document.createElement('img');
    pkmimg.setAttribute('src', `${mainPokemon.sprites.other.showdown.front_default}`)
    // pkmimg.appendChild(img);

};

function pkmid(data) {
    let pkmid = document.querySelector('p#id-pkm');
    pkmid.innerText = `#0${mainPokemon.id}`;

};

function normalpkm(data) {
    let pkmimg = document.getElementById("imgpokemon");
    pkmimg.setAttribute('src', `${mainPokemon.sprites.other.showdown.front_default}`)
};
function pkmshiny(data) {
    let pkmshiny = document.getElementById("imgpokemon");
    pkmshiny.setAttribute('src', `${mainPokemon.sprites.other.showdown.front_shiny}`)

};

function pkmtype(data) {
    let type = document.getElementById('pkm-type');
    type.innerHTML = "";
    data.types.forEach(i => {
        let pkmtype = i.type.name;
        let DivType = document.createElement('div');
        DivType.setAttribute('id', pkmtype);
        DivType.innerText = pkmtype;
        type.appendChild(DivType);
    });

};

botaoShiny.addEventListener('click', () => {
    pkmshiny(mainPokemon);
});

botaoNormal.addEventListener('click', () => {
    normalpkm(mainPokemon);
});


botaoGenerate.addEventListener('click', () => {
    (async () => {
        await getPokemon();
        pkmimg(mainPokemon);
        pkmname(mainPokemon);
        pkmid(mainPokemon);
        pkmtype(mainPokemon);
    })();


    // fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum())
    //     .then(response => response.json())
    //     .then(data => {
    //         pkmname(data);
    //         console.log(data.sprites.front_default);
    //     });

});
