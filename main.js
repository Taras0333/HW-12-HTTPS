
function getPerson() {
    const people = axios.get('https://swapi.dev/api/films/2/');
    people.then((res) => {

        return (res.data.characters);
    }).then((res) => {

        let aaa = res;
        let bbb = '';
        let ttt = [];
        let ccc = 'https';
        for (let i = 0; i < aaa.length; i++){
            bbb = aaa[i].split('');
            console.log(bbb);
            for (let i =0; i < bbb.length; i++){

                if(i === 5){
                    let ggg = bbb.slice(4);
                    console.log(ggg);
                    ccc += ggg.join('');
                    ggg = '';

                }

            }
            ttt.push(ccc);
            ccc = 'https';
        }

        console.log(bbb);
        console.log(ttt);
        const container = document.querySelector('.container');
        const contBtn = document.querySelector('#cont-btn');
        let cont = document.createElement('div');



        contBtn.addEventListener('click', ()=>{
            for(let i = 0; i < res.length; i++){
                axios.get(ttt[i]).then((res)=>{

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
}).catch((err)=>{
        console.log(err);
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

        }).catch((err)=>{
            console.log(err);
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

        }).catch((err)=>{
            console.log(err);
        })
    }
}

getAllPlanets();