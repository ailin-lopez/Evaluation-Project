function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //number of flights in the json
    
    let content = '';
    for(let count=0;count<number_of_flights;count++){
        let flight = flight_det[count];

       
        const departure = new Date(flight.departTime)
        const arrival = new Date(flight.ArrivalTime)
        

        content +=  `
        <div class="col">
        <div class="card" >
        <img src="/Evaluation-Project/images/${count+1}.jpg" width="60" height="100"  class="card-img-top"
        alt="Hollywood Sign on The Hill" />
            <div class="card-body">
            
            
                <h5>Flight Number</h5>
                <p class="Flight-number">${flight_det[count]['flightNum']}</p>
                <h5>Origin</h5>
                <p class="origin">${flight_det[count]['origin']}</p>
                <h5>Destination</h5>
                <p class="destination">${flight_det[count]['destination']}</p>
                <h5>Departure</h5>
                <p class="departure-time">${departure.toUTCString()}</p>
                <h5>Arrival</h5>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h5>Price</h5>
                <p class="price">&#8377;${flight_det[count]['price']}</p>
                <button id="flight${flight_det[count]['id']}"; onclick="location.href = 'booking form.html'; get_flight_details(${flight_det[count]['id']});" type="button" class="btn btn-primary" );>Proceed</button>
            </div>
        </div>
        </div>
    `

    }
    document.querySelector("#card-collection").innerHTML = content;
}

fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data));

function get_flight_details(flightid){
    localStorage.setItem("flightid",flightid);
}
