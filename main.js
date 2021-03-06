function getPerson() {
  const people = axios.get("https://swapi.dev/api/films/2/");
  people
    .then((res) => {
      return res.data.characters;
    })
    .then((res) => {
      let resCopy = res;
      let https = [];
      resCopy.map((el) => {
        https.push(el.replace("http://", "https://"));
      });

      const container = document.querySelector(".inner-container");
      const contBtn = document.querySelector("#cont-btn");
      let cont = document.createElement("div");

      contBtn.addEventListener("click", () => {
        https.map((el) => {
          Promise.all([el]).then((element) => {
            axios.get(element).then((res) => {
              cont = document.createElement("div");
              cont.className = "cont";
              container.append(cont);
              cont.innerHTML = ` 
                            <h3>${res.data.name}</h3>
                            <h4>${res.data.birth_year}</h4>
                            <h4>${res.data.gender}</h4>
                            `;
            });
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
getPerson();

function getFilmInfo() {
  const input = document.querySelector(".input");
  const submitBtn = document.querySelector(".submit");
  let value = "";
  const prev = document.querySelector(".inner-container");

  submitBtn.addEventListener("click", () => {
    prev.innerHTML = "";
    const container = document.querySelector(".inner-container");
    value = input.value;
    const url = "https://swapi.dev/api/films/" + value + "/";
    const info = axios.get(url);
    info
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        let cont = document.createElement("div");
        cont.className = "film-episode-cont";
        cont.innerHTML = `
             <h3>${res.title}</h3>
             <h4>${res.release_date}</h4>
             <h4>${res.producer}</h4>`;
        container.append(cont);
        input.value = "";
      });
  });
}
getFilmInfo();

function getPlanets() {
  const next = document.querySelector(".next");
  let page = 1;

  next.addEventListener("click", () => {
    const planetWrap = document.querySelector(".planet-wrap");
    let planetsCont = document.createElement("div");
    const url = "https://swapi.dev/api/planets/?page=" + page;
    page++;
    let planetsAll = axios.get(url);
    planetWrap.innerHTML = ``;
    planetsAll
      .then((res) => {
        return res.data.results;
      })
      .then((res) => {
        res.map((el) => {
          planetsCont = document.createElement("div");
          planetsCont.className = "planet-cont";
          planetWrap.append(planetsCont);
          planetsCont.innerHTML = `
            <h3>${el.name}</h3>`;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
getPlanets();

function getAllPlanets() {
  for (let i = 0; i < 6; i++) {
    let page = i + 1;
    const wrap = document.querySelector(".all-planets");
    let planetsContt = document.createElement("div");
    let url = "https://swapi.dev/api/planets/?page=" + page;
    page++;
    let planetsAll = axios.get(url);
    planetsAll
      .then((res) => {
        return res.data.results;
      })
      .then((res) => {
        res.map((el) => {
          planetsContt = document.createElement("div");
          planetsContt.className = "planet-cont";
          wrap.append(planetsContt);
          planetsContt.innerHTML += `
              <h3>${el.name}</h3>`;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
getAllPlanets();
