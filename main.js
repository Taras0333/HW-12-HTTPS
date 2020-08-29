
function getPerson() {
    const people = axios.get('https://swapi.dev/api/films/2/');
    people.then((res) => {
        return (res.data.characters);
    }).then((res) => {
        const container = document.querySelector('.container');
        const contBtn = document.querySelector('#cont-btn');
        let cont = document.createElement('div');



        contBtn.addEventListener('click', ()=>{
            for(let i = 0; i < res.length; i++){
                axios.get(res[i]).then((res)=>{

                cont = document.createElement('div');
                cont.className = 'cont';

                container.append(cont);
                cont.innerHTML = `
                
                <h3>${res.data.name}</h3>
                <h4>${res.data.birth_year}</h4>
                <h4>${res.data.gender}</h4>
                `

        })
    }
        })
})
}

getPerson();
function getPlanets(){

    const next = document.querySelector('.next');
    let page = 1;

    next.addEventListener('click', ()=>{
        const planetWrap = document.querySelector('.planet-wrap');
        let planetsCont = document.createElement('div');

        const url = 'https://swapi.dev/api/planets/?page=' + page;
        page ++;
        let planetsAll = axios.get(url);
        planetWrap.innerHTML = ``;



        planetsAll.then((res)=>{


            return(res.data.results);

        }).then((res)=>{

            for (let i = 0; i < res.length; i++){
                planetsCont = document.createElement('div');

                planetsCont.className = 'planet-cont';
                planetWrap.append(planetsCont);


                planetsCont.innerHTML = `
            <h3>${res[i].name}</h3>`

            }

        })

    })

}
getPlanets();

function getAllPlanets(){
    for(let i = 0; i < 6; i++) {


        let page = i + 1;
        
        const wrap = document.querySelector('.all-planets');
        let planetsContt = document.createElement('div');

        let url = 'https://swapi.dev/api/planets/?page=' + page;

        page++;
        let planetsAll = axios.get(url);



        planetsAll.then((res) => {


            return (res.data.results);

        }).then((res) => {

            for (let i = 0; i < res.length; i++) {
                planetsContt = document.createElement('div');

                planetsContt.className = 'planet-cont';
                wrap.append(planetsContt);


                planetsContt.innerHTML += `
            <h3>${res[i].name}</h3>`

            }

        })
    }
}

getAllPlanets();