const toursPopular = document.querySelector (".home_main-popular-routes-container");

function popularTours () {
    toursPopular.innerHTML = "";
    for (let i = 0; i < toursData.length; i++) {
        if (!toursData[i].popular === true) {
            continue
        }
    
        toursPopular.innerHTML += `
        <div <div class="toursCard">
        <div class="tours-image" style="background-image: url(${toursData[i].image});"></div>
            <h3>${toursData[i].name}</h3>
            <p>${toursData[i].summary}</p>
        </div> 
        `
    }
}


popularTours ();
