const toursList = document.querySelector (".tours_main-tourlist");

function getTours () {

    toursList.innerHTML = "";
    toursData.forEach(function (tours) {
      toursList.innerHTML += `
      <div class="tours_toursCard">
     
        <div class="tours_tours-image" style="background-image: url(${tours.image});"></div>
        <h2>${tours.name}</h2>
        <p>${tours.description}</p>
        <table>
            <tr>
                <td>Start</td>
                <td>${tours.start}</td>
            </tr>
            <tr>
                <td>Finish</td>
                <td>${tours.finish}</td>
            </tr>
            <tr>
                <td>Complexity</td>
                <td>${tours.complexity}</td>
            </tr>
            <tr>
                <td>Length</td>
                <td>${tours.length}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>${tours.price} nok</td>
            </tr>
        </table>
        
        <a href="#" title="Book a Tour" class="button">Book</a>
      </div>       
        `;
    })
}

getTours();