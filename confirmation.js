/* Java Script file to get values from local storage and to display them on the confirmation page. */

let flight_id=localStorage.getItem("flightid");
let val=localStorage.getItem("textvalue");
let val1=localStorage.getItem("textvalue1");
let val2=localStorage.getItem("textvalue2");
let val3=localStorage.getItem("textvalue3");
let val4=localStorage.getItem("textvalue4");
let val5=localStorage.getItem("gender");
let v1=localStorage.getItem("textvalue6");
let v2=localStorage.getItem("textvalue7");
let v3=localStorage.getItem("textvalue8");
let v4=localStorage.getItem("gender2");

let count = localStorage.getItem("count");
flight_id-=1;

console.log(flight_id);
console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);

fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));

let content='';

function display_value(data)
{
    if(count === "1") {
        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);
        content +=  `
        
        <div class="row">
            <div class="column">
                <div class="card" >
                    <h3> Passeneger Details </h3>
                    <h4> First name: ${val} </h4>
                    <h4> Last name: ${val1} </h4>
                    <h4> Age: ${val2} </h4>
                    <h4> Gender: ${val5} </h4>
                    <h4> Email: ${val3} </h4>
                    <h4> Phone no: ${val4} </h4>
                </div>
            </div>

            <div class="column">
                <div class="card" >
                    <h3> Flight Details </h3>
                    <h4> ${data[flight_id].flightNum}</h4>
                    <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                    <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                    <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                    <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                    <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
                </div>
            </div>
        </div>

    `
        document.querySelector("#card-collection").innerHTML = content;
    }

    else {
        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);
        content +=  `
        
        <div class="row">
            <div class="column">
                <div class="card" >
                    <h3> Passeneger1 Details </h3>
                    <h4> First name: ${val} </h4>
                    <h4> Last name: ${val1} </h4>
                    <h4> Age: ${val2} </h4>
                    <h4> Gender: ${val5} </h4>
                    <h4> Email: ${val3} </h4>
                    <h4> Phone no: ${val4} </h4>
                </div>
            </div>

            <div class="column">
                <div class="card" >
                    <h3> Passeneger2 Details </h3>
                    <h4> First name: ${v1} </h4>
                    <h4> Last name: ${v2} </h4>
                    <h4> Age: ${v3} </h4>
                    <h4> Gender: ${v4} </h4>
                </div>
            </div>

            <div class="column">
                <div class="card" >
                    <h3> Flight Details </h3>
                    <h4> ${data[flight_id].flightNum}</h4>
                    <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                    <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                    <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                    <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                    <h4>Price: <span> &#8377;${data[flight_id].price * 2}</h4>
                </div>
            </div>
        </div>

    `
    document.querySelector("#card-collection").innerHTML = content;
    }
}
